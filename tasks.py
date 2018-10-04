from invoke import task

@task
def buildWin(c):
    c.run("pipenv run copy-windows")
    c.run("pipenv run compile-css")
    c.run("pipenv run test")

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