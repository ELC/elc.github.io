from PIL import Image, ImageFilter
from cache import get_filepaths

imgs = get_filepaths('content/blog', ['jpg', 'png', 'gif'])

filenames = [fname[:-3] for fname in imgs]

for filename in imgs:
    extension = filename[-3:]
    name_alone = filename[:-4]
    
    if name_alone.endswith('-thumbnail'):
        continue

    im = Image.open(filename)
    im.thumbnail([200, 200], Image.ANTIALIAS)
    im.filter(ImageFilter.GaussianBlur(2)).save(f'{name_alone}-thumbnail.{extension}', optimize=True)
