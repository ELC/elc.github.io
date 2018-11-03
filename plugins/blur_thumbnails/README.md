# Blur Thumbnails for Pelican

The Blur thumbnails plugin generates thumbnails with a gaussian blur at build
time, it produces an effect similar to "Medium" blog posts. Ideal for lazy
loading images with placeholders.

It requires PIL

## Installation

Set up like any other plugin, making sure to set `PLUGIN_PATH` and add `blur_thumbnails` to the `PLUGINS` list.

## Configuration

- `BLUR_PATH`: The path where all the images resides, could be the `blog` or any other folder. Make sure you configure your static folder properly.

## Usage

Once the `BLUR_PATH` is defined, the thumnails will be generated automatically. The extension will be the same and a `-thumbnail` will be added at the end of the filename. The resolution is fix to 200x200 but this could be changed in the code if need be.