from invoke import task, run

@task
def build(ctx):
    ctx.run("pelican -s conf.py -o output -t theme content")