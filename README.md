# Kibreab Kebede — Personal Website

A compact, responsive, multi-page static website designed for GitHub Pages.

## Pages

- `index.html` — Home
- `books.html` — Books
- `portfolio.html` — Portfolio and CV preview
- `about.html` — Music, personal notes, cinema, football, New York, and the wedding plan
- `social.html` — Social-profile directory
- `404.html` — Custom not-found page

## Local preview

Run a local server from the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/` in a browser. VS Code's Live Server extension is another suitable option.

## GitHub Pages deployment

1. Create a GitHub repository named `kibreab-kebede`.
2. Upload or push the **contents of this folder** to the repository's `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Choose `main` and `/ (root)`, then save.
6. GitHub Pages should publish the website at `https://kibreabk.github.io/kibreab-kebede/`.

Using a different repository name or custom domain requires updating the canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml`.

## Updating personal details and links

The central link values are stored in `assets/js/site-data.js`. The current HTML also includes the links directly so navigation and essential content work even if JavaScript is unavailable. When a URL changes, update both the data file and the matching page link.

Public website contact: `kibreyo@gmail.com`.

## Replacing the Home image

Replace `assets/images/personal/homepage.webp` with a new WebP image using the same filename. The header avatar is `assets/images/personal/avatar.webp`. Keep the existing aspect ratios or update the CSS crop settings in `assets/css/styles.css`.

## Replacing the CV

Replace:

```text
assets/documents/kibreab-kebede-cv.pdf
```

Keep the filename unchanged so the preview, download, and new-tab links continue working.

## Adding or editing projects

Project cards are written directly in `portfolio.html`. Add repository or live-demo actions only when real URLs exist. Do not leave empty buttons.

## Replacing book covers

Book-cover files are stored in `assets/images/books/`. Keep the current filenames or update the matching `src` values in `books.html`. Use compressed WebP files where possible.

## Updating social profiles

Social cards are in `social.html`; the same URLs are also stored in `assets/js/site-data.js`. Platform logo files are in `assets/icons/brands/`.

## Accessibility and motion

The project includes a skip link, keyboard-accessible navigation, visible focus states, reduced-motion support, semantic headings, and an accessible CV dialog. After making edits, test keyboard navigation and mobile layouts again.

## Asset optimization

Before adding a photograph:

- Resize it close to the largest displayed dimensions.
- Prefer WebP for photographs and PNG/SVG only when appropriate.
- Keep meaningful alt text in the HTML.
- Set or preserve image dimensions to reduce layout movement.

## Pre-publish checks

- Open every page and test all navigation links.
- Test the mobile menu and CV modal with a keyboard.
- Verify that external profile links open correctly.
- Check the browser console for errors.
- Confirm that all uploaded imagery is cleared for public use.

See `THIRD-PARTY-NOTICES.md` for icon licensing and the repository asset notice.
