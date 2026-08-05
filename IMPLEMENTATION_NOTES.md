# Project inspection and implementation map

## What was inspected before coding

The supplied materials contained the website specification, a completed graduate CV, one selected Home-page portrait, six photographs for **My Shots**, and six photographs for **Moments**. There was no existing source-code project for this new design, so the website was created from scratch as a static multi-page project.

## Correct files for the Home page and carousel

- Home page markup: `index.html`
- Shared and Home-specific styling: `assets/css/styles.css`
- Reusable verse data: `assets/js/verses.js`
- Carousel interaction and all shared JavaScript: `assets/js/main.js`

To change a verse, edit only the objects inside `window.BIBLE_VERSES` in `assets/js/verses.js`. The dots and slide count update automatically.

## Site architecture

Every top navigation tab has its own directory and URL. Relative paths are used throughout, so the site works as either a GitHub user site or a project site under a repository subpath.
