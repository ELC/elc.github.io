# -*- coding: utf-8 -*-
'''
Bundler and Cache Busting
-------------------------

The bundler plugin generates a bundle file for all the css files and a bundle 
file for all the js files. It simply concatenates without minifing or 
compressing. Useful for reducing the number of requests without any 
performance overhead. It also modifies the base theme HTML file and appends
a hash of the file at the end to improve change detection when using cache 
systems or service workers.

It works with no no dependencies apart from pelican itself.

Copyright (c) 2018 Ezequiel Leonardo Castaño
'''

import os
from pelican import signals
import hashlib

# Function extracted from https://stackoverflow.com/a/19308592/7690767
def get_filepaths(directory, extensions=[], ignores=[]): 
    """
    This function will generate the file names in a directory 
    tree by walking the tree either top-down or bottom-up. For each 
    directory in the tree rooted at directory top (including top itself), 
    it yields a 3-tuple (dirpath, dirnames, filenames).
    """
    file_paths = []  # List which will store all of the full filepaths.
    
    exts = extensions

    if isinstance(extensions, str):
        exts = [extensions]

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


def create_bundle(files, output):

    with open(output, 'w') as outfile:
        for fname in files:
            with open(fname) as infile:
                outfile.write('\n\n')
                for line in infile:
                    outfile.write(line)


def create_bundles(sender):

    output_path = getattr(sender, 'output_path', None)
    theme_path = sender.settings.get('THEME_STATIC_DIR', None)

    if None in [theme_path, output_path]:
        return

    js_bundle = f'./{theme_path}/static/js/scripts.js'
    js_filenames = get_filepaths(theme_path, 'js')
    create_bundle(js_filenames, js_bundle)

    css_bundle = f'./{theme_path}/static/css/style.css'
    css_filenames = get_filepaths(theme_path, 'css')
    create_bundle(css_filenames, css_bundle)

    bundles = [js_bundle.split('/')[-1], css_bundle.split('/')[-1]]

    delete_files = get_filepaths(theme_path, ['css', 'js', 'scss', 'map'], bundles)

    for filename in delete_files:
        os.remove(filename)


def hash_file(filename):
    hasher = hashlib.md5()
    with open(filename, 'rb') as f:
        buf = f.read()
        hasher.update(buf)
    return hasher.hexdigest()


def add_cache_busting(sender):

    FILES = sender.settings.get('FILES_TO_CACHE_BUSTING', None)

    output_path = getattr(sender, 'output_path', None)

    theme_path = sender.settings.get('THEME_STATIC_DIR', 'theme')

    base_path = sender.settings.get('THEME_BASE_TEMPLATE', 'base.html')

    if None in [theme_path, FILES, output_path]:
        return

    files_to_cache = []

    for filename in FILES:
        file_path = f'./{theme_path}/static/{filename}'
        hash_digest = hash_file(file_path)[-7:]
        path = f'/theme/{filename}?v={hash_digest}'
        files_to_cache.append(path)

    with open(f'./{theme_path}/templates/{base_path}', 'r+') as f:
        contents = f.read()
        
        for raw_filename, hashed_filename in zip(FILES, files_to_cache):
            raw_namefile = raw_filename.split("/")[-1]
            hashed_namefile = hashed_filename.split("/")[-1]
            contents = contents.replace(raw_namefile, hashed_namefile)

    with open(f'./{theme_path}/templates/{base_path}', 'w') as f:
        
        f.write(contents)


def main(sender):
    create_bundles(sender)
    add_cache_busting(sender)


def register():
    signals.initialized.connect(main)
