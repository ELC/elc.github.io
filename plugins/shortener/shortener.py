# -*- coding: utf-8 -*-
'''
Shortener
-------

The shortener plugin generates plain HTML files for redirects inside the output
directory, it integrates easily with google analytics

It works with no no dependencies apart from pelican itself.

Copyright (c) 2018 Ezequiel Leonardo Castaño
'''

import os
from pelican import signals
import json

def generate_output(sender):
    """ Generates a directory structure with the HTML files necessary for the redirects """

    output_path = getattr(sender, 'output_path', None)

    redirects_map = sender.settings.get('SHORTENER_LINKS', None)

    shortener_file = sender.settings.get('SHORTENER_FILE', None)

    analytics = sender.settings.get('GOOGLE_ANALYTICS', None)

    ignore_folder = sender.settings.get('SHORTENER_SKIP_FOLDER', None)

    if not shortener_file is None:
        with open(shortener_file) as f:
            redirects_map = json.load(f)
        
    if None in [output_path, redirects_map]:
        return

    redirects_folder = sender.settings.get('SHORTENER_FOLDER', None)

    output_path_with_folder = output_path

    if not redirects_folder is None:
        output_path_with_folder = os.path.join(output_path, redirects_folder)

    for filename, redirect_url in redirects_map.items():

        if ignore_folder and filename in ignore_folder:
            generate_folder_file(filename, output_path, redirect_url, analytics)

        generate_folder_file(filename, output_path_with_folder, redirect_url, analytics)

def generate_folder_file(file, folder, link, analytics):

    BASE_HTML = """
    <html>
    <head>
    <meta http-equiv="refresh" content="0; URL='{0}'" />
    </head>
    <body>
    {analytics}
    </body>
    </html>
    """

    ANALYTICS = """
    <!-- Google Analytics -->
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'GA_CODE', 'auto');
        ga('send', 'pageview');
    </script>
    """

    if analytics is None or analytics == "":
        ANALYTICS = ""

    if not (link.startswith('http://') or link.startswith('https://')):
        link = 'http://' + link
    
    folder_path = os.path.join(folder, file)

    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

    file_path = os.path.join(folder_path, 'index.html')

    with open(file_path, 'w', encoding='utf-8') as fd:
        
        if not analytics is None:
            analytics_snipped = ANALYTICS.replace('GA_CODE', analytics)
            content = BASE_HTML.format(link, analytics=analytics_snipped)
        else:
            content = BASE_HTML.format(link, analytics="")

        fd.write(content)


def register():
    signals.finalized.connect(generate_output)
