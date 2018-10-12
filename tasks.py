from invoke import task
from time import time
import datetime
from cache import get_filepaths

def compile_scss(c, path):
    paths = get_filepaths(path, 'scss')
    for filename in paths:
        c.run(f"sass {filename} {filename}.css -s compressed")

@task
def buildWin(c):
    print('Started - {:%H:%M:%S}'.format(datetime.datetime.now()))
    start_time = time()
    c.run("rd theme /S /Q ")
    c.run("pipenv run copy-windows")
    compile_scss(c, 'theme')
    c.run("pipenv run create-thumbnails")
    c.run("pipenv run test")
    c.run("pipenv run clean")
    end_time = time()
    print('Elapsed Time: {:.2f} seconds'.format(end_time - start_time))

@task
def buildTheme(c):
    c.run("pipenv run copy-windows")
    compile_scss(c, 'theme')
    c.run("pipenv run create-thumbnails")
    c.run("pipenv run test-theme")
    c.run("pipenv run clean")

@task
def build(c):
    c.run("pipenv run download")
    compile_scss(c, 'theme')
    c.run("pipenv run create-thumbnails")
    c.run("pipenv run build")
    c.run("pipenv run clean")