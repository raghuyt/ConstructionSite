/**
 * Home page — sliders, featured projects, testimonials, FAQ
 */
document.addEventListener("DOMContentLoaded", () => {
  const { $, $$, stars, renderProjectCard, projectCardHTML } = window.Crestline;

  /* Hero Swiper */
  if ($(".hero-swiper")) {
    const wrapper = $(".hero-swiper .swiper-wrapper");
    wrapper.innerHTML = HERO_SLIDES.map(
      (s) => `
      <div class="swiper-slide">
        <div class="hero-slide" style="background-image:url('${s.image}')">
          <div class="container">
            <div class="hero-content" data-aos="fade-up">
              <span class="section-eyebrow" style="color:var(--primary-light);">Crestline Developers</span>
              <h1>${s.title}</h1>
              <p>${s.subtitle}</p>
              <div class="d-flex flex-wrap gap-3">
                <a href="${s.cta.href}" class="btn-primary-custom">${s.cta.label}</a>
                <a href="contact.html" class="btn-outline-custom" style="border-color:#fff;color:#fff;">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>`
    ).join("");

    new Swiper(".hero-swiper", {
      loop: true,
      effect: "fade",
      autoplay: { delay: 5500, disableOnInteraction: false },
      pagination: { el: ".hero-swiper .swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".hero-swiper .swiper-button-next",
        prevEl: ".hero-swiper .swiper-button-prev",
      },
    });
  }

  /* Why Choose */
  const whyMount = $("#whyChooseGrid");
  if (whyMount) {
    whyMount.innerHTML = WHY_CHOOSE.map(
      (w, i) => `
      <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${i * 80}">
        <div class="feature-card">
          <div class="icon-circle"><i class="bi ${w.icon}"></i></div>
          <h4 class="h5">${w.title}</h4>
          <p class="text-muted mb-0">${w.text}</p>
        </div>
      </div>`
    ).join("");
  }

  /* Featured Projects */
  const featured = $("#featuredProjects");
  if (featured) {
    featured.innerHTML = PROJECTS.filter((p) => p.featured)
      .slice(0, 3)
      .map(renderProjectCard)
      .join("");
  }

  /* Latest Projects Carousel */
  const latestWrap = $("#latestProjectsWrapper");
  if (latestWrap) {
    latestWrap.innerHTML = PROJECTS.map(
      (p) => `<div class="swiper-slide">${projectCardHTML(p)}</div>`
    ).join("");

    new Swiper(".projects-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: { el: ".projects-swiper .swiper-pagination", clickable: true },
      breakpoints: {
        576: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
    });
  }

  /* Testimonials slider */
  const testiWrap = $("#homeTestimonials");
  if (testiWrap) {
    testiWrap.innerHTML = TESTIMONIALS.map(
      (t) => `
      <div class="swiper-slide">
        <div class="testimonial-card">
          <div class="stars">${stars(t.rating)}</div>
          <p class="mb-4">"${t.feedback}"</p>
          <div class="d-flex align-items-center gap-3">
            <img src="${t.photo}" alt="${t.name}" class="client-photo" loading="lazy">
            <div>
              <strong>${t.name}</strong>
              <div class="small text-muted">${t.role}</div>
            </div>
          </div>
        </div>
      </div>`
    ).join("");

    new Swiper(".testimonials-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: { delay: 4500 },
      pagination: { el: ".testimonials-swiper .swiper-pagination", clickable: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
    });
  }

  /* Process */
  const processMount = $("#processGrid");
  if (processMount) {
    processMount.innerHTML = PROCESS_STEPS.map(
      (s, i) => `
      <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${i * 80}">
        <div class="process-step">
          <div class="step-num">${s.step}</div>
          <h4 class="h5">${s.title}</h4>
          <p class="text-muted mb-0">${s.text}</p>
        </div>
      </div>`
    ).join("");
  }

  /* Certifications */
  const certMount = $("#certsGrid");
  if (certMount) {
    certMount.innerHTML = CERTIFICATIONS.map(
      (c) => `
      <div class="col-6 col-md-3" data-aos="zoom-in">
        <div class="cert-item glass-card">
          <i class="bi ${c.icon}"></i>
          <h5 class="h6 mb-0">${c.name}</h5>
        </div>
      </div>`
    ).join("");
  }

  /* Partners */
  const partnerMount = $("#partnersGrid");
  if (partnerMount) {
    partnerMount.innerHTML = PARTNERS.map(
      (p) => `
      <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
        <div class="partner-logo" title="${p.name}">${p.initials}</div>
      </div>`
    ).join("");
  }

  /* FAQ */
  const faqMount = $("#faqAccordion");
  if (faqMount) {
    faqMount.innerHTML = FAQS.map(
      (f, i) => `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button ${i ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i}">
            ${f.q}
          </button>
        </h2>
        <div id="faq${i}" class="accordion-collapse collapse ${i ? "" : "show"}" data-bs-parent="#faqAccordion">
          <div class="accordion-body">${f.a}</div>
        </div>
      </div>`
    ).join("");
  }

  /* Map */
  const map = $("#homeMap");
  if (map) map.src = SITE.mapEmbed;
});
