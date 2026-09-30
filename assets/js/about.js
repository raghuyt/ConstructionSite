/**
 * About page content renderer
 */
document.addEventListener("DOMContentLoaded", () => {
  const { $, stars } = window.Crestline;

  const values = $("#valuesGrid");
  if (values) {
    values.innerHTML = VALUES.map(
      (v, i) => `
      <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${i * 70}">
        <div class="feature-card">
          <div class="icon-circle"><i class="bi ${v.icon}"></i></div>
          <h4 class="h5">${v.title}</h4>
          <p class="text-muted mb-0">${v.text}</p>
        </div>
      </div>`
    ).join("");
  }

  const journey = $("#journeyTimeline");
  if (journey) {
    journey.innerHTML = JOURNEY.map(
      (j) => `
      <div class="timeline-item" data-aos="fade-right">
        <div class="year">${j.year}</div>
        <h4 class="h5 mb-1">${j.title}</h4>
        <p class="text-muted mb-0">${j.text}</p>
      </div>`
    ).join("");
  }

  const team = $("#teamGrid");
  if (team) {
    team.innerHTML = TEAM.map(
      (t, i) => `
      <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${i * 70}">
        <div class="team-card">
          <div class="team-photo"><img src="${t.photo}" alt="${t.name}" loading="lazy"></div>
          <div class="team-info">
            <h4 class="h5 mb-1">${t.name}</h4>
            <div class="role">${t.role}</div>
            <p class="small text-muted mb-0">${t.bio}</p>
          </div>
        </div>
      </div>`
    ).join("");
  }

  const certs = $("#aboutCerts");
  if (certs) {
    certs.innerHTML = CERTIFICATIONS.map(
      (c) => `
      <div class="col-6 col-md-3" data-aos="zoom-in">
        <div class="cert-item glass-card">
          <i class="bi ${c.icon}"></i>
          <h5 class="h6 mb-0">${c.name}</h5>
        </div>
      </div>`
    ).join("");
  }

  const awards = $("#awardsGrid");
  if (awards) {
    awards.innerHTML = AWARDS.map(
      (a, i) => `
      <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${i * 70}">
        <div class="award-card">
          <div class="year mb-2">${a.year}</div>
          <h4 class="h6">${a.title}</h4>
          <p class="small text-muted mb-0">${a.org}</p>
        </div>
      </div>`
    ).join("");
  }
});
