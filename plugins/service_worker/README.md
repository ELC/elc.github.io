# Service Worker for Pelican

This service worker plugin generates a service worker which will cache all the static and lightweight files of the ouput site (images not included). The
Service Worker version is generated automatically as a hash of its files instead. It uses cache busting techniques to detect changes and keep the site updated.

It requires the user to provided a service worker template, one is provided along with this script

It works with no no dependencies apart from pelican itself.

## Installation

Set up like any other plugin, making sure to set `PLUGIN_PATH` and add `service_worker` to the `PLUGINS` list.

## Configuration

- `SERVICE_WORKER_THEMPLATE`: The path for the service worker template. A sample template is provided in the repo.

## The template

The template should contain two strings:

- `"$VERSION$"`: The version of the file, crucial to the change detection for the browser. It is recommended to use it in the name of the cache.
- `"$FILES_TO_CACHE$"`: The place where the list of files to cache will be appended, it is recomended to place it at the top.

## Examples:

```python
SERVICE_WORKER_THEMPLATE = './content/extra/sw_template.js'
```

Will produce a sw.js file in the root of the output_path

## Usage

Just provided a template for the service worker and the rest is handled automatically. If you use low resolution thumbnails, the service worker will cache them if they end with `"-thumbnail.xxx"`.