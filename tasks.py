from invoke import task, run

@task
def buildProduction(ctx):
    ctx.run("pelican -s conf.py -o output -t theme content")


@task
def buildDevelop(ctx):
    ctx.run("pelican -s devconf.py -o output -t theme content")

@task
def download(ctx):
    ctx.run("git clone -b master --single-branch 'https://github.com/ELC/MinimalXYZ.git' theme")

@task
def test(ctx):
    ctx.run("pelican -s devconf.py -o output -t theme content")