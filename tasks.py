from invoke import task
from time import time
import datetime

@task
def buildWin(c):
    print('Started - {:%H:%M:%S}'.format(datetime.datetime.now()))
    start_time = time()
    c.run("pipenv run copy-windows")
    c.run("pipenv run compile-css")
    c.run("pipenv run test")
    end_time = time()
    print('Elapsed Time: {:.2f} seconds'.format(end_time - start_time))

@task
def buildTheme(c):
    c.run("pipenv run copy-windows")
    c.run("pipenv run compile-css")
    c.run("pipenv run test-theme")

@task
def build(c):
    c.run("pipenv run download")
    c.run("pipenv run compile-css")
    c.run("pipenv run build")