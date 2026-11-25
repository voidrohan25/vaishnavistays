/**
 * VaishnaviStays - Production Frontend Application
 * Depends on js/data.js (SITE_CONFIG, ICONS, VILLAS_DATA, GALLERY_ITEMS)
 */

document.addEventListener("DOMContentLoaded", () => {
  initDateConstraints();
  initNavbar();
  initBackToTop();
  initVillas();
  initVillaDetailPage();
  initGallery();
  initFaqAccordion();
  initSearchForm();
  initEnquiryForms();
  initSubtleReveal();
});

/* --------------------------------------------------------------------------
   Helpers: Security, Dates, Markup & Inline Alerts
   -------------------------------------------------------------------------- */
function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTodayISO() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function initDateConstraints() {
  const today = getTodayISO();
  document.querySelectorAll('input[type="date"]').forEach((input) => {
    input.min = today;
  });

  const pairs = [
    ["searchCheckIn", "searchCheckOut"],
    ["modalCheckIn", "modalCheckOut"],
    ["detailCheckIn", "detailCheckOut"]
  ];

  pairs.forEach(([inId, outId]) => {
    const inEl = document.getElementById(inId);
    const outEl = document.getElementById(outId);
    if (!inEl || !outEl) return;

    inEl.addEventListener("change", () => {
      if (inEl.value) {
        outEl.min = inEl.value;
        if (outEl.value && outEl.value <= inEl.value) {
          outEl.value = "";
        }
      } else {
        outEl.min = today;
      }
    });
  });
}

function isValidIndianPhone(rawPhone) {
  const digits = rawPhone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormAlert(el, htmlMessage, variant = "error") {
  if (!el) return;
  el.classList.remove("form-alert--error", "form-alert--success", "form-alert--info", "is-visible");
  el.classList.add(`form-alert--${variant}`, "is-visible");
  el.innerHTML = htmlMessage;
}

function hideFormAlert(el) {
  if (!el) return;
  el.classList.remove("is-visible", "form-alert--error", "form-alert--success", "form-alert--info");
  el.innerHTML = "";
}

function renderPictureHtml(item, className, altText, eager = false) {
  const loadingAttr = eager ? "eager" : "lazy";
  return `
    <picture>
      <source srcset="${escapeHtml(item.webp)}" type="image/webp">
      <img
        src="${escapeHtml(item.jpg)}"
        alt="${escapeHtml(altText)}"
        width="${item.width}"
        height="${item.height}"
        class="${escapeHtml(className)}"
        loading="${loadingAttr}"
        decoding="async"
      >
    </picture>
  `;
}

/* --------------------------------------------------------------------------
   Navigation & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".mobile-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  const backdrop = document.querySelector(".drawer-backdrop");
  const closeBtn = document.querySelector(".drawer-close");
  const links = document.querySelectorAll(".drawer-link");

  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add("is-open");
    backdrop && backdrop.classList.add("is-open");
    toggle && toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    closeBtn && closeBtn.focus();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("is-open");
    backdrop && backdrop.classList.remove("is-open");
    toggle && toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (toggle) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", openDrawer);
  }
  closeBtn && closeBtn.addEventListener("click", closeDrawer);
  backdrop && backdrop.addEventListener("click", closeDrawer);
  links.forEach((link) => link.addEventListener("click", closeDrawer));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer && drawer.classList.contains("is-open")) {
      closeDrawer();
      toggle && toggle.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   Back To Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("is-visible", window.scrollY > 480);
    },
    { passive: true }
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* --------------------------------------------------------------------------
   Villas Listing, Filtering & Card Builder
   -------------------------------------------------------------------------- */
function initVillas() {
  const grid = document.getElementById("villasGrid");
  const featuredGrid = document.getElementById("featuredVillasGrid");
  const filterBtns = document.querySelectorAll(".filter-btn[data-filter]");

  if (featuredGrid) {
    const featured = [VILLAS_DATA[0], VILLAS_DATA[3], VILLAS_DATA[2]];
    featuredGrid.innerHTML = featured.map(createVillaCardHtml).join("");
  }

  if (grid) {
    const params = new URLSearchParams(window.location.search);
    const initialFilter = params.get("filter") || "all";
    applyVillaFilter(initialFilter, filterBtns, grid);

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter") || "all";
        applyVillaFilter(filter, filterBtns, grid);
      });
    });
  }
}

function applyVillaFilter(filter, filterBtns, grid) {
  let matched = VILLAS_DATA;
  if (filter !== "all") {
    matched = VILLAS_DATA.filter(
      (v) => v.category === filter || (v.tags && v.tags.includes(filter))
    );
  }

  filterBtns.forEach((btn) => {
    const isMatch = btn.getAttribute("data-filter") === filter;
    btn.classList.toggle("is-active", isMatch);
    btn.setAttribute("aria-pressed", isMatch ? "true" : "false");
  });

  if (matched.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No villas matched this filter</h3>
        <p>Contact VaishnaviStays directly for tailored recommendations across Lonavala &amp; Khandala.</p>
        <a href="${SITE_CONFIG.whatsappBase}?text=${encodeURIComponent("Hello VaishnaviStays, I am looking for villa availability in Lonavala & Khandala.")}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          ${ICONS.whatsapp}<span>Enquire on WhatsApp (${SITE_CONFIG.phone})</span>
        </a>
      </div>
    `;
    return;
  }

  grid.innerHTML = matched.map(createVillaCardHtml).join("");
}

function createVillaCardHtml(villa) {
  return `
    <article class="villa-card" data-id="${villa.id}">
      <a href="villa.html?slug=${encodeURIComponent(villa.slug)}" class="villa-card__media" aria-label="View details for ${escapeHtml(villa.name)}">
        ${renderPictureHtml(villa, "villa-card__img", `${villa.name} - ${villa.tagline}`)}
        <span class="villa-card__badge">${escapeHtml(villa.badge)}</span>
      </a>
      <div class="villa-card__body">
        <div class="villa-card__meta">
          <span class="villa-card__location">${ICONS.mapPin}<span>${escapeHtml(villa.location)}</span></span>
          <span class="villa-card__highlight">${escapeHtml(villa.highlight)}</span>
        </div>
        <h3 class="villa-card__title">
          <a href="villa.html?slug=${encodeURIComponent(villa.slug)}">${escapeHtml(villa.name)}</a>
        </h3>
        <p class="villa-card__desc">${escapeHtml(villa.tagline)}</p>
        <ul class="villa-card__specs">
          <li>${ICONS.bed}<span>${escapeHtml(villa.specs.accommodation)}</span></li>
          <li>${ICONS.pool}<span>${escapeHtml(villa.specs.pool)}</span></li>
          <li>${ICONS.users}<span>${escapeHtml(villa.specs.idealFor)}</span></li>
        </ul>
        <div class="villa-card__actions">
          <a href="villa.html?slug=${encodeURIComponent(villa.slug)}" class="btn btn-outline btn-sm">
            <span>View Villa</span>${ICONS.arrowRight}
          </a>
          <button type="button" class="btn btn-primary btn-sm" onclick="openQuickEnquiry(${villa.id})">
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

/* --------------------------------------------------------------------------
   Individual Villa Detail Page (villa.html?slug=...)
   -------------------------------------------------------------------------- */
function initVillaDetailPage() {
  const container = document.getElementById("villaDetailRoot");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const villa = VILLAS_DATA.find((v) => v.slug === slug) || VILLAS_DATA[0];

  if (slug && !VILLAS_DATA.some((v) => v.slug === slug)) {
    container.innerHTML = `
      <section class="section">
        <div class="container">
          <div class="empty-state">
            <h1>Villa Not Found</h1>
            <p>The villa you requested could not be located. Browse all 7 properties below.</p>
            <a href="villas.html" class="btn btn-primary">Explore All Villas</a>
          </div>
        </div>
      </section>
    `;
    return;
  }

  document.title = `${villa.name} (${villa.highlight}) | VaishnaviStays`;
  const breadcrumbEl = document.getElementById("villaBreadcrumbTitle");
  if (breadcrumbEl) breadcrumbEl.textContent = villa.name;

  const waUrl = `${SITE_CONFIG.whatsappBase}?text=${encodeURIComponent(
    `Hello VaishnaviStays, I am interested in booking ${villa.name} (${villa.highlight}) in ${villa.location}. Please share availability and tariff.`
  )}`;

  const otherVillas = VILLAS_DATA.filter((v) => v.id !== villa.id).slice(0, 3);

  container.innerHTML = `
    <section class="section section--tight-top">
      <div class="container">
        <div class="villa-detail-grid">
          <div class="villa-detail__visual">
            <div class="villa-detail__frame">
              ${renderPictureHtml(villa, "villa-detail__img", `${villa.name} in ${villa.location}`, true)}
            </div>
            <div class="villa-detail__info">
              <div class="eyebrow">${escapeHtml(villa.location)} • ${escapeHtml(villa.highlight)}</div>
              <h1 class="villa-detail__title">${escapeHtml(villa.name)}</h1>
              <p class="villa-detail__lead">${escapeHtml(villa.tagline)}</p>
              <p class="villa-detail__desc">${escapeHtml(villa.description)}</p>

              <div class="villa-detail__specs-grid">
                <div class="spec-tile">
                  <span class="spec-tile__label">Configuration</span>
                  <strong class="spec-tile__value">${escapeHtml(villa.specs.accommodation)}</strong>
                </div>
                <div class="spec-tile">
                  <span class="spec-tile__label">Pool Access</span>
                  <strong class="spec-tile__value">${escapeHtml(villa.specs.pool)}</strong>
                </div>
                <div class="spec-tile">
                  <span class="spec-tile__label">Best Suited For</span>
                  <strong class="spec-tile__value">${escapeHtml(villa.specs.idealFor)}</strong>
                </div>
              </div>

              <h2 class="sub-heading">Property Highlights &amp; Amenities</h2>
              <ul class="amenity-checklist">
                ${villa.amenities.map((a) => `<li>${ICONS.check}<span>${escapeHtml(a)}</span></li>`).join("")}
              </ul>

              <h2 class="sub-heading">Check-in, Check-out &amp; Directions</h2>
              <div class="villa-detail__specs-grid">
                <div class="spec-tile">
                  <span class="spec-tile__label">Location &amp; Access</span>
                  <strong class="spec-tile__value">${escapeHtml(villa.location)}, Maharashtra (Mumbai–Pune Expressway)</strong>
                </div>
                <div class="spec-tile">
                  <span class="spec-tile__label">Check-in / Check-out</span>
                  <strong class="spec-tile__value">Confirmed per property upon booking</strong>
                </div>
                <div class="spec-tile">
                  <span class="spec-tile__label">Directions &amp; Pin</span>
                  <strong class="spec-tile__value">Exact address shared upon confirmation</strong>
                </div>
              </div>

              <div class="villa-detail__quick-ctas">
                <a href="${SITE_CONFIG.telHref}" class="btn btn-outline">
                  ${ICONS.phone}<span>Call ${SITE_CONFIG.formattedPhone}</span>
                </a>
                <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                  ${ICONS.whatsapp}<span>WhatsApp Instant Enquiry</span>
                </a>
              </div>
            </div>
          </div>

          <aside class="villa-detail__sidebar">
            <div class="form-card">
              <span class="eyebrow">Direct Reservation Desk</span>
              <h2 class="form-card__title">Enquire for ${escapeHtml(villa.name)}</h2>
              <p class="form-card__subtitle">Check availability and direct tariff without platform fees.</p>

              <form id="villaDetailForm" name="villa-enquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" novalidate>
                <input type="hidden" name="form-name" value="villa-enquiry">
                <input type="hidden" name="villa" value="${escapeHtml(villa.name)}">
                <p class="sr-only" aria-hidden="true">
                  <label>Leave blank: <input name="bot-field" tabindex="-1" autocomplete="off"></label>
                </p>

                <div class="field">
                  <label for="detailName">Full Name *</label>
                  <input id="detailName" name="name" type="text" class="input" placeholder="Your full name" required autocomplete="name">
                </div>

                <div class="field">
                  <label for="detailPhone">Mobile Number *</label>
                  <input id="detailPhone" name="phone" type="tel" class="input" placeholder="10-digit mobile number" required autocomplete="tel">
                </div>

                <div class="field">
                  <label for="detailEmail">Email Address (Optional)</label>
                  <input id="detailEmail" name="email" type="email" class="input" placeholder="name@example.com" autocomplete="email">
                </div>

                <div class="field-row">
                  <div class="field">
                    <label for="detailCheckIn">Check-in</label>
                    <input id="detailCheckIn" name="checkin" type="date" class="input">
                  </div>
                  <div class="field">
                    <label for="detailCheckOut">Check-out</label>
                    <input id="detailCheckOut" name="checkout" type="date" class="input">
                  </div>
                </div>

                <div class="field">
                  <label for="detailGuests">Number of Guests</label>
                  <select id="detailGuests" name="guests" class="input">
                    <option value="4-6 Guests">4 - 6 Guests</option>
                    <option value="7-10 Guests">7 - 10 Guests</option>
                    <option value="11-15 Guests" selected>11 - 15 Guests</option>
                    <option value="16-20 Guests">16 - 20 Guests</option>
                    <option value="20+ Guests">20+ Guests</option>
                  </select>
                </div>

                <div class="field">
                  <label for="detailNotes">Notes / Occasion</label>
                  <textarea id="detailNotes" name="notes" class="input textarea" placeholder="Family stay, birthday gathering, travel questions..."></textarea>
                </div>

                <div id="detailFormAlert" class="form-alert" role="alert"></div>

                <button type="submit" class="btn btn-primary btn-block">
                  <span>Send Availability Request</span>
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section section--tinted">
      <div class="container">
        <div class="section-header section-header--split">
          <div>
            <span class="eyebrow">Continue Exploring</span>
            <h2 class="section-title">More Villas in Our Collection</h2>
          </div>
          <a href="villas.html" class="btn btn-outline btn-sm">
            <span>View All 7 Villas</span>${ICONS.arrowRight}
          </a>
        </div>
        <div class="villas-grid">
          ${otherVillas.map(createVillaCardHtml).join("")}
        </div>
      </div>
    </section>
  `;

  initDateConstraints();
}

/* --------------------------------------------------------------------------
   Shared Quick-Enquiry Modal (Injected Once Dynamically)
   -------------------------------------------------------------------------- */
function ensureBookingModal() {
  let modal = document.getElementById("bookingModal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "bookingModal";
  modal.className = "modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "modalVillaTitle");

  modal.innerHTML = `
    <div class="modal__box">
      <button type="button" class="modal__close" id="closeModalBtn" aria-label="Close modal">&times;</button>
      <span class="eyebrow">Direct Enquiry</span>
      <h3 class="modal__title" id="modalVillaTitle">Villa Enquiry</h3>
      <p class="modal__subtitle" id="modalVillaSubtitle"></p>

      <form id="modalBookingForm" name="villa-enquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" novalidate>
        <input type="hidden" name="form-name" value="villa-enquiry">
        <input type="hidden" id="modalVillaNameInput" name="villa" value="">
        <p class="sr-only" aria-hidden="true">
          <label>Leave blank: <input name="bot-field" tabindex="-1" autocomplete="off"></label>
        </p>

        <div class="field">
          <label for="modalGuestName">Full Name *</label>
          <input type="text" id="modalGuestName" name="name" class="input" placeholder="Your full name" required>
        </div>

        <div class="field">
          <label for="modalGuestPhone">Mobile Number *</label>
          <input type="tel" id="modalGuestPhone" name="phone" class="input" placeholder="10-digit mobile number" required>
        </div>

        <div class="field-row">
          <div class="field">
            <label for="modalCheckIn">Check-in</label>
            <input type="date" id="modalCheckIn" name="checkin" class="input">
          </div>
          <div class="field">
            <label for="modalCheckOut">Check-out</label>
            <input type="date" id="modalCheckOut" name="checkout" class="input">
          </div>
        </div>

        <div class="field">
          <label for="modalGuestsCount">Group Size</label>
          <select id="modalGuestsCount" name="guests" class="input">
            <option value="4-6 Guests">4 - 6 Guests</option>
            <option value="7-10 Guests">7 - 10 Guests</option>
            <option value="11-15 Guests" selected>11 - 15 Guests</option>
            <option value="16-20 Guests">16 - 20 Guests</option>
            <option value="20+ Guests">20+ Guests</option>
          </select>
        </div>

        <div class="field">
          <label for="modalGuestNote">Message (Optional)</label>
          <textarea id="modalGuestNote" name="notes" class="input textarea" style="min-height:76px;" placeholder="Preferred dates, celebration details, questions..."></textarea>
        </div>

        <div id="modalBookingAlert" class="form-alert" role="alert"></div>

        <button type="submit" class="btn btn-primary btn-block">
          <span>Check Availability</span>
        </button>
      </form>
    </div>
  `;

  document.body.appendChild(modal);
  initDateConstraints();

  const closeModal = () => {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  modal.querySelector("#closeModalBtn").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  bindEnquiryForm(modal.querySelector("#modalBookingForm"), {
    nameId: "modalGuestName",
    phoneId: "modalGuestPhone",
    checkinId: "modalCheckIn",
    checkoutId: "modalCheckOut",
    guestsId: "modalGuestsCount",
    notesId: "modalGuestNote",
    villaInputId: "modalVillaNameInput",
    alertId: "modalBookingAlert"
  });

  return modal;
}

window.openQuickEnquiry = function (villaId) {
  const villa = VILLAS_DATA.find((v) => v.id === villaId);
  if (!villa) return;

  const modal = ensureBookingModal();
  hideFormAlert(document.getElementById("modalBookingAlert"));

  document.getElementById("modalVillaTitle").textContent = villa.name;
  document.getElementById("modalVillaSubtitle").textContent = `${villa.highlight} • ${villa.location}`;
  document.getElementById("modalVillaNameInput").value = villa.name;

  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
  document.getElementById("modalGuestName").focus();
};

/* --------------------------------------------------------------------------
   Hero Quick Availability Search Bar
   -------------------------------------------------------------------------- */
function initSearchForm() {
  const form = document.getElementById("heroSearchForm");
  if (!form) return;

  const alertEl = document.getElementById("heroSearchAlert");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    hideFormAlert(alertEl);

    const location = document.getElementById("searchLocation").value;
    const checkin = document.getElementById("searchCheckIn").value;
    const checkout = document.getElementById("searchCheckOut").value;
    const guests = document.getElementById("searchGuests").value;

    if (checkin && checkout && checkout <= checkin) {
      showFormAlert(alertEl, "Check-out date must be after the check-in date.", "error");
      return;
    }

    const message =
      `Hello VaishnaviStays, I would like to check availability:\n` +
      `Destination: ${location}\n` +
      `Dates: ${checkin || "Flexible"} to ${checkout || "Flexible"}\n` +
      `Guests: ${guests}`;

    const waUrl = `${SITE_CONFIG.whatsappBase}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  });
}

/* --------------------------------------------------------------------------
   Production Form Submission (Validation, Honeypot, Netlify POST + WhatsApp)
   -------------------------------------------------------------------------- */
function initEnquiryForms() {
  const contactForm = document.getElementById("contactPageForm");
  if (contactForm) {
    bindEnquiryForm(contactForm, {
      nameId: "contactName",
      phoneId: "contactPhone",
      emailId: "contactEmail",
      villaSelectId: "contactVillaSelect",
      checkinId: "contactCheckIn",
      guestsId: "contactGuests",
      notesId: "contactMessage",
      alertId: "contactFormAlert"
    });
  }

  const detailForm = document.getElementById("villaDetailForm");
  if (detailForm) {
    bindEnquiryForm(detailForm, {
      nameId: "detailName",
      phoneId: "detailPhone",
      emailId: "detailEmail",
      checkinId: "detailCheckIn",
      checkoutId: "detailCheckOut",
      guestsId: "detailGuests",
      notesId: "detailNotes",
      alertId: "detailFormAlert"
    });
  }
}

function bindEnquiryForm(form, cfg) {
  const alertEl = document.getElementById(cfg.alertId);
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideFormAlert(alertEl);

    // Honeypot anti-spam check
    const botField = form.querySelector('input[name="bot-field"]');
    if (botField && botField.value.trim() !== "") {
      return;
    }

    const name = document.getElementById(cfg.nameId)?.value.trim() || "";
    const phone = document.getElementById(cfg.phoneId)?.value.trim() || "";
    const email = cfg.emailId ? (document.getElementById(cfg.emailId)?.value.trim() || "") : "";
    const villa =
      (cfg.villaSelectId && document.getElementById(cfg.villaSelectId)?.value) ||
      (cfg.villaInputId && document.getElementById(cfg.villaInputId)?.value) ||
      form.querySelector('input[name="villa"]')?.value ||
      "Any Villa";
    const checkin = cfg.checkinId ? (document.getElementById(cfg.checkinId)?.value || "") : "";
    const checkout = cfg.checkoutId ? (document.getElementById(cfg.checkoutId)?.value || "") : "";
    const guests = cfg.guestsId ? (document.getElementById(cfg.guestsId)?.value || "") : "";
    const notes = cfg.notesId ? (document.getElementById(cfg.notesId)?.value.trim() || "") : "";

    if (!name) {
      showFormAlert(alertEl, "Please enter your full name.", "error");
      document.getElementById(cfg.nameId)?.focus();
      return;
    }

    if (!isValidIndianPhone(phone)) {
      showFormAlert(alertEl, "Please enter a valid 10-digit mobile number.", "error");
      document.getElementById(cfg.phoneId)?.focus();
      return;
    }

    if (email && !isValidEmail(email)) {
      showFormAlert(alertEl, "Please enter a valid email address or leave email blank.", "error");
      document.getElementById(cfg.emailId)?.focus();
      return;
    }

    if (checkin && checkout && checkout <= checkin) {
      showFormAlert(alertEl, "Check-out date must be after check-in date.", "error");
      document.getElementById(cfg.checkoutId)?.focus();
      return;
    }

    const waText =
      `New Villa Enquiry - VaishnaviStays\n` +
      `Name: ${name}\n` +
      `Mobile: ${phone}\n` +
      (email ? `Email: ${email}\n` : "") +
      `Villa: ${villa}\n` +
      `Check-in: ${checkin || "Flexible"}\n` +
      (checkout ? `Check-out: ${checkout}\n` : "") +
      `Guests: ${guests || "Not specified"}\n` +
      `Notes: ${notes || "Interested in availability and tariff."}`;

    const waUrl = `${SITE_CONFIG.whatsappBase}?text=${encodeURIComponent(waText)}`;

    // Loading state
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.setAttribute("aria-busy", "true");
      submitBtn.textContent = "Submitting Enquiry...";
    }

    let netlifyDelivered = false;
    const isLocalHost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.protocol === "file:";

    if (!isLocalHost) {
      try {
        const body = new URLSearchParams(new FormData(form)).toString();
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body
        });
        netlifyDelivered = response.ok;
      } catch {
        netlifyDelivered = false;
      }
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.removeAttribute("aria-busy");
      submitBtn.innerHTML = originalBtnHtml;
    }

    if (netlifyDelivered) {
      showFormAlert(
        alertEl,
        `Thank you, ${escapeHtml(name)}. Your enquiry has been submitted to our booking desk. <a href="${waUrl}" target="_blank" rel="noopener noreferrer">Also send via WhatsApp (${SITE_CONFIG.phone})</a> for instant confirmation.`,
        "success"
      );
      form.reset();
    } else {
      showFormAlert(
        alertEl,
        `Your enquiry details are validated and ready. <a href="${waUrl}" target="_blank" rel="noopener noreferrer">Send directly via WhatsApp (${SITE_CONFIG.formattedPhone})</a> or call <a href="${SITE_CONFIG.telHref}">${SITE_CONFIG.formattedPhone}</a> for immediate assistance.`,
        "info"
      );
    }
  });
}

/* --------------------------------------------------------------------------
   Photo Gallery & Accessible Lightbox
   -------------------------------------------------------------------------- */
let activeLightboxIndex = 0;
let currentGalleryItems = [...GALLERY_ITEMS];

function initGallery() {
  const galleryGrid = document.getElementById("galleryGrid");
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  const lightbox = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (!galleryGrid) return;

  function renderGallery(items) {
    currentGalleryItems = items;
    galleryGrid.innerHTML = items
      .map(
        (item, index) => `
      <div class="gallery-card" role="button" tabindex="0" aria-label="Open photo: ${escapeHtml(item.title)}" onclick="openLightbox(${index})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLightbox(${index});}">
        ${renderPictureHtml(item, "gallery-card__img", item.title)}
        <div class="gallery-card__caption">
          <span class="gallery-card__cat">${escapeHtml(item.categoryLabel)}</span>
          <h3 class="gallery-card__title">${escapeHtml(item.title)}</h3>
        </div>
      </div>
    `
      )
      .join("");
  }

  renderGallery(GALLERY_ITEMS);

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");

      const category = btn.getAttribute("data-category");
      if (category === "all") {
        renderGallery(GALLERY_ITEMS);
      } else {
        renderGallery(GALLERY_ITEMS.filter((item) => item.category === category));
      }
    });
  });

  window.openLightbox = function (index) {
    if (!lightbox || currentGalleryItems.length === 0) return;
    activeLightboxIndex = Math.max(0, Math.min(index, currentGalleryItems.length - 1));
    updateLightbox();
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    closeBtn && closeBtn.focus();
  };

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const item = currentGalleryItems[activeLightboxIndex];
    if (!item) return;
    lightboxImg.src = item.webp || item.jpg;
    lightboxImg.alt = item.title;
    lightboxCaption.textContent = item.title;
  }

  function showNext() {
    if (currentGalleryItems.length === 0) return;
    activeLightboxIndex = (activeLightboxIndex + 1) % currentGalleryItems.length;
    updateLightbox();
  }

  function showPrev() {
    if (currentGalleryItems.length === 0) return;
    activeLightboxIndex = (activeLightboxIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
    updateLightbox();
  }

  closeBtn && closeBtn.addEventListener("click", closeLightbox);
  nextBtn && nextBtn.addEventListener("click", showNext);
  prevBtn && prevBtn.addEventListener("click", showPrev);

  lightbox &&
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
}

/* --------------------------------------------------------------------------
   Accessible FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (!question) return;

    question.setAttribute("role", "button");
    question.setAttribute("tabindex", "0");
    question.setAttribute("aria-expanded", item.classList.contains("is-open") ? "true" : "false");

    const toggleItem = () => {
      const isOpen = item.classList.contains("is-open");

      faqItems.forEach((other) => {
        other.classList.remove("is-open");
        const q = other.querySelector(".faq-question");
        q && q.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
      }
    };

    question.addEventListener("click", toggleItem);
    question.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleItem();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Subtle Entrance Reveal (Respects prefers-reduced-motion)
   -------------------------------------------------------------------------- */
function initSubtleReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll("[data-reveal]");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach((el) => observer.observe(el));
}
