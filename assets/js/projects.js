/**
 * Projects listing — search + multi-filter
 */
document.addEventListener("DOMContentLoaded", () => {
  const { $, $$, renderProjectCard } = window.Crestline;
  const grid = $("#projectsGrid");
  const searchInput = $("#projectSearch");
  if (!grid) return;

  let activeFilter = "all";

  function matches(p, filter, query) {
    const q = query.trim().toLowerCase();
    const textMatch =
      !q ||
      [p.name, p.location, p.type, p.category, p.status].join(" ").toLowerCase().includes(q);

    if (!textMatch) return false;
    if (filter === "all") return true;
    const f = filter.toLowerCase();
    return (
      p.status.toLowerCase() === f ||
      p.type.toLowerCase() === f ||
      p.category.toLowerCase() === f
    );
  }

  function render() {
    const query = searchInput ? searchInput.value : "";
    const list = PROJECTS.filter((p) => matches(p, activeFilter, query));
    if (!list.length) {
      grid.innerHTML = `<div class="col-12"><div class="empty-state"><i class="bi bi-search display-5 d-block mb-3"></i>No projects match your filters.</div></div>`;
      return;
    }
    grid.innerHTML = list.map(renderProjectCard).join("");
    if (typeof AOS !== "undefined") AOS.refresh();
  }

  $$(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  searchInput?.addEventListener("input", render);
  render();
});
