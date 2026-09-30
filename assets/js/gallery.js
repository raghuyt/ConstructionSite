/**
 * Gallery — filter + GLightbox
 */
document.addEventListener("DOMContentLoaded", () => {
  const { $, $$ } = window.Crestline;
  const grid = $("#galleryGrid");
  if (!grid) return;

  let active = "all";
  let lightbox = null;

  function render() {
    const items = GALLERY_ITEMS.filter((g) => active === "all" || g.type === active);
    grid.innerHTML = items
      .map(
        (g) => `
      <div class="col-6 col-md-4 col-lg-3" data-aos="zoom-in">
        <a href="${g.video || g.image}" class="gallery-item glightbox d-block" data-gallery="site" ${g.video ? 'data-type="video"' : ""}>
          <img src="${g.image}" alt="${g.title}" loading="lazy">
          ${g.type === "video" ? '<span class="video-badge"><i class="bi bi-play-fill"></i></span>' : ""}
          <div class="gallery-overlay"><span>${g.title}</span></div>
        </a>
      </div>`
      )
      .join("");

    if (typeof GLightbox !== "undefined") {
      if (lightbox) lightbox.destroy();
      lightbox = GLightbox({ selector: ".glightbox", touchNavigation: true, loop: true });
    }
    if (typeof AOS !== "undefined") AOS.refresh();
  }

  $$(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      active = btn.dataset.filter;
      render();
    });
  });

  render();
});
