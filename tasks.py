from invoke import task
from time import time
import datetime
import os

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

def compile_scss(c, path):
    paths = get_filepaths(path, 'scss')
    for filename in paths:
        c.run(f"sass {filename} {filename}.css -s expanded")


@task
def buildWin(c):
    print('Started - {:%H:%M:%S}'.format(datetime.datetime.now()))
    start_time = time()
    c.run("rd theme /S /Q")
    c.run("pipenv run copy-windows-theme")
    c.run('rd content /S /Q ')
    c.run("pipenv run copy-windows-content")
    c.run("pipenv run move-windows-content")
    c.run("del content\\README.md ")
    compile_scss(c, 'theme')
    c.run("pipenv run test")
    end_time = time()
    print('Elapsed Time: {:.2f} seconds'.format(end_time - start_time))


@task
def buildTheme(c):
    c.run("pipenv run copy-windows-theme")
    c.run("pipenv run copy-windows-content")
    compile_scss(c, 'theme')
    c.run("pipenv run test-theme")

@task
def build(c):
    c.run("pipenv run download-theme")
    c.run("pipenv run download-content")
    c.run("pipenv run move-content")
    c.run("pipenv run copy-extra")
    c.run("rm content/README.md")
    compile_scss(c, 'theme')
    c.run("pipenv run build")