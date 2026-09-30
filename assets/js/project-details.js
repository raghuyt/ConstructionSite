/**
 * Project Details — driven by ?id= query param
 */
document.addEventListener("DOMContentLoaded", () => {
  const { $, getProjectById, waLink } = window.Crestline;
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || PROJECTS[0]?.id;
  const project = getProjectById(id) || PROJECTS[0];

  if (!project) {
    $("#projectDetailRoot").innerHTML =
      '<div class="container py-5"><p>Project not found. <a href="projects.html">Back to projects</a></p></div>';
    return;
  }

  document.title = `${project.name} | Crestline Developers`;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", project.name);

  $("#pdName").textContent = project.name;
  $("#pdBreadcrumb").textContent = project.name;
  $("#pdDescription").textContent = project.description;
  $("#pdLocation").textContent = project.location;
  $("#pdStatus").textContent = project.status;
  $("#pdType").textContent = project.type;
  $("#pdCategory").textContent = project.category;
  $("#pdDate").textContent = project.completionDate;
  $("#pdProgressLabel").textContent = `${project.progress}% Complete`;
  $("#pdProgressBar").style.width = `${project.progress}%`;

  const gallery = $("#pdGallery");
  if (gallery) {
    gallery.innerHTML = project.gallery
      .map(
        (img, i) => `
      <a href="${img}" class="glightbox" data-gallery="project">
        <img src="${img}" alt="${project.name} photo ${i + 1}" loading="lazy" class="rounded mb-3 w-100" style="aspect-ratio:4/3;object-fit:cover;">
      </a>`
      )
      .join("");
    if (typeof GLightbox !== "undefined") {
      GLightbox({ selector: ".glightbox" });
    }
  }

  $("#pdFeatures").innerHTML = project.features.map((f) => `<li>${f}</li>`).join("");
  $("#pdAmenities").innerHTML = project.amenities.map((a) => `<li>${a}</li>`).join("");

  const map = $("#pdMap");
  if (map) map.src = project.mapEmbed || SITE.mapEmbed;

  const waBtn = $("#pdWhatsApp");
  if (waBtn) {
    waBtn.href = waLink(
      `Hello, I visited your website and would like information regarding ${project.name}.`
    );
  }

  // Before / After if available
  const baSection = $("#pdBeforeAfter");
  if (baSection && project.beforeImage && project.afterImage) {
    baSection.style.display = "block";
    $("#pdBeforeImg").src = project.beforeImage;
    $("#pdAfterImg").src = project.afterImage;
  }
});
