# Crestline Developers — Construction Website

Premium, responsive **static** construction & real estate website.

**Stack only:** HTML5 · CSS3 · Bootstrap 5 · Vanilla JS · AOS · Swiper · GLightbox · EmailJS  

No database. No .NET. No Node server required for hosting.

---

## Open & run in Visual Studio (local)

Visual Studio’s green **Start / F5** button is for apps with a server project.  
This site is static HTML, so use one of these:

### Method A — Recommended
1. **File → Open → Folder…** → select `ConstructionSite`
2. In Solution Explorer, **right‑click `index.html`**
3. Choose **Open With…** → **Google Chrome** or **Microsoft Edge**
4. Click **OK**

### Method B — One click
Double‑click `open-site.bat` in File Explorer (or from Solution Explorer).

### Method C — From File Explorer
Double‑click `index.html` directly.

---

## Publish to GitHub Pages (free, no server install)

You only upload the HTML/CSS/JS files. **Do not install .NET on any server.**

1. Push this folder to a GitHub repository
2. Repo **Settings → Pages**
3. Source: **Deploy from a branch** → `main` → `/ (root)`
4. Save — your site URL will be like:  
   `https://YOUR_USERNAME.github.io/REPO_NAME/`

Files to host: all `.html` + `assets/` folder.  
Ignore locally: `.vs/`, `.git/` (GitHub handles git).

---

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` |
| Projects | `projects.html` |
| Project Details | `project-details.html?id=skyline-residences` |
| Gallery | `gallery.html` |
| Services | `services.html` |
| Testimonials | `testimonials.html` |
| Blog | `blog.html` |
| Contact | `contact.html` |

## EmailJS Setup (Contact Form)

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Template variables: `from_name`, `phone`, `email`, `message`, `inquiry_type`, `location`
3. Put your keys in `assets/js/data.js` → `SITE.emailjs`
4. Update phone, email, and social links in the same file

## Customize Content

All content is in `assets/js/data.js` (projects, services, team, blog, gallery, etc.).
