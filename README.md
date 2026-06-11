# Edris Rodriguez Dalangin — Portfolio Website

A modern, responsive portfolio website built with **HTML, CSS, and JavaScript only** — ready for GitHub Pages.

## 📁 Project Structure

```
portfolio/
├── index.html              # Main page (all sections)
├── style.css               # Styling, themes, responsive layout
├── script.js                # Dark mode, animations, lightbox, form
└── assets/
    ├── Edris_Dalangin_Resume.pdf   # Resume (download button)
    ├── profile.jpg                  # Hero photo (ADD THIS)
    ├── project1.jpg ... project3.jpg  (ADD THESE)
    ├── cert1.jpg ... cert3.jpg          (ADD THESE)
    └── gallery1.jpg ... gallery6.jpg    (ADD THESE)
```

## ⚠️ Images Needed

Your resume PDF was used to auto-fill all text content (about, education,
experience, skills). However, **no photos were uploaded**, so the site
currently shows placeholder images via `placeholder.com`.

To complete your portfolio, add these files to the `assets/` folder:

| File name | Used for |
|---|---|
| `profile.jpg` | Hero section profile photo |
| `project1.jpg`, `project2.jpg`, `project3.jpg` | Project card images |
| `cert1.jpg`, `cert2.jpg`, `cert3.jpg` | Certification images |
| `gallery1.jpg` – `gallery6.jpg` | Gallery section photos |

Once added with these exact names, they'll automatically replace the placeholders
(no code changes needed). You can also rename/add more `<div class="gallery-item">`
blocks in `index.html` for additional gallery photos.

## ✏️ Customize Before Publishing

1. **Social links** — In `index.html`, replace the `#` placeholders for
   LinkedIn and GitHub (search for `href="#"` near the social icons,
   contact section, and footer).
2. **Projects** — Update project titles, descriptions, tech stacks, and
   GitHub/demo links in the **Projects** section to reflect your real work.
3. **Contact form** — The form currently shows a confirmation message only
   (no backend). To receive real emails on GitHub Pages:
   - Sign up at [Formspree](https://formspree.io) (free tier available)
   - Get your form endpoint, e.g. `https://formspree.io/f/xxxxxxx`
   - In `index.html`, change:
     ```html
     <form class="contact-form" id="contactForm">
     ```
     to:
     ```html
     <form class="contact-form" id="contactForm" action="https://formspree.io/f/xxxxxxx" method="POST">
     ```
   - You can then remove or simplify the JS submit handler in `script.js`.

## 🚀 Deploy to GitHub Pages

1. **Create a new repository** on GitHub, e.g. `edris-portfolio`.
2. **Upload all files** keeping the folder structure:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/` folder (with resume + your photos)

   You can do this via the GitHub web UI ("Add file" → "Upload files")
   or via Git:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/edris-portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repo → **Settings** → **Pages**
   - Under "Build and deployment" → Source: select **Deploy from a branch**
   - Branch: select **main** and folder **/ (root)** → **Save**

4. **Wait 1–2 minutes**, then your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/edris-portfolio/
   ```

## ✅ Features Included

- Hero section with photo, typing animation, resume download, and contact CTA
- About Me with summary, career goals, and animated stat counters
- Education & Experience timelines (auto-extracted from resume)
- Categorized Skills with animated progress bars and soft-skill tags
- Projects section with cards, tech stack tags, and links
- Certifications section with image previews
- Photo Gallery with lightbox preview
- Contact section with info cards + working form (Formspree-ready)
- Dark/Light mode toggle (saved via localStorage)
- Fully responsive (mobile, tablet, desktop)
- Smooth scrolling, scroll-reveal animations, hover effects
- SEO meta tags (title, description, keywords, Open Graph)
