# Custom Static Shortener for Pelican

This plugin creates HTML files with a `redirects meta tag` to provide shortener similar feature. It also works with Google analytics when the `GOOGLE_ANALYTICS` is set in the conf file. 

It works with no no dependencies apart from pelican itself.

## Installation

Set up like any other plugin, making sure to set `PLUGIN_PATH` and add `shortener` to the `PLUGINS` list.

## Configuration

- `SHORTENER_LINKS`: Is a dict where the key represents the shortened part and the value the url it redirects to. It will use `http://` if it isn't part of the url.
- `SHORTENER_FILE` (Optional): A path to a json file to all the redirects, it should be a simple dictionary. This is a way to keep the configuration file of pelican cleaner and have the redirects in a separate file. Can be used with the SHORTENER_FOLDER.
- `SHORTENER_FOLDER` (Optional): A constant that defines where the directory structure will be created. If not set it will create the directories in the root of the ouput_path.

### Examples

#### SHORTENER_FOLDER not set or None

```python
SHORTENER_LINKS = {'hello':'www.google.com'}
```

Will produce:

    output_path/hello/index.html

#### SHORTENER_FOLDER set

```python
SHORTENER_LINKS = {'hello':'www.google.com'}

SHORTENER_FOLDER = 'short'
```

Will produce:

    output_path/short/hello/index.html

#### SHORTENER_FOLDER set with nested dirs

```python
SHORTENER_LINKS = {'hello':'www.google.com'}

SHORTENER_FOLDER = 'short/goto'
```

Will produce:

    output_path/short/goto/hello/index.html

#### SHORTENER_FILE set

```python
SHORTENER_FILE = "shortener.json"
```

shortener.json:

    {
        "github": "https://github.com/ELC"
    }

Will produce:

    output_path/short/goto/hello/index.html

## Usage

You can create links directly to the path of the shortened url, as with articles and pages you can omit the `index.html` at the end. Example: `output_path/short/goto/hello/`