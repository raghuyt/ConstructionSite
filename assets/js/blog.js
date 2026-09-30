/**
 * Blog listing + optional article expand via hash/id
 */
document.addEventListener("DOMContentLoaded", () => {
  const { $, $$ } = window.Crestline;
  const grid = $("#blogGrid");
  if (!grid) return;

  let activeCat = "all";

  function render() {
    const posts = BLOG_POSTS.filter((p) => activeCat === "all" || p.category === activeCat);
    grid.innerHTML = posts
      .map(
        (p, i) => `
      <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${i * 60}">
        <article class="blog-card">
          <div class="blog-img">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
          </div>
          <div class="blog-body">
            <div class="blog-meta"><span class="cat">${p.category}</span> · ${p.date}</div>
            <h3 class="h5">${p.title}</h3>
            <p class="text-muted">${p.excerpt}</p>
            <button class="btn-outline-custom read-more" style="padding:0.45rem 1rem;font-size:0.75rem;" data-id="${p.id}">Read More</button>
          </div>
        </article>
      </div>`
      )
      .join("");

    $$(".read-more").forEach((btn) => {
      btn.addEventListener("click", () => {
        const post = BLOG_POSTS.find((x) => x.id === btn.dataset.id);
        if (!post) return;
        $("#blogModalTitle").textContent = post.title;
        $("#blogModalMeta").textContent = `${post.category} · ${post.date}`;
        $("#blogModalBody").textContent = post.content;
        $("#blogModalImg").src = post.image;
        $("#blogModalImg").alt = post.title;
        new bootstrap.Modal($("#blogModal")).show();
      });
    });
  }

  $$(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCat = btn.dataset.filter;
      render();
    });
  });

  render();
});
