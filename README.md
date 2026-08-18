# Kibreab Kebede - Personal Website

A colorful, responsive, multi-page static website prepared for GitHub Pages.

## Pages

- `index.html` - Home portrait, personal introduction, and email composer
- `books.html` - Current and finished books
- `portfolio.html` - Compact project grid and CV preview
- `about.html` - Music, walking, Ethiopian food, cinema, football, NBA, New York, and the wedding plan
- `social.html` - Animated pendulum-style social links
- `404.html` - Custom not-found page

## Local preview

Run a local server from the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. VS Code's Live Server extension is another suitable option.

## GitHub Pages deployment

1. Create a GitHub repository named `kibreab-kebede`.
2. Upload or push the contents of this folder to the repository's `main` branch.
3. Open **Settings -> Pages** in GitHub.
4. Choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. The expected address is `https://kibreabk.github.io/kibreab-kebede/`.

Using another repository name or a custom domain requires updating canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml`.

## Home email form

The Home contact form is compatible with static GitHub Pages. It creates a pre-filled `mailto:` draft addressed to `kibreyo@gmail.com`, so the visitor's email application handles the final send. A server-side form service is not included.

## Updating personal details and links

Central link values are stored in `assets/js/site-data.js`. Important links also appear directly in the HTML so the site remains useful when JavaScript is unavailable. Update both places when a URL changes.

## Replacing the Home image

Replace `assets/images/personal/homepage.webp` with a new WebP image using the same filename. The header avatar is `assets/images/personal/avatar.webp`.

## Replacing the CV

Replace:

```text
assets/documents/kibreab-kebede-cv.pdf
```

Keep the filename unchanged so preview, download, and new-tab links continue working.

## Editing projects

Project cards are in `portfolio.html`. Add repository or live-demo links only when real URLs exist.

## Replacing book covers

Book-cover files are stored in `assets/images/books/`. Keep the current filenames or update the matching `src` values in `books.html`.

## About-page images

- Ethiopian food: `assets/images/about/ethiopian-food.webp`
- How I Met Your Mother: `assets/images/cinema/how-i-met-your-mother.webp`
- Other cinema images: `assets/images/cinema/`
- Football images used by the page: `assets/images/football/`
- New York image: `assets/images/personal/nyc.webp`

## Social pendulum motion

The three pendulum groups are written directly in `social.html`. Their logos are local SVG files in `assets/icons/brands/`. Hovering or keyboard-focusing a group pauses its swing. Motion is disabled for reduced-motion preferences and coarse-pointer devices.

## Accessibility

The project includes a skip link, keyboard-accessible navigation, visible focus states, reduced-motion support, semantic headings, accessible external links, and an accessible CV dialog. Retest keyboard navigation after major edits.

## Image optimization

Before adding a photograph:

- Resize it close to its largest displayed dimensions.
- Prefer WebP for photographs.
- Keep meaningful alt text in the HTML.
- Preserve width and height attributes to reduce layout movement.

## Pre-publish checks

- Open every page and test navigation.
- Test the mobile menu and CV modal with a keyboard.
- Submit the Home email form and confirm the mail draft opens.
- Pause each social pendulum with hover and keyboard focus.
- Check the browser console for errors.
- Confirm that all supplied imagery is cleared for public use.

See `THIRD-PARTY-NOTICES.md` for icon attribution and the repository asset notice.
