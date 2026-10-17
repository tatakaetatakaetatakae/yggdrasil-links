# Yggdrasil — official links

A fully responsive, ad-free, **free-to-host** landing page for Yggdrasil. It uses the club logo and cyberforest background. No build tools, tracking, account logins, or paid hosting required.

## 1. Configure WhatsApp

Open **`config.js`** and change:

```js
whatsappCommunityUrl: ""
```

to your full WhatsApp community invite link:

```js
whatsappCommunityUrl: "https://chat.whatsapp.com/YOUR_REAL_INVITE_CODE"
```

Save the file. **If left blank, the WhatsApp button says "Invitation link coming soon" and cannot be clicked.** Don't use the example invite code as a real link.

Instagram is already linked to: `https://www.instagram.com/yggdrasil.eniad/` (check that this is your correct account).

## 2. Publish on GitHub Pages

1. Log in to https://github.com/new and create a **public** repository called `yggdrasil-links` (no need to initialize it with a README).
2. Unzip this starter kit on your computer. Make sure the extracted folder contains `index.html`, `styles.css`, `config.js`, `script.js`, and the `assets` folder.
3. Open the repository on GitHub, click **Add file → Upload files** and upload **all files and the assets folder contents** from this kit to the *root* of the repo. Commit to `main`. (On some browsers, drag the files and folder onto the upload area.)
4. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **Branch: `main` / `(root)`**, and click **Save**.
5. GitHub builds your site. After deployment, its URL will typically look like `https://YOUR-USERNAME.github.io/yggdrasil-links/`.
6. Open that exact published URL on phone and desktop and test Instagram. After you have added your real WhatsApp link, verify that button too.

GitHub Pages is free for **public** repositories on GitHub Free. Publishing a site makes its assets public. This is fine for club logos and public community invite links but never put private data or credentials in this repository.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 3. QR code (when the site is live)

Make **one** QR code pointing to the *GitHub Pages URL* (not either social media link). Then both buttons are offered when someone scans it, and you can change the social links later without reprinting the QR code.

You can send the published URL back to ChatGPT to generate a branded printable QR.

## 4. File guide

| File | Purpose |
|---|---|
| `index.html` | Landing page content and metadata |
| `styles.css` | Responsive layout, gradients, mobile styling |
| `config.js` | **Edit the WhatsApp invite link here** |
| `script.js` | Enables the WhatsApp link after it is configured |
| `assets/yggdrasil-logo.webp` | Optimized user-provided club emblem |
| `assets/cyberforest-bg.webp` | Generated dark cyberforest site background |
| `assets/favicon.png` | Browser tab icon |
| `assets/social-preview.jpg` | Social sharing preview |
| `.nojekyll` | Prevents unnecessary Jekyll processing |

## 5. Optional: preview locally

You can double-click `index.html` to open the page. For the most accurate local preview, serve it over HTTP in the folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000/ .

## Editing later

Changes committed to `main` automatically republish the site. Keep the repository name `yggdrasil-links` unless you intentionally want a new URL. The QR code will continue working as long as you don't change the website address.
