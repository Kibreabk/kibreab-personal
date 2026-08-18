# Kibreab Kebede - Personal Website

A static, multi-page personal website designed for GitHub Pages.

## Pages

- `index.html` - Home
- `books.html` - Books
- `portfolio.html` - Portfolio and CV preview
- `about.html` - Faith, music, cinema, football, and personal interests
- `social.html` - Social profiles
- `404.html` - Custom not-found page

## Project structure

```text
kibreab-kebede-portfolio/
|-- index.html
|-- books.html
|-- portfolio.html
|-- about.html
|-- social.html
|-- 404.html
|-- robots.txt
|-- sitemap.xml
|-- site.webmanifest
|-- .nojekyll
|-- README.md
`-- assets/
    |-- css/
    |   `-- styles.css
    |-- js/
    |   |-- site-data.js
    |   |-- components.js
    |   `-- main.js
    |-- documents/
    |   `-- kibreab-kebede-cv.pdf
    |-- icons/
    `-- images/
        |-- personal/
        |-- books/
        |-- cinema/
        |-- football/
        `-- social/
```

## Preview locally

A local server is recommended so that PDF previews and relative assets behave the same way they will on GitHub Pages.

From the project directory, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

A second option is the Live Server extension in Visual Studio Code.

## Main content settings

The most frequently updated links are collected in:

```text
assets/js/site-data.js
```

That file contains the email address, GitHub links, CV path, social links, and main image paths. The visible HTML also contains complete fallback content, so the site remains readable if JavaScript is unavailable.

## Update the CV

Replace:

```text
assets/documents/kibreab-kebede-cv.pdf
```

Keep the same filename to avoid changing the HTML. The Portfolio page provides an on-page preview, download link, and new-tab fallback.

## Add or change a project

Project cards are written directly in `portfolio.html`. Each project has:

- A title
- A concise description
- Technology tags
- An optional repository link
- A custom vector graphic

Only add a repository or live-demo button when the destination is real.

## Change a book cover

Book covers are stored in:

```text
assets/images/books/
```

Replace the appropriate image while keeping its filename, or update the matching `src` attribute in `books.html`.

Recommended cover format:

- WebP
- Portrait orientation
- At least 600 pixels wide
- Approximately 2:3 aspect ratio
- Compressed for the web

## Replace personal artwork

The header avatar is:

```text
assets/images/personal/brand-avatar.webp
```

The Home hero portrait is:

```text
assets/images/personal/hero-portrait.webp
```

Keep the current filenames or update the image paths in the HTML and `assets/js/site-data.js`.

## Social links

The Social Media page includes:

- Instagram
- TikTok
- X
- Facebook
- LinkedIn
- Telegram
- Spotify
- Strava
- GitHub

Update the URLs in `assets/js/site-data.js` and in `social.html` if a profile changes.

## Canonical URL and sitemap

The site currently assumes this GitHub Pages address:

```text
https://kibreabk.github.io/kibreab-kebede/
```

If the repository name or domain changes, update the address in:

- Every page's canonical link
- Open Graph URLs
- `robots.txt`
- `sitemap.xml`
- The structured data in `index.html`

## Deploy to GitHub Pages

1. Create a GitHub repository named `kibreab-kebede`.
2. Copy all files from this folder into the repository root.
3. Commit and push the files to the `main` branch.
4. Open the repository on GitHub.
5. Go to **Settings > Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and the `/ (root)` folder.
8. Save the setting.
9. After deployment finishes, open:

```text
https://kibreabk.github.io/kibreab-kebede/
```

If a different repository name is used, the final URL changes to match it.

## Command-line push example

Run these commands from inside the project folder after creating the empty GitHub repository:

```bash
git init
git add .
git commit -m "Launch personal website"
git branch -M main
git remote add origin https://github.com/Kibreabk/kibreab-kebede.git
git push -u origin main
```

## Accessibility and interaction checks

Before publishing an update, verify:

- Every navigation link opens the correct page.
- The mobile menu works with touch and keyboard input.
- Focus indicators remain visible.
- The CV dialog opens, closes, and returns focus correctly.
- External links open securely in a new tab.
- Images have useful alternative text.
- The site works without horizontal scrolling at mobile widths.
- Reduced-motion preferences are respected.
- No broken image or empty link appears.

## Image-use note

Several book and football images were supplied for this website. Confirm that every third-party image may be publicly republished before making the repository public. If an image cannot be used, replace it with an appropriately licensed alternative while keeping the same filename and dimensions.

## Recommended image optimization

For future images:

1. Resize them close to the maximum size displayed on the site.
2. Remove unnecessary metadata.
3. Export as WebP at a reasonable quality setting.
4. Keep text inside images legible on mobile screens.
5. Test important crops at desktop and mobile widths.

## Final deployment check

After GitHub Pages is enabled, open all five pages directly rather than only navigating from Home:

```text
/index.html
/books.html
/portfolio.html
/about.html
/social.html
```

Also test a made-up URL to confirm that `404.html` matches the rest of the site.
