# Quality-assurance report

## Automated structure checks

- Seven HTML documents parsed successfully: Home, Books, Portfolio, Photography, About Me, Social Media, and the custom 404 page.
- No missing local HTML, CSS, JavaScript, image, CV, iframe, or lightbox file references were found.
- No duplicate HTML IDs were found.
- Every content image has alternative text.
- Every button has visible text or an accessible label.
- Every external link that opens a new tab includes `noopener` and `noreferrer` protection.
- JavaScript syntax checks passed for `assets/js/main.js` and `assets/js/verses.js`.

## Browser interaction checks

The project was rendered in headless Chromium at desktop and mobile widths.

- Bible carousel: six slides, previous/next buttons, pagination dots, keyboard navigation, and pause-on-hover passed.
- Animated name reel: hover/focus state and changing image fill passed.
- CV dialog: opens, closes, and exposes both PDF and Word downloads.
- Photography lightbox: all 12 photographs open; left/right keyboard navigation updates the image and caption.
- Books: all three entries remain inline and the book cards contain no outbound links.
- Mobile navigation: opens, closes with Escape, and reports the correct expanded state on every page.
- Responsive layout: no horizontal overflow was detected at 390-pixel viewport width on any main page.
- No JavaScript runtime or browser-console errors were detected during these checks.

## Document and image checks

- The included PDF and Word CV describe Kibreab as a B.Sc. Statistics graduate and show Addis Ababa University as graduated in 2026.
- Each personal photograph has a 960-pixel thumbnail, a 1920-pixel display version, and a 3840-pixel-long-edge lightbox version.
- Upscaling improves presentation dimensions but does not manufacture native camera detail absent from the source image; see `PHOTO_QUALITY_NOTE.md`.
