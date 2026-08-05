# Photograph quality

The personal photographs have three web-ready versions:

- `assets/images/photos/full/` — 3840-pixel long edge for the lightbox
- `assets/images/photos/display/` — 1920-pixel long edge for large displays
- `assets/images/photos/thumbs/` — 960-pixel long edge for fast gallery loading

The processing uses high-quality Lanczos resizing, conservative contrast/color adjustment and mild sharpening. Upscaling provides 4K-class display dimensions, but it cannot create native camera detail that was not present in the original uploaded file. The site loads smaller responsive versions first and opens the 3840-pixel version only when a visitor selects a photograph.
