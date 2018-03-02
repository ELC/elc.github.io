from invoke import task, run

@task
def build(ctx):
    ctx.run("pelican -s devconf.py -o output -t theme content")