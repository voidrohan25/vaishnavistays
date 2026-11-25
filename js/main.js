/**
 * VaishnaviStays - Luxury Villa Rentals in Lonavala & Khandala
 * Core Application Logic & Interactions
 * Primary Contact & WhatsApp: +91 9767674307
 */

const CONTACT_PHONE = "9767674307";
const INT_PHONE = "+919767674307";
const WHATSAPP_BASE = "https://wa.me/919767674307";

// Complete Villa Inventory Data (Grounded in verified properties & photos)
const VILLAS_DATA = [
  {
    id: 1,
    name: "Lonavala Villa",
    category: "lonavala",
    tags: ["lonavala", "pool", "party"],
    highlight: "4 BHK",
    badge: "Most Popular",
    image: "images/lonavala villa.jpg",
    location: "Lonavala",
    tagline: "Luxury 4BHK villa with private pool & rain dance",
    description:
      "Spacious 4BHK private villa featuring a sparkling private swimming pool, dedicated rain dance area, lush tropical greenery, air-conditioned rooms, and an ideal setting for families, parties, and weekend getaways.",
    specs: {
      accommodation: "4 BHK AC Villa",
      pool: "Private Pool & Rain Dance",
      idealFor: "Families & Parties"
    },
    amenities: [
      "Private Swimming Pool",
      "Rain Dance Setup",
      "Air-Conditioned Rooms",
      "Lush Greenery & Sit-out",
      "Party & Celebration Friendly",
      "Direct Booking Support"
    ]
  },
  {
    id: 2,
    name: "Nayak Villa",
    category: "lonavala",
    tags: ["lonavala", "pool"],
    highlight: "Modern Interiors",
    badge: "Modern Luxury",
    image: "images/villa2.jpg",
    location: "Lonavala & Khandala",
    tagline: "Premium villa with modern interiors & private stay",
    description:
      "Thoughtfully styled private villa featuring classic arched balconies, covered portico, air-conditioned comfort, and spacious interiors tailored for peaceful family holidays and weekend escapes near Mumbai and Pune.",
    specs: {
      accommodation: "AC Villa Rooms",
      pool: "Private Pool Access",
      idealFor: "Family & Weekend Stays"
    },
    amenities: [
      "Private Swimming Pool",
      "Modern Interiors & Lounge",
      "Arched Balcony & Portico",
      "Air-Conditioned Rooms",
      "Family-Friendly Setting",
      "Direct Booking Support"
    ]
  },
  {
    id: 3,
    name: "Muscut House",
    category: "lonavala",
    tags: ["lonavala", "nature", "pool"],
    highlight: "Terrace View",
    badge: "Terrace View",
    image: "images/villa3.jpg",
    location: "Lonavala & Khandala",
    tagline: "Peaceful villa with terrace view & spacious living lounge",
    description:
      "A tranquil retreat combining an expansive indoor living lounge with peaceful terrace views — ideal for quality time with family and friends, relaxed evenings, and refreshing weekend getaways.",
    specs: {
      accommodation: "Spacious Lounge & AC Rooms",
      pool: "Private Pool Access",
      idealFor: "Peaceful Retreats"
    },
    amenities: [
      "Scenic Terrace View",
      "Expansive Living Lounge",
      "Private Swimming Pool",
      "Air-Conditioned Rooms",
      "Serene Atmosphere",
      "Direct Booking Support"
    ]
  },
  {
    id: 4,
    name: "Khandala Villa",
    category: "khandala",
    tags: ["khandala", "pool", "party"],
    highlight: "5-Star Estate",
    badge: "5-Star Villa",
    image: "images/villa4.jpg",
    location: "Khandala",
    tagline: "5-star villa with large illuminated private pool & lawn",
    description:
      "An upscale Khandala retreat featuring a large illuminated swimming pool, poolside loungers, manicured green lawn, and spacious living areas designed for milestone celebrations, group outings, and luxury weekend stays.",
    specs: {
      accommodation: "Luxury AC Suites",
      pool: "Large Private Pool",
      idealFor: "Groups & Celebrations"
    },
    amenities: [
      "Large Illuminated Private Pool",
      "Manicured Lawn & Loungers",
      "Air-Conditioned Suites",
      "Celebration & Party Friendly",
      "Mountain Surroundings",
      "Direct Booking Support"
    ]
  },
  {
    id: 5,
    name: "Captain Villa 7",
    category: "lonavala",
    tags: ["lonavala", "party", "pool"],
    highlight: "Spacious Garden",
    badge: "Garden Villa",
    image: "images/villa5.jpg",
    location: "Lonavala & Khandala",
    tagline: "Spacious villa with garden, covered veranda & private pool",
    description:
      "Surrounded by tall evergreens, Captain Villa 7 offers a charming brick-clad residence with a spacious outdoor area, covered veranda, balcony views, private pool access, and air-conditioned rooms.",
    specs: {
      accommodation: "AC Villa Rooms",
      pool: "Private Pool Access",
      idealFor: "Families & Gatherings"
    },
    amenities: [
      "Spacious Garden & Outdoor Area",
      "Covered Veranda & Balcony",
      "Private Swimming Pool",
      "Air-Conditioned Rooms",
      "Family & Group Friendly",
      "Direct Booking Support"
    ]
  },
  {
    id: 6,
    name: "Captain Villa 8",
    category: "lonavala",
    tags: ["lonavala", "party", "nature"],
    highlight: "Bonfire Setup",
    badge: "Bonfire & Pool",
    image: "images/villa6.jpg",
    location: "Lonavala & Khandala",
    tagline: "Villa with bonfire setup, waterfall pool & hill views",
    description:
      "Built for memorable group evenings with a dedicated bonfire setup, private waterfall-feature swimming pool, elevated viewing balcony, and scenic hill views in the Sahyadri ranges.",
    specs: {
      accommodation: "AC Villa Rooms",
      pool: "Waterfall Feature Pool",
      idealFor: "Parties & Bonfires"
    },
    amenities: [
      "Dedicated Bonfire Setup",
      "Private Waterfall Pool",
      "Hill View Balcony",
      "Air-Conditioned Rooms",
      "Party & Celebration Ready",
      "Direct Booking Support"
    ]
  },
  {
    id: 7,
    name: "Captain Villa 10",
    category: "khandala",
    tags: ["khandala", "nature", "pool"],
    highlight: "Nature Retreat",
    badge: "Nature View",
    image: "images/villa7.jpg",
    location: "Lonavala & Khandala",
    tagline: "Nature view relaxing villa with cozy dining & kitchen",
    description:
      "A warm, welcoming sanctuary amidst peaceful natural surroundings, featuring comfortable dining and modular kitchen spaces, air-conditioned rooms, and private pool access for unhurried weekend relaxation.",
    specs: {
      accommodation: "AC Rooms & Kitchen",
      pool: "Private Pool Access",
      idealFor: "Nature & Relaxation"
    },
    amenities: [
      "Nature View Surroundings",
      "Dining Area & Modular Kitchen",
      "Private Swimming Pool",
      "Air-Conditioned Rooms",
      "Peaceful Weekend Stay",
      "Direct Booking Support"
    ]
  }
];

// Gallery Media Items (Accurately matched to actual property photographs)
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Lonavala Villa – Private Pool & Tropical Greenery",
    category: "pools",
    categoryLabel: "Private Pools",
    img: "images/lonavala villa.jpg"
  },
  {
    id: 2,
    title: "Khandala Villa – Illuminated Pool & Lawn",
    category: "pools",
    categoryLabel: "Private Pools",
    img: "images/villa4.jpg"
  },
  {
    id: 3,
    title: "Captain Villa 8 – Waterfall Pool & Hill Backdrop",
    category: "views",
    categoryLabel: "Hill Views & Pools",
    img: "images/villa6.jpg"
  },
  {
    id: 4,
    title: "Nayak Villa – Classic Arched Facade & Balconies",
    category: "exteriors",
    categoryLabel: "Villa Exteriors",
    img: "images/villa2.jpg"
  },
  {
    id: 5,
    title: "Captain Villa 7 – Brick Exterior & Covered Veranda",
    category: "exteriors",
    categoryLabel: "Villa Exteriors",
    img: "images/villa5.jpg"
  },
  {
    id: 6,
    title: "Muscut House – Spacious Living Hall & Lounge",
    category: "interiors",
    categoryLabel: "Interiors",
    img: "images/villa3.jpg"
  },
  {
    id: 7,
    title: "Captain Villa 10 – Dining Area & Modular Kitchen",
    category: "interiors",
    categoryLabel: "Interiors",
    img: "images/villa7.jpg"
  }
];

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initDateConstraints();
  initNavbar();
  initBackToTop();
  initVillas();
  initGallery();
  initFaqAccordion();
  initSearchForm();
  initContactForm();
  initBookingModal();
});

/* --------------------------------------------------------------------------
   Helpers: Date Constraints & Inline Alerts
   -------------------------------------------------------------------------- */
function getTodayISO() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function initDateConstraints() {
  const today = getTodayISO();
  const allDates = document.querySelectorAll('input[type="date"]');
  allDates.forEach(input => {
    input.min = today;
  });

  const pairs = [
    ["searchCheckIn", "searchCheckOut"],
    ["modalCheckIn", "modalCheckOut"]
  ];

  pairs.forEach(([inId, outId]) => {
    const inEl = document.getElementById(inId);
    const outEl = document.getElementById(outId);
    if (!inEl || !outEl) return;

    inEl.addEventListener("change", () => {
      if (inEl.value) {
        outEl.min = inEl.value;
        if (outEl.value && outEl.value < inEl.value) {
          outEl.value = "";
        }
      } else {
        outEl.min = today;
      }
    });
  });
}

function showInlineAlert(el, message, isSuccess = false) {
  if (!el) return;
  el.classList.remove("form-alert-error", "form-alert-success", "active");
  el.classList.add(isSuccess ? "form-alert-success" : "form-alert-error", "active");
  el.innerHTML = message;
}

function hideInlineAlert(el) {
  if (!el) return;
  el.classList.remove("active", "form-alert-error", "form-alert-success");
  el.innerHTML = "";
}

function isValidIndianPhone(rawPhone) {
  const digits = rawPhone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

/* --------------------------------------------------------------------------
   Navbar & Mobile Menu
   -------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  const backdrop = document.querySelector(".drawer-backdrop");
  const closeBtn = document.querySelector(".drawer-close");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header && header.classList.add("scrolled");
    } else {
      header && header.classList.remove("scrolled");
    }
  });

  function openDrawer() {
    drawer && drawer.classList.add("active");
    backdrop && backdrop.classList.add("active");
    mobileToggle && mobileToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer && drawer.classList.remove("active");
    backdrop && backdrop.classList.remove("active");
    mobileToggle && mobileToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (mobileToggle) {
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileToggle.addEventListener("click", openDrawer);
  }
  closeBtn && closeBtn.addEventListener("click", closeDrawer);
  backdrop && backdrop.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer && drawer.classList.contains("active")) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   Back To Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* --------------------------------------------------------------------------
   Villa Card Rendering & Filtering
   -------------------------------------------------------------------------- */
function initVillas() {
  const gridContainer = document.getElementById("villasGrid");
  const featuredContainer = document.getElementById("featuredVillasGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (featuredContainer) {
    // Showcase 3 distinct properties on Home Page
    const featured = [VILLAS_DATA[0], VILLAS_DATA[3], VILLAS_DATA[2]];
    featuredContainer.innerHTML = featured.map(createVillaCardHtml).join("");
  }

  if (gridContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const initialFilter = urlParams.get("filter") || "all";

    applyVillaFilter(initialFilter, filterBtns);

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter") || "all";
        applyVillaFilter(filter, filterBtns);
      });
    });
  }
}

function applyVillaFilter(filter, filterBtns) {
  let matched = VILLAS_DATA;
  if (filter !== "all") {
    matched = VILLAS_DATA.filter(v => v.category === filter || (v.tags && v.tags.includes(filter)));
  }

  filterBtns.forEach(b => {
    const btnFilter = b.getAttribute("data-filter");
    b.classList.toggle("active", btnFilter === filter);
  });

  renderVillasList(matched);
}

function renderVillasList(list) {
  const gridContainer = document.getElementById("villasGrid");
  if (!gridContainer) return;

  if (list.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <i class="fas fa-home" style="font-size: 3rem; color: var(--accent-gold); margin-bottom: 16px;"></i>
        <h3 style="color: #fff; margin-bottom: 8px;">No villas found matching criteria</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">Contact VaishnaviStays directly for availability across all our Lonavala &amp; Khandala villas.</p>
        <a href="${WHATSAPP_BASE}?text=${encodeURIComponent("Hello VaishnaviStays, I am looking for villa options in Lonavala & Khandala")}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-whatsapp"></i> Chat on WhatsApp (${CONTACT_PHONE})
        </a>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = list.map(createVillaCardHtml).join("");
}

function createVillaCardHtml(villa) {
  const waMessage = encodeURIComponent(
    `Hello VaishnaviStays, I am interested in booking *${villa.name}* (${villa.highlight}). Please share availability and tariff details.`
  );

  return `
    <article class="villa-card" data-id="${villa.id}">
      <div class="villa-image-wrapper">
        <img src="${villa.image}" alt="${villa.name} - ${villa.tagline}" class="villa-image" loading="lazy">
        <span class="villa-badge">${villa.badge}</span>
        <span class="villa-location-tag"><i class="fas fa-map-marker-alt"></i> ${villa.location}</span>
      </div>
      <div class="villa-details">
        <div class="villa-header">
          <h3 class="villa-title">${villa.name}</h3>
          <span style="color: var(--accent-gold); font-size: 0.85rem; font-weight: 600;">${villa.highlight}</span>
        </div>
        <p class="villa-desc">${villa.tagline}</p>

        <div class="villa-specs">
          <div class="spec-item"><i class="fas fa-bed"></i> <span>${villa.specs.accommodation}</span></div>
          <div class="spec-item"><i class="fas fa-swimming-pool"></i> <span>${villa.specs.pool}</span></div>
          <div class="spec-item"><i class="fas fa-users"></i> <span>${villa.specs.idealFor}</span></div>
        </div>

        <div class="villa-amenity-tags">
          <span class="amenity-chip"><i class="fas fa-snowflake"></i> AC Rooms</span>
          <span class="amenity-chip"><i class="fas fa-swimming-pool"></i> Private Pool</span>
          <span class="amenity-chip"><i class="fas fa-glass-cheers"></i> Party Friendly</span>
          <span class="amenity-chip"><i class="fas fa-mountain"></i> Scenic Stay</span>
        </div>

        <div class="villa-footer">
          <div class="price-box">
            <span class="price-label">Direct Booking</span>
            <span class="price-amount">Best Direct Tariff</span>
          </div>
          <div class="villa-actions">
            <button type="button" class="btn btn-sm btn-outline-gold" onclick="openDetailsModal(${villa.id})">
              Details
            </button>
            <a href="${WHATSAPP_BASE}?text=${waMessage}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp">
              <i class="fab fa-whatsapp"></i> Enquire
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

/* --------------------------------------------------------------------------
   Booking & Villa Details Modal
   -------------------------------------------------------------------------- */
function initBookingModal() {
  const modal = document.getElementById("bookingModal");
  const closeBtn = document.getElementById("closeModalBtn");

  if (!modal) return;

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeBtn && closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  const modalForm = document.getElementById("modalBookingForm");
  const modalAlert = document.getElementById("modalBookingAlert");

  if (modalForm) {
    modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      hideInlineAlert(modalAlert);

      const villaName = document.getElementById("modalVillaNameInput").value || "Luxury Villa";
      const name = document.getElementById("modalGuestName").value.trim();
      const phone = document.getElementById("modalGuestPhone").value.trim();
      const checkin = document.getElementById("modalCheckIn").value;
      const checkout = document.getElementById("modalCheckOut").value;
      const guests = document.getElementById("modalGuestsCount").value;
      const note = document.getElementById("modalGuestNote").value.trim();

      if (!name) {
        showInlineAlert(modalAlert, "Please enter your full name.");
        return;
      }

      if (!isValidIndianPhone(phone)) {
        showInlineAlert(modalAlert, "Please enter a valid 10-digit mobile number.");
        return;
      }

      if (checkin && checkout && checkout <= checkin) {
        showInlineAlert(modalAlert, "Check-out date must be after the check-in date.");
        return;
      }

      const message =
`*NEW VILLA BOOKING ENQUIRY*
━━━━━━━━━━━━━━━━━━
🏡 *Villa:* ${villaName}
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📅 *Check-in:* ${checkin || "To be confirmed"}
📅 *Check-out:* ${checkout || "To be confirmed"}
👥 *Guests:* ${guests}
📝 *Notes:* ${note || "None"}
━━━━━━━━━━━━━━━━━━
Please share availability and direct booking tariff.`;

      const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");

      showInlineAlert(
        modalAlert,
        `Booking request prepared! <a href="${waUrl}" target="_blank" rel="noopener noreferrer">Click here if WhatsApp did not open automatically</a>.`,
        true
      );
      modalForm.reset();
    });
  }
}

function openDetailsModal(villaId) {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;

  const villa = VILLAS_DATA.find(v => v.id === villaId);
  if (!villa) return;

  const modalAlert = document.getElementById("modalBookingAlert");
  hideInlineAlert(modalAlert);

  document.getElementById("modalVillaTitle").textContent = villa.name;
  document.getElementById("modalVillaSubtitle").textContent = `${villa.highlight} • ${villa.location}`;
  document.getElementById("modalVillaNameInput").value = villa.name;

  const modalSpecsContainer = document.getElementById("modalVillaSpecs");
  if (modalSpecsContainer) {
    modalSpecsContainer.innerHTML = `
      <div style="background: rgba(255,255,255,0.03); padding: 14px; border-radius: 8px; margin-bottom: 18px; border: 1px solid var(--border-light);">
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 10px;">${villa.description}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${villa.amenities.map(a => `<span class="amenity-chip"><i class="fas fa-check" style="color:var(--accent-gold);"></i> ${a}</span>`).join("")}
        </div>
      </div>
    `;
  }

  const checkinInput = document.getElementById("modalCheckIn");
  if (checkinInput) {
    checkinInput.min = getTodayISO();
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* --------------------------------------------------------------------------
   Quick Search Form (Hero Banner)
   -------------------------------------------------------------------------- */
function initSearchForm() {
  const searchForm = document.getElementById("heroSearchForm");
  if (!searchForm) return;

  const searchAlert = document.getElementById("heroSearchAlert");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    hideInlineAlert(searchAlert);

    const location = document.getElementById("searchLocation").value;
    const checkin = document.getElementById("searchCheckIn").value;
    const checkout = document.getElementById("searchCheckOut").value;
    const guests = document.getElementById("searchGuests").value;

    if (checkin && checkout && checkout <= checkin) {
      showInlineAlert(searchAlert, "Check-out date must be after the check-in date.");
      return;
    }

    const message =
`*CHECK VILLA AVAILABILITY*
━━━━━━━━━━━━━━━━━━
📍 *Location:* ${location}
📅 *Dates:* ${checkin || "Flexible"} to ${checkout || "Flexible"}
👥 *Group Size:* ${guests}
━━━━━━━━━━━━━━━━━━
Looking for best available luxury private pool villas.`;

    const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  });
}

/* --------------------------------------------------------------------------
   Interactive Gallery & Lightbox (Fixed for filtered state + keyboard nav)
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
    galleryGrid.innerHTML = items.map((item, index) => `
      <div class="gallery-item" role="button" tabindex="0" aria-label="View ${item.title}" onclick="openLightbox(${index})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLightbox(${index});}">
        <img src="${item.img}" alt="${item.title}" class="gallery-img" loading="lazy">
        <div class="gallery-overlay">
          <div class="gallery-zoom-icon"><i class="fas fa-search-plus"></i></div>
          <h4 class="gallery-title">${item.title}</h4>
          <span class="gallery-category">${item.categoryLabel}</span>
        </div>
      </div>
    `).join("");
  }

  renderGallery(GALLERY_ITEMS);

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");

      if (category === "all") {
        renderGallery(GALLERY_ITEMS);
      } else {
        const filtered = GALLERY_ITEMS.filter(item => item.category === category);
        renderGallery(filtered);
      }
    });
  });

  window.openLightbox = function (index) {
    if (!lightbox || currentGalleryItems.length === 0) return;
    activeLightboxIndex = Math.max(0, Math.min(index, currentGalleryItems.length - 1));
    updateLightbox();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const item = currentGalleryItems[activeLightboxIndex];
    if (!item) return;
    lightboxImg.src = item.img;
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

  lightbox && lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
}

/* --------------------------------------------------------------------------
   FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (!question) return;

    question.setAttribute("role", "button");
    question.setAttribute("tabindex", "0");
    question.setAttribute("aria-expanded", item.classList.contains("active") ? "true" : "false");

    const toggleItem = () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach(other => {
        other.classList.remove("active");
        const otherQ = other.querySelector(".faq-question");
        otherQ && otherQ.setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
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
   Contact Us Form Handler
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById("contactPageForm");
  if (!contactForm) return;

  const errorBox = document.getElementById("contactAlertError");
  const successBox = document.getElementById("contactAlertSuccess");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    hideInlineAlert(errorBox);
    if (successBox) successBox.style.display = "none";

    const name = document.getElementById("contactName").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const villa = document.getElementById("contactVillaSelect").value;
    const checkin = document.getElementById("contactCheckIn").value;
    const guests = document.getElementById("contactGuests").value;
    const message = document.getElementById("contactMessage").value.trim();

    if (!name) {
      showInlineAlert(errorBox, "Please enter your full name.");
      document.getElementById("contactName").focus();
      return;
    }

    if (!isValidIndianPhone(phone)) {
      showInlineAlert(errorBox, "Please enter a valid 10-digit mobile number.");
      document.getElementById("contactPhone").focus();
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showInlineAlert(errorBox, "Please enter a valid email address or leave the email field blank.");
      document.getElementById("contactEmail").focus();
      return;
    }

    const formattedMessage =
`*NEW INQUIRY - VAISHNAVI STAYS*
━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${name}
📞 *Mobile:* ${phone}
📧 *Email:* ${email || "Not specified"}
🏡 *Villa Requested:* ${villa}
📅 *Check-in Date:* ${checkin || "Flexible"}
👥 *Total Guests:* ${guests}
💬 *Message:* ${message || "Interested in booking details"}
━━━━━━━━━━━━━━━━━━
Looking forward to prompt assistance.`;

    const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    if (successBox) {
      successBox.innerHTML = `✅ Your inquiry has been prepared! <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-gold); text-decoration: underline; font-weight: 600;">Click here to open WhatsApp</a> if it didn't open automatically.`;
      successBox.style.display = "block";
      successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    contactForm.reset();
  });
}
