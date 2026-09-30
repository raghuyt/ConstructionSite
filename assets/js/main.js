/**
 * Crestline Developers — Core Application Script
 * Handles shared chrome, theme, animations, and global UI.
 */

(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  // Apply saved theme immediately to avoid flash
  document.documentElement.setAttribute(
    "data-theme",
    localStorage.getItem("crestline-theme") || "light"
  );

  /* ---------- Theme ---------- */
  function initTheme() {
    const saved = localStorage.getItem("crestline-theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
    updateThemeIcons(saved);

    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-theme-toggle]");
      if (!btn) return;
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("crestline-theme", next);
      updateThemeIcons(next);
    });
  }

  function updateThemeIcons(theme) {
    $$("[data-theme-toggle] i").forEach((icon) => {
      icon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
    });
  }

  /* ---------- Loader ---------- */
  function initLoader() {
    const loader = $("#loader");
    if (!loader) return;
    window.addEventListener("load", () => {
      setTimeout(() => loader.classList.add("hidden"), 400);
    });
    // Fallback if load already fired
    setTimeout(() => loader.classList.add("hidden"), 2500);
  }

  /* ---------- Scroll Progress ---------- */
  function initScrollProgress() {
    const bar = $("#scroll-progress");
    if (!bar) return;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${progress}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Navbar ---------- */
  function renderNavbar() {
    const mount = $("#site-header");
    if (!mount) return;

    const current = location.pathname.split("/").pop() || "index.html";
    const isHome = current === "index.html" || current === "" || current === "/";
    const navClass = isHome ? "" : "nav-dark scrolled";

    const links = NAV_LINKS.map(
      (l) =>
        `<li class="nav-item">
          <a class="nav-link ${l.href === current || (isHome && l.href === "index.html") ? "active" : ""}" href="${l.href}">${l.label}</a>
        </li>`
    ).join("");

    const mobileLinks = NAV_LINKS.map(
      (l) =>
        `<a class="nav-link ${l.href === current || (isHome && l.href === "index.html") ? "active" : ""}" href="${l.href}" data-bs-dismiss="offcanvas">${l.label}</a>`
    ).join("");

    mount.innerHTML = `
      <nav class="navbar navbar-expand-lg site-navbar ${navClass}" id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="index.html">${SITE.name.split(" ")[0]}<span> ${SITE.name.split(" ").slice(1).join(" ")}</span></a>
          <div class="d-flex align-items-center gap-2 d-lg-none">
            <button class="icon-btn" data-theme-toggle aria-label="Toggle theme"><i class="bi bi-moon-stars-fill"></i></button>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav" aria-label="Open menu">
              <span class="navbar-toggler-icon-custom"><span></span><span></span><span></span></span>
            </button>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto align-items-lg-center">
              ${links}
              <li class="nav-item ms-lg-2">
                <button class="icon-btn" data-theme-toggle aria-label="Toggle theme"><i class="bi bi-moon-stars-fill"></i></button>
              </li>
              <li class="nav-item ms-lg-2">
                <a href="contact.html" class="btn-primary-custom" style="padding:0.6rem 1.2rem;font-size:0.75rem;">Get Quote</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="offcanvas offcanvas-end offcanvas-nav" tabindex="-1" id="mobileNav">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">${SITE.name.split(" ")[0]}<span> Dev</span></h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column">
          ${mobileLinks}
          <a href="contact.html" class="btn-primary-custom mt-4 justify-content-center">Request a Quote</a>
        </div>
      </div>
    `;

    updateThemeIcons(document.documentElement.getAttribute("data-theme") || "light");

    const nav = $("#mainNav");
    const onScroll = () => {
      if (!isHome) {
        nav.classList.add("scrolled", "nav-dark");
        return;
      }
      if (window.scrollY > 60) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    const mount = $("#site-footer");
    if (!mount) return;

    const year = new Date().getFullYear();
    mount.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-4">
              <div class="footer-brand mb-3">${SITE.name.split(" ")[0]}<span> ${SITE.name.split(" ").slice(1).join(" ")}</span></div>
              <p class="mb-3">${SITE.description}</p>
              <p class="mb-1"><i class="bi bi-geo-alt text-gold me-2"></i>${SITE.address}</p>
              <p class="mb-1"><i class="bi bi-telephone text-gold me-2"></i>${SITE.phone}</p>
              <p><i class="bi bi-envelope text-gold me-2"></i>${SITE.email}</p>
            </div>
            <div class="col-6 col-lg-2">
              <h5>Explore</h5>
              ${NAV_LINKS.slice(0, 5).map((l) => `<a href="${l.href}">${l.label}</a>`).join("")}
            </div>
            <div class="col-6 col-lg-2">
              <h5>Company</h5>
              <a href="about.html">About Us</a>
              <a href="testimonials.html">Testimonials</a>
              <a href="blog.html">Blog</a>
              <a href="contact.html">Contact</a>
              <a href="${SITE.brochureUrl}" download class="text-gold">Download Brochure</a>
            </div>
            <div class="col-lg-4">
              <h5>Newsletter</h5>
              <p class="mb-3">Insights on construction, design & investment.</p>
              <form class="newsletter-form" id="newsletterForm">
                <input type="email" placeholder="Your email" required aria-label="Email">
                <button type="submit">Join</button>
              </form>
              <div class="d-flex gap-2 mt-3">
                <a href="${SITE.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook" class="icon-btn" style="border-color:rgba(255,255,255,.2);color:#fff;"><i class="bi bi-facebook"></i></a>
                <a href="${SITE.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram" class="icon-btn" style="border-color:rgba(255,255,255,.2);color:#fff;"><i class="bi bi-instagram"></i></a>
                <a href="${SITE.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn" class="icon-btn" style="border-color:rgba(255,255,255,.2);color:#fff;"><i class="bi bi-linkedin"></i></a>
                <a href="${SITE.social.youtube}" target="_blank" rel="noopener" aria-label="YouTube" class="icon-btn" style="border-color:rgba(255,255,255,.2);color:#fff;"><i class="bi bi-youtube"></i></a>
                <a href="${SITE.social.twitter}" target="_blank" rel="noopener" aria-label="Twitter" class="icon-btn" style="border-color:rgba(255,255,255,.2);color:#fff;"><i class="bi bi-twitter-x"></i></a>
              </div>
            </div>
          </div>
          <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <span>&copy; ${year} ${SITE.name}. All rights reserved.</span>
            <span>Crafted for premium construction excellence.</span>
          </div>
        </div>
      </footer>
    `;

    const form = $("#newsletterForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for subscribing to Crestline insights!");
        form.reset();
      });
    }
  }

  /* ---------- Floating UI ---------- */
  function renderFloatingUI() {
    const mount = $("#floating-ui");
    if (!mount) return;

    const waUrl = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

    mount.innerHTML = `
      <div class="social-float" aria-label="Social media">
        <a href="${SITE.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
        <a href="${SITE.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
        <a href="${SITE.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
        <a href="${SITE.social.youtube}" target="_blank" rel="noopener" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
        <a href="${SITE.social.twitter}" target="_blank" rel="noopener" aria-label="X"><i class="bi bi-twitter-x"></i></a>
      </div>
      <a href="${waUrl}" class="float-whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp chat">
        <i class="bi bi-whatsapp"></i>
      </a>
      <button class="back-to-top" id="backToTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>
      <div class="sticky-contact-bar" id="stickyContact">
        <div class="container d-flex align-items-center justify-content-between gap-2">
          <span class="contact-text small fw-semibold"><i class="bi bi-telephone-fill text-gold me-2"></i>${SITE.phone}</span>
          <div class="d-flex gap-2">
            <a href="tel:${SITE.phoneRaw}" class="btn-outline-custom btn-sm-custom" style="padding:0.45rem 0.9rem;font-size:0.75rem;">Call</a>
            <button class="btn-primary-custom btn-sm-custom" style="padding:0.45rem 0.9rem;font-size:0.75rem;" data-bs-toggle="modal" data-bs-target="#quoteModal">Quote</button>
            <a href="${waUrl}" target="_blank" rel="noopener" class="btn-dark-custom btn-sm-custom" style="padding:0.45rem 0.9rem;font-size:0.75rem;background:#25d366;">WhatsApp</a>
          </div>
        </div>
      </div>
    `;

    const backBtn = $("#backToTop");
    const sticky = $("#stickyContact");
    window.addEventListener(
      "scroll",
      () => {
        const show = window.scrollY > 400;
        backBtn.classList.toggle("visible", show);
        sticky.classList.toggle("visible", show);
      },
      { passive: true }
    );
    backBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- Quote Modal + Estimator ---------- */
  function renderQuoteModal() {
    if ($("#quoteModal")) return;

    const typeOpts = COST_ESTIMATOR.types
      .map((t) => `<option value="${t.id}">${t.label}</option>`)
      .join("");
    const finishOpts = COST_ESTIMATOR.finishes
      .map((f) => `<option value="${f.id}">${f.label}</option>`)
      .join("");
    const inquiryOpts = INQUIRY_TYPES.map((t) => `<option value="${t}">${t}</option>`).join("");

    const modal = document.createElement("div");
    modal.innerHTML = `
      <div class="modal fade" id="quoteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content modal-content-custom">
            <div class="modal-header">
              <h5 class="modal-title">Request a Quote</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <ul class="nav nav-tabs mb-3" role="tablist">
                <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#quoteTab" type="button">Enquiry</button></li>
                <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#calcTab" type="button">Cost Estimator</button></li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="quoteTab">
                  <form id="quoteForm">
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label class="form-label-custom">Name *</label>
                        <input class="form-control-custom" name="name" required>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label-custom">Phone *</label>
                        <input class="form-control-custom" name="phone" required>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label-custom">Email *</label>
                        <input type="email" class="form-control-custom" name="email" required>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label-custom">Inquiry Type</label>
                        <select class="form-select-custom" name="inquiry_type">${inquiryOpts}</select>
                      </div>
                      <div class="col-12">
                        <label class="form-label-custom">Message *</label>
                        <textarea class="form-control-custom" name="message" rows="3" required></textarea>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn-primary-custom">Submit Enquiry</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="tab-pane fade" id="calcTab">
                  <form id="estimatorForm">
                    <div class="row g-3">
                      <div class="col-md-4">
                        <label class="form-label-custom">Project Type</label>
                        <select class="form-select-custom" name="type">${typeOpts}</select>
                      </div>
                      <div class="col-md-4">
                        <label class="form-label-custom">Finish Level</label>
                        <select class="form-select-custom" name="finish">${finishOpts}</select>
                      </div>
                      <div class="col-md-4">
                        <label class="form-label-custom">Area (sq.ft)</label>
                        <input type="number" class="form-control-custom" name="area" min="100" value="1500" required>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn-primary-custom">Estimate Cost</button>
                      </div>
                    </div>
                    <div class="estimator-result" id="estimatorResult" style="display:none;">
                      <div class="small text-muted mb-1">Estimated Construction Cost</div>
                      <div class="amount" id="estimatorAmount">₹0</div>
                      <div class="small text-muted mt-2">Indicative only. Final quote after site assessment.</div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal.firstElementChild);

    $("#quoteForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      // Prefer EmailJS if configured; otherwise graceful fallback
      if (typeof emailjs !== "undefined" && SITE.emailjs.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY") {
        emailjs
          .send(SITE.emailjs.serviceId, SITE.emailjs.templateId, {
            from_name: fd.get("name"),
            phone: fd.get("phone"),
            email: fd.get("email"),
            message: fd.get("message"),
            inquiry_type: fd.get("inquiry_type"),
          })
          .then(() => {
            alert("Thank you! Your enquiry has been sent.");
            e.target.reset();
            bootstrap.Modal.getInstance($("#quoteModal"))?.hide();
          })
          .catch(() => alert("Unable to send right now. Please call us or try the contact page."));
      } else {
        alert("Thank you! Your enquiry has been recorded. Configure EmailJS keys in data.js to send emails.");
        e.target.reset();
        bootstrap.Modal.getInstance($("#quoteModal"))?.hide();
      }
    });

    $("#estimatorForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const type = COST_ESTIMATOR.types.find((t) => t.id === fd.get("type"));
      const finish = COST_ESTIMATOR.finishes.find((f) => f.id === fd.get("finish"));
      const area = Number(fd.get("area")) || 0;
      const total = Math.round(area * type.ratePerSqft * finish.multiplier);
      $("#estimatorResult").style.display = "block";
      $("#estimatorAmount").textContent = `₹ ${total.toLocaleString("en-IN")}`;
    });
  }

  /* ---------- Animated Counters ---------- */
  function initCounters() {
    const counters = $$("[data-count]");
    if (!counters.length) return;

    const animate = (el) => {
      const target = Number(el.dataset.count);
      const duration = 1800;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(target * eased);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.done) {
            entry.target.dataset.done = "1";
            animate(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => io.observe(c));
  }

  /* ---------- Before / After Slider ---------- */
  function initBeforeAfter() {
    $$(".ba-slider").forEach((slider) => {
      const after = $(".ba-after", slider);
      const handle = $(".ba-handle", slider);
      if (!after || !handle) return;

      let dragging = false;

      const setPos = (clientX) => {
        const rect = slider.getBoundingClientRect();
        let x = ((clientX - rect.left) / rect.width) * 100;
        x = Math.max(5, Math.min(95, x));
        after.style.clipPath = `inset(0 ${100 - x}% 0 0)`;
        handle.style.left = `${x}%`;
      };

      handle.addEventListener("pointerdown", (e) => {
        dragging = true;
        handle.setPointerCapture(e.pointerId);
      });
      handle.addEventListener("pointerup", () => (dragging = false));
      handle.addEventListener("pointermove", (e) => {
        if (dragging) setPos(e.clientX);
      });
      slider.addEventListener("click", (e) => {
        if (e.target === handle) return;
        setPos(e.clientX);
      });
    });
  }

  /* ---------- AOS ---------- */
  function initAOS() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        once: true,
        offset: 80,
        easing: "ease-out-cubic",
      });
    }
  }

  /* ---------- Helpers exported globally ---------- */
  window.Crestline = {
    $,
    $$,
    getProjectById(id) {
      return PROJECTS.find((p) => p.id === id);
    },
    waLink(extra = "") {
      const msg = extra || SITE.whatsappMessage;
      return `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;
    },
    stars(n) {
      return Array.from({ length: 5 }, (_, i) =>
        i < n ? '<i class="bi bi-star-fill"></i>' : '<i class="bi bi-star"></i>'
      ).join("");
    },
    projectCardHTML(p) {
      return `
        <article class="project-card">
          <div class="project-img">
            <span class="project-badge ${p.status === "Ongoing" ? "ongoing" : ""}">${p.status}</span>
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <a class="overlay-link" href="project-details.html?id=${p.id}" aria-label="View ${p.name}"></a>
          </div>
          <div class="project-body">
            <h3><a href="project-details.html?id=${p.id}" class="text-decoration-none" style="color:inherit;">${p.name}</a></h3>
            <div class="project-meta">
              <span><i class="bi bi-geo-alt"></i>${p.location}</span>
              <span><i class="bi bi-building"></i>${p.type}</span>
              <span><i class="bi bi-tag"></i>${p.category}</span>
              <span><i class="bi bi-calendar-check"></i>${p.completionDate}</span>
            </div>
            <a href="project-details.html?id=${p.id}" class="btn-outline-custom" style="padding:0.5rem 1rem;font-size:0.75rem;">View Details</a>
          </div>
        </article>`;
    },
    renderProjectCard(p) {
      return `<div class="col-md-6 col-lg-4" data-aos="fade-up">${this.projectCardHTML(p)}</div>`;
    },
  };

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLoader();
    renderNavbar();
    renderFooter();
    renderFloatingUI();
    renderQuoteModal();
    initScrollProgress();
    initCounters();
    initBeforeAfter();
    initAOS();

    // Init EmailJS if configured
    if (typeof emailjs !== "undefined" && SITE.emailjs.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY") {
      emailjs.init(SITE.emailjs.publicKey);
    }
  });
})();
