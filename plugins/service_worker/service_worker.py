# -*- coding: utf-8 -*-
'''
Service Worker
-------

This service worker plugin generates a service worker which will cache all the
static and lightweight files of the output site (images not included). The
Service Worker version is generated automatically as a hash of its files instead.
It uses cache busting techniques to detect changes and keep the site updated.

It requires the user to provided a service worker template, one is provided along
with this script

It works with no no dependencies apart from pelican itself.

Copyright (c) 2018 Ezequiel Leonardo Castaño
'''

import os
from pelican import signals
import hashlib
import json
import urllib.request

# Function extracted from https://stackoverflow.com/a/19308592/7690767
def get_filepaths(directory, extensions=None, ignores=None): 
        """
        This function will generate the file names in a directory 
        tree by walking the tree either top-down or bottom-up. For each 
        directory in the tree rooted at directory top (including top itself), 
        it yields a 3-tuple (dirpath, dirnames, filenames).
        """
        file_paths = []  # List which will store all of the full filepaths.
        
        if extensions is None:
            extensions = []

        exts = extensions

        if isinstance(extensions, str):
            exts = [extensions]

        if ignores is None:
            ignores = []

        igns = ignores

        if isinstance(ignores, str):
            igns = [ignores]

        # Walk the tree.
        for root, directories, files in os.walk(directory):
            for filename in files:

                if filename in igns or not any(filename.endswith(f".{ext}") for ext in exts):
                    continue

                filepath = os.path.join(root, filename).replace("\\", "/")
                file_paths.append(filepath)

        return file_paths

def hash_file(filename):
    hasher = hashlib.md5()
    with open(filename, 'rb') as f:
        buf = f.read()
        hasher.update(buf)
    return hasher.hexdigest()


def create_service_worker(sender):

    output_path = getattr(sender, 'output_path', None)
    sw_template = sender.settings.get('SERVICE_WORKER_THEMPLATE', None)

    if None in [output_path, sw_template]:
        return

    extensions = ['js', 'html', 'css', 'svg', 'ini', 'ico', 'webmanifest', 'xml']
    img_extensions = ['png', 'jpg', 'gif']
    ignores = ['sw.js']

    FILES = get_filepaths(output_path, extensions, ignores=ignores)

    images = get_filepaths(output_path, img_extensions, ignores=ignores)

    thumbnails = [filename for filename in images if '-thumbnail' in filename]

    FILES.extend(thumbnails)

    files_to_cache = []

    for filename in FILES:
        hash_digest = hash_file(filename)[-7:]
        
        path = f'{filename}?v={hash_digest}'

        if filename.endswith('index.html'):
            filename_without_index = filename[:-10]
            path = f'{filename_without_index}?v={hash_digest}'

        files_to_cache.append(path)
    
    # External Files

    external_cache_file = sender.settings.get('EXTERNAL_CACHE_FILE', None)

    if external_cache_file is not None:

        with open(external_cache_file) as f:
            external_cache = json.load(f)

        hasher = hashlib.md5()

        repo_extensions_ignore = [".md", "LICENSE"]

        # External Repos
        token = None
        try:
            from github import Github
            GITHUB_API = True
            token = os.environ.get("GITHUB_ACCESS", None)
        except:
            if token is not None:
                print("GITHUB Library NOT INSTALLED")
            else:
                print("NO GITHUB TOKEN WAS PROVIDED")
            GITHUB_API = False
            token = None

        if GITHUB_API and token is not None:
            g = Github(token)

            for repo_name, repo_data in external_cache['repos'].items():
                owner = repo_data.get('owner', "ELC")
                branch = repo_data.get('branch', "master")
                repo = g.get_user().get_repo(repo_name)
                contents = repo.get_contents("", ref=branch)

                while contents:
                    file_content = contents.pop(0)
                    if file_content.type == "dir":
                        contents.extend(repo.get_contents(file_content.path, ref=branch))
                        continue
                    
                    filename = f"/{repo_name}/{file_content.path}"
                    
                    if filename.endswith('index.html'):
                        filename = filename[:-10]
                    
                    path = f'{filename}?v={file_content.sha[-7:]}'
                    files_to_cache.append(path)

        for repo_name, repo_data in external_cache['repos'].items():
            owner = repo_data.get('owner', "ELC")
            branch = repo_data.get('branch', "master")
            folders = repo_data.get('folders', [])
            folders += [''] # Root Folder

            if GITHUB_API and token is not None:
                break

            for folder in folders:
                url = f"https://api.github.com/repos/{owner}/{repo_name}/contents/{folder}?ref={branch}"
                
                with urllib.request.urlopen(url, timeout=10) as f:
                    data = json.loads(f.read())
                
                files = {f"/{repo_name}/{data_item['path']}":data_item['download_url'] for data_item in data}

                for filename, url in files.items():
                    
                    is_in_ignore = any(filename.endswith(suffix) for suffix in repo_extensions_ignore) 

                    if url is None or is_in_ignore:
                        continue

                    with urllib.request.urlopen(url, timeout=10) as f:
                        buf = f.read()

                    hasher.update(buf)
                    hash_digest = hasher.hexdigest()[-7:]

                    path = f'{filename}?v={hash_digest}'

                    if filename.endswith('index.html'):
                        filename_without_index = filename[:-10]
                        path = f'{filename_without_index}?v={hash_digest}'

                    files_to_cache.append(path)

        # External URLs

        for url in external_cache['URLs']:

            with urllib.request.urlopen(url) as f:
                buf = f.read()

            hasher.update(buf)
            hash_digest = hasher.hexdigest()[-7:]

            url = url.partition("://")[2] # Remove Protocol
            filename = '/' + url.partition("/")[2] # Remove Domain
            path = f'{filename}?v={hash_digest}'

            if filename.endswith('index.html'):
                filename_without_index = filename[:-10]
                path = f'{filename_without_index}?v={hash_digest}'

            files_to_cache.append(path)

    # Remove output from path - Compatible with Travis
    files_to_cache = [path.split('output')[-1] for path in files_to_cache]

    # Special case for /
    hash_digest = hash_file(f'{output_path}/index.html')[-7:]
    path = f'/?v={hash_digest}'

    files_to_cache.append(path)

    FILES_TO_CACHE = sorted(set(files_to_cache))


    with open(sw_template, 'r+') as f:
        contents = f.read()
        contents = contents.replace('"$FILES_TO_CACHE$"', json.dumps(FILES_TO_CACHE, sort_keys=True, indent=4))
        version_hash = hashlib.md5(contents.encode('utf-8')).hexdigest()[-7:]
        contents = contents.replace('$VERSION$', version_hash)
        with open(f'{output_path}/sw.js','w') as f2: 
            f2.write(contents)


def register():
    signals.finalized.connect(create_service_worker)
