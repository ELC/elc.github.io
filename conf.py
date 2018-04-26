#!/usr/bin/env python
# -*- coding: utf-8 -*- #

from __future__ import unicode_literals
import os
import sys
sys.path.append(os.curdir)

# Server

SITEURL = 'https://elc.github.io'
RELATIVE_URLS = False
AUTHOR = 'Ezequiel Leonardo Castaño'
AUTHOR_EMAIL = 'skielcast@gmail.com'
AUTHOR_AVATAR = r"https://i.imgur.com/6xypjCl.png"
SITESUBTITLE = "Ezequiel Leonardo Castaño Personal Website - In this website you will find post about christianity, programming and math"
SITENAME = 'Ezequiel Leonardo Castaño Personal Website'
SITEIMAGE = r"https://i.imgur.com/6xypjCl.png"
DELETE_OUTPUT_DIRECTORY = True
PATH = 'content'
TIMEZONE = 'America/Argentina/Buenos_Aires'
PAGE_ORDER_BY = 'order'

RELATED_POSTS_MAX = 3
STATIC_PATHS = ['blog']

# Feed

FEED_DOMAIN = 'http://feeds.feedburner.com'
FEED_ALL_ATOM  = 'ELCWEB'
FEED_ATOM  = 'feeds/all.atom.xml'


# Markdown Extensions

MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight w3-round-xlarge w3-card-4'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
        'markdown.extensions.toc': {'anchorlink': True},
    },
    'output_format': 'html5',
}

# Plugins

PLUGIN_PATHS = ['plugins']
PLUGINS = ['pelican-ert', 'backreftranslate', 'summary', 'gravatar', 'neighbors',
           'related_posts', 'pelican_gist', 'pelican_githubprojects', 'render_math', 'sitemap']

SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.99,
        'indexes': 0.5,
        'pages': 0.5
    },
    'changefreqs': {
        'articles': 'daily',
        'indexes': 'daily',
        'pages': 'monthly'
    }
}

# GITHUB Plugins

GITHUB_USER = 'ELC'
STABLE_REPOS = ['comparisons',
                'utn-genetic-algorithms',
                'utn-java-final-assignment',
                'utn-java-final-assignment-web',
                'ML-Tutorial']

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

ARTICLE_LANG_URL = 'posts/{slug}/{lang}'
ARTICLE_LANG_SAVE_AS = 'posts/{slug}/{lang}/index.html'

ARCHIVES_URL = 'archives/'
ARCHIVES_SAVE_AS = 'archives/index.html'

PAGE_URL = 'pages/{slug}/'
PAGE_SAVE_AS = 'pages/{slug}/index.html'

PAGE_LANG_URL = 'pages/{slug}/{lang}'
PAGE_LANG_SAVE_AS = 'pages/{slug}/{lang}/index.html'

YEAR_ARCHIVE_SAVE_AS = 'posts/{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = 'posts/{date:%Y}/{date:%b}/index.html'

TAG_URL = 'tag/{slug}/'
TAG_SAVE_AS = 'tag/{slug}/index.html'
TAGS_URL = 'tags/'
TAGS_SAVE_AS = 'tags/index.html'

AUTHOR_URL = 'author/{slug}/'
AUTHOR_SAVE_AS = 'author/{slug}/index.html'
AUTHORS_URL = 'authors/'
AUTHORS_SAVE_AS = 'authors/index.html'

CATEGORY_URL = 'category/{slug}/'
CATEGORY_SAVE_AS = 'category/{slug}/index.html'
CATEGORIES_URL = 'categories/'
CATEGORIES_SAVE_AS  = 'categories/index.html'

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

PAGINATION_PATTERNS = (
    (1, '{base_name}/', '{base_name}/index.html'),
    (2, '{base_name}/page/{number}/', '{base_name}/page/{number}/index.html'),
)
