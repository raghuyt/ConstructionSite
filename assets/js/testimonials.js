/**
 * Testimonials page renderer
 */
document.addEventListener("DOMContentLoaded", () => {
  const { $, stars } = window.Crestline;
  const grid = $("#testimonialsGrid");
  if (!grid) return;

  grid.innerHTML = TESTIMONIALS.map(
    (t, i) => `
    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${i * 70}">
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
});
