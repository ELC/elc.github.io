import os
import hashlib
import json

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

def hash_file(filename):
    hasher = hashlib.md5()
    with open(filename, 'rb') as f:
        buf = f.read()
        hasher.update(buf)
    return hasher.hexdigest()


def create_service_worker():
    extensions = ['js', 'html', 'css', 'svg']
    img_extensions = ['png', 'jpg', 'gif']
    ignores = ['sw.js']

    FILES = get_filepaths("output", extensions, ignores=ignores)

    images = get_filepaths("output", img_extensions, ignores=ignores)

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

    # Remove output from path
    files_to_cache = [path[6:] for path in files_to_cache]

    # Special case for /
    hash_digest = hash_file('output/index.html')[-7:]
    path = f'/?v={hash_digest}'

    files_to_cache.append(path)

    FILES_TO_CACHE = tuple(files_to_cache)


    with open('./content/extra/sw_template.js', 'r+') as f:
        contents = f.read()
        contents = contents.replace('"$FILES_TO_CACHE$"', json.dumps(FILES_TO_CACHE, sort_keys=True, indent=4))
        version_hash = hashlib.md5(contents.encode('utf-8')).hexdigest()[-7:]
        contents = contents.replace('$VERSION$', version_hash)
        with open('./output/sw.js','w') as f2: 
            f2.write(contents)

if __name__ == "__main__":
    create_service_worker()
    
