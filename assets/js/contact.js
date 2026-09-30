/**
 * Contact form — validation + EmailJS
 */
document.addEventListener("DOMContentLoaded", () => {
  const { $ } = window.Crestline;
  const form = $("#contactForm");
  if (!form) return;

  const success = $("#contactSuccess");
  const submitBtn = form.querySelector('[type="submit"]');

  // Populate inquiry types
  const select = form.querySelector('[name="inquiry_type"]');
  if (select && !select.options.length) {
    select.innerHTML = INQUIRY_TYPES.map((t) => `<option value="${t}">${t}</option>`).join("");
  }

  const map = $("#contactMap");
  if (map) map.src = SITE.mapEmbed;

  function setError(input, msg) {
    input.classList.add("is-invalid");
    const err = input.nextElementSibling;
    if (err && err.classList.contains("form-error")) err.textContent = msg;
  }

  function clearErrors() {
    form.querySelectorAll(".is-invalid").forEach((el) => el.classList.remove("is-invalid"));
  }

  function validate() {
    clearErrors();
    let ok = true;
    const name = form.name;
    const phone = form.phone;
    const email = form.email;
    const message = form.message;

    if (!name.value.trim() || name.value.trim().length < 2) {
      setError(name, "Please enter your full name.");
      ok = false;
    }
    if (!/^[0-9+\-\s()]{7,15}$/.test(phone.value.trim())) {
      setError(phone, "Enter a valid mobile number.");
      ok = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      setError(email, "Enter a valid email address.");
      ok = false;
    }
    if (!message.value.trim() || message.value.trim().length < 10) {
      setError(message, "Message should be at least 10 characters.");
      ok = false;
    }
    return ok;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      from_name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      location: form.location?.value.trim() || "",
      inquiry_type: form.inquiry_type.value,
      message: form.message.value.trim(),
    };

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      if (typeof emailjs !== "undefined" && SITE.emailjs.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY") {
        await emailjs.send(SITE.emailjs.serviceId, SITE.emailjs.templateId, payload);
      } else {
        // Demo mode — simulate success when keys not configured
        await new Promise((r) => setTimeout(r, 800));
        console.info("EmailJS not configured. Payload:", payload);
      }
      form.reset();
      clearErrors();
      if (success) {
        success.style.display = "block";
        success.textContent =
          "Thank you! Your enquiry has been sent successfully. We will contact you shortly.";
        success.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    } catch (err) {
      alert("Sorry, we could not send your message. Please try WhatsApp or call us directly.");
      console.error(err);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Enquiry";
    }
  });
});
