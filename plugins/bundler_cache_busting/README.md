# Bundler and Cache Busting for Pelican

This plugin generates a bundle file for all the css files and a bundle file for all the js files. It simply concatenates without minifing or compressing. Useful for reducing the number of requests without any performance overhead. It also modifies the base theme HTML file and appends a hash of the file at the end to improve change detection when using cache systems or service workers.

It works with no no dependencies apart from pelican itself.

## Installation

Set up like any other plugin, making sure to set `PLUGIN_PATH` and add `bundler_cache_busting` to the `PLUGINS` list.

## Configuration

- `THEME_STATIC_DIR` (Optional): The directory for the theme folder
- `THEME_BASE_TEMPLATE`: The path for the base.html where all the links to the static files are.
- `FILES_TO_CACHE_BUSTING`: A list of paths to the files which will have cache busting, it could be the ouput of the bundler itself. If not set, it disables the cache busting part.

Examples:

### Using the same output from the bundler

```python
FILES_TO_CACHE_BUSTING = (
    'js/scripts.js',
    'css/style.css',
)
```

Will produce:

    <link rel="stylesheet" type="text/css" href="./theme/css/style.css?v=6e15c9f">
    ...
    <script src="./theme/js/scripts.js?v=43c83e2" ></script>

## Usage

Bundler works automatically with no configuration, it will concatenate the files in alphabetical order. Cache Busting will only work if the `FILES_TO_CACHE_BUSTING` is ser.