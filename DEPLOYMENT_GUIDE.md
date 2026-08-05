# Publish this website on GitHub Pages

The simplest method does **not** require a hidden `.github` folder or GitHub Actions.

## 1. Create a new repository

Use this suggested name:

`kibreab-personal`

Set it to **Public** and do not initialize it with a README.

## 2. Upload the website

Extract the ZIP. Open the extracted folder and upload everything **inside** it. `index.html`, `assets`, `books`, `portfolio`, `photography`, `about`, and `social-media` must appear at the repository's top level.

Do not upload the ZIP itself and do not put the whole website inside an extra nested folder.

## 3. Turn on GitHub Pages

Open the repository:

1. **Settings**
2. **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main**
5. Folder: **/ (root)**
6. Click **Save**

The suggested address will be:

`https://kibreabk.github.io/kibreab-personal/`

The project uses relative links, so the design, images and separate page URLs work correctly under the repository path.

## 4. Refresh after publishing

Wait a few minutes, open the site, and press `Ctrl + Shift + R` once to bypass an older browser cache.

## Changing the repository name

The pages and assets still work because their links are relative. Update the absolute addresses inside `sitemap.xml` and `robots.txt` if you choose a repository name other than `kibreab-personal`.
