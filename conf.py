#!/usr/bin/env python
# -*- coding: utf-8 -*- #

from __future__ import unicode_literals
import os
import sys
sys.path.append(os.curdir)

# Server

SITEURL = 'https://elc.github.io/'
RELATIVE_URLS = False
AUTHOR = 'Ezequiel Leonardo Castaño'
SITENAME = 'Ezequiel Leonardo Castaño'
DELETE_OUTPUT_DIRECTORY = True
PATH = 'content'
TIMEZONE = 'America/Argentina/Buenos_Aires'
PAGE_ORDER_BY = 'order'


# Plugins

PLUGIN_PATHS = ['plugins']
PLUGINS = ['pelican-ert', 'backreftranslate', 'summary']

# ERT

ERT_WPM = 150
ERT_FORMAT = '{time}'

# Localization

DEFAULT_LANG = 'en'

# Directories Layout

USE_FOLDER_AS_CATEGORY = False

# UI

DISPLAY_CATEGORIES_ON_MENU = False

# URL Settings

ARTICLE_URL = 'posts/{slug}'
ARTICLE_SAVE_AS = 'posts/{slug}/index.html'

PAGE_URL = 'pages/{slug}/'
PAGE_SAVE_AS = 'pages/{slug}/index.html'

YEAR_ARCHIVE_SAVE_AS = 'posts/{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = 'posts/{date:%Y}/{date:%b}/index.html'

# Blogroll 

DISQUS_SITENAME = "elcweb"
GOOGLE_ANALYTICS = "UA-71773079-3"

SOCIAL = (
    ('twitter', 'https://twitter.com/eze_leo_'),
    ('github', 'https://github.com/ELC'),
    ('facebook', 'https://facebook.com/ezecast'),
    ('envelope', 'mailto:skielcast@gmail.com'),
)

# Pagination

DEFAULT_PAGINATION = 10
