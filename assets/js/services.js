/**
 * Services page renderer
 */
document.addEventListener("DOMContentLoaded", () => {
  const { $ } = window.Crestline;
  const grid = $("#servicesGrid");
  if (!grid) return;

  grid.innerHTML = SERVICES.map(
    (s, i) => `
    <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${i * 60}" id="${s.id}">
      <div class="service-card">
        <div class="icon-circle"><i class="bi ${s.icon}"></i></div>
        <h3 class="h5">${s.title}</h3>
        <p class="text-muted mb-3">${s.text}</p>
        <button class="btn-outline-custom" style="padding:0.5rem 1rem;font-size:0.75rem;" data-bs-toggle="modal" data-bs-target="#quoteModal">Enquire</button>
      </div>
    </div>`
  ).join("");
});
