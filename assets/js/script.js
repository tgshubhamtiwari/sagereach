// Combined Mobile Menu + Smooth Scroll - Replace your current script.js code

document.addEventListener("DOMContentLoaded", function () {
  // ========================================
  // MOBILE MENU FUNCTIONALITY
  // ========================================

  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  // Function to open menu
  function openMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove("hidden");
    }
    // Change hamburger to X icon
    if (mobileMenuButton) {
      mobileMenuButton.innerHTML = `
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      `;
    }
  }

  // Function to close menu
  function closeMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
    // Change X back to hamburger icon
    if (mobileMenuButton) {
      mobileMenuButton.innerHTML = `
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      `;
    }
  }

  // Toggle mobile menu when button is clicked
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (mobileMenu && mobileMenu.classList.contains("hidden")) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (mobileMenu && mobileMenuButton) {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickOnButton = mobileMenuButton.contains(event.target);

      if (
        !isClickInsideMenu &&
        !isClickOnButton &&
        !mobileMenu.classList.contains("hidden")
      ) {
        closeMobileMenu();
      }
    }
  });

  // Close mobile menu on window resize (if viewport becomes desktop size)
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      // lg breakpoint
      closeMobileMenu();
    }
  });

  // ========================================
  // SMOOTH SCROLL WITH HEADER OFFSET
  // ========================================

  // Get the header height
  const header = document.querySelector("header");
  const headerHeight = header ? header.offsetHeight : 64;
  const extraOffset = 20;
  const totalOffset = headerHeight + extraOffset;

  // Get all anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's just "#"
      if (!href || href === "#") {
        return;
      }

      // Get the target section
      const targetSection = document.querySelector(href);

      if (targetSection) {
        e.preventDefault();

        // Close mobile menu first
        closeMobileMenu();

        // Calculate position accounting for fixed header
        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset -
          totalOffset;

        // Smooth scroll to position
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    });
  });

  // Handle direct URL hash on page load
  if (window.location.hash) {
    setTimeout(function () {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - totalOffset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  }
});

// Wait for DOM to be fully loaded before running any code
document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript file is loaded and working!");

  // Mobile Menu Toggle
  // const mobileMenuButton = document.getElementById("mobile-menu-button");
  // const mobileMenu = document.getElementById("mobile-menu");

  // if (mobileMenuButton && mobileMenu) {
  //   mobileMenuButton.addEventListener("click", () => {
  //     mobileMenu.classList.toggle("hidden");
  //   });
  // }

  // Modal Data
  const modalData = {
    modal1: {
      title: "Fashion Brand Campaign",
      image: "https://placehold.co/600x600/07b9d5/white?text=Portfolio+1",
      views: "+4.2x ROAS",
      category: "Ads",
      description:
        "A stunning fashion shoot that highlights the latest trends and styles.",
    },
    modal2: {
      title: "Minimalist Logo Suite",
      image: "https://placehold.co/600x600/ffffff/07b9d5?text=Logo+Design",
      views: "3 concepts",
      category: "Logos",
      description: "A modern and sleek logo design for a tech startup.",
    },
    modal3: {
      title: "Instagram Reels Series",
      image: "https://placehold.co/600x600/ff6b6b/ffffff?text=Instagram+Reels",
      views: "2M+ views",
      category: "Video",
      description:
        "This project showcases our expertise in video, delivering exceptional results for our clients. Click to view the full case study and explore more details.",
    },
    modal4: {
      title: "Summer Sale Ad",
      image: "https://placehold.co/600x600/4ecdc4/ffffff?text=Social+Ad",
      views: "+3.8x ROAS",
      category: "Ads",
      description:
        "A dynamic social media ad campaign for a summer sale event.",
    },
    modal5: {
      title: "Product Launch",
      image: "https://placehold.co/600x600/ff6b6b/ffffff?text=Product+Photo",
      views: "1.5M+ views",
      category: "Design",
      description: "High-quality product photography for a new product launch.",
    },
    modal6: {
      title: "Brand Identity",
      image: "https://placehold.co/600x600/4ecdc4/ffffff?text=Brand+Identity",
      views: "2.5M+ views",
      category: "Design",
      description:
        "A comprehensive brand identity package including logo, colors, and typography.",
    },
    modal7: {
      title: "App Icon Set",
      image: "https://placehold.co/600x600/ffffff/07b9d5?text=App+Icon",
      views: "3 concepts",
      category: "Logos",
      description:
        "A set of custom app icons designed for a mobile application.",
    },
    modal8: {
      title: "Event Promo",
      image: "https://placehold.co/600x600/ff6b6b/ffffff?text=Event+Promo",
      views: "1.7M+ views",
      category: "Ads",
      description:
        "An engaging event promotion campaign across multiple platforms.",
    },
    modal9: {
      title: "Social Post Series",
      image: "https://placehold.co/600x600/4ecdc4/ffffff?text=Social+Post",
      views: "2.1M+ views",
      category: "Design",
      description:
        "A series of social media posts designed to increase engagement and brand awareness.",
    },
  };

  // Modal Functions
  window.openModal = function (id) {
    const data = modalData[id];
    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-image").src = data.image;
    document.getElementById("modal-views").textContent = data.views;
    document.getElementById("modal-category").textContent = data.category;
    document.getElementById("modal-description").textContent = data.description;
    document.getElementById("portfolio-modal").classList.remove("hidden");
  };

  window.closeModal = function () {
    document.getElementById("portfolio-modal").classList.add("hidden");
  };

  // Close modal when clicking outside
  const portfolioModal = document.getElementById("portfolio-modal");
  if (portfolioModal) {
    portfolioModal.addEventListener("click", function (e) {
      if (e.target === this) {
        closeModal();
      }
    });
  }

  // Filter Functionality
  function filterPortfolio(filter) {
    const cards = document.querySelectorAll("#portfolio-grid > div");
    cards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Add click event listeners to filter buttons
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.remove("bg-primary", "text-white");
        btn.classList.add(
          "bg-white",
          "text-gray-700",
          "border",
          "border-gray-300"
        );
      });

      // Add active class to clicked button
      button.classList.remove(
        "bg-white",
        "text-gray-700",
        "border",
        "border-gray-300"
      );
      button.classList.add("bg-primary", "text-white");

      // Filter the portfolio
      filterPortfolio(button.dataset.filter);
    });
  });

  // Mobile Responsive Filter Tabs
  if (window.innerWidth < 768) {
    const filterContainer = document.querySelector("#filter-tabs");
    if (filterContainer) {
      const filterButtons = Array.from(
        document.querySelectorAll(".filter-btn")
      );
      const dropdown = document.createElement("select");
      dropdown.className = "block w-full p-2 border border-gray-300 rounded-md";

      filterButtons.forEach((button) => {
        const option = document.createElement("option");
        option.value = button.dataset.filter;
        option.textContent = button.textContent;
        if (button.dataset.filter === "all") {
          option.selected = true;
        }
        dropdown.appendChild(option);
      });

      filterContainer.innerHTML = "";
      filterContainer.appendChild(dropdown);

      dropdown.addEventListener("change", () => {
        const selectedFilter = dropdown.value;
        filterPortfolio(selectedFilter);
      });
    }
  }

  // Testimonial Data
  const testimonials = [
    {
      quote:
        "We started with a 6-week pilot, and within the first month our ads began performing much better. The reports were clear and easy to understand. They focused on results, not fancy words. Working with them felt like having a real partner, not just another agency.",
      name: "Priya Sengar",
      title: "Founder, Anns Bakery",
      avatar: "PS",
    },
    {
      quote:
        "Every call was focused on strategy and real numbers. They helped us stop wasting money on poor ads and create content that actually sold. In just six weeks, our customer acquisition cost went down by 20%.",
      name: "Aarav Mehta",
      title: "Marketing Head, Atmah Store.",
      avatar: "AM",
    },
    {
      quote:
        "We didn't want a big agency that forgets small brands. Since the founder worked directly with us, communication was easy and fast. They understood our goals and delivered results faster than expected.",
      name: "Sandeep Krishna",
      title: "CEO, Nirava Ayurveda",
      avatar: "SK",
    },
  ];

  let currentTestimonial = 0;

  // Function to render a single testimonial item
  function renderTestimonial(testimonial) {
    return `
      <p class="text-lg text-gray-600 mb-8">
        "${testimonial.quote}"
      </p>
      <div class="flex flex-col items-center">
        <div class="bg-white border-2 border-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <span class="text-primary font-bold">${testimonial.avatar}</span>
        </div>
        <h3 class="text-lg font-bold text-gray-900 mb-1">${testimonial.name}</h3>
        <p class="text-sm text-gray-500">${testimonial.title}</p>
      </div>
    `;
  }

  // Function to show the current testimonial
  function showTestimonial(index) {
    const contentContainer = document.getElementById("testimonial-content");
    if (contentContainer) {
      contentContainer.innerHTML = renderTestimonial(testimonials[index]);
    }

    // Update pagination dots
    document.querySelectorAll("#pagination-dots > div").forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove("bg-gray-300");
        dot.classList.add("bg-primary");
      } else {
        dot.classList.remove("bg-primary");
        dot.classList.add("bg-gray-300");
      }
    });
  }

  // Generate Pagination Dots Dynamically
  function generatePaginationDots() {
    const dotsContainer = document.getElementById("pagination-dots");
    if (dotsContainer) {
      dotsContainer.innerHTML = "";
      testimonials.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.className = "w-6 h-2 rounded-full cursor-pointer";
        if (index === 0) {
          dot.classList.add("bg-primary");
        } else {
          dot.classList.add("bg-gray-300");
        }
        dot.addEventListener("click", () => {
          currentTestimonial = index;
          showTestimonial(currentTestimonial);
        });
        dotsContainer.appendChild(dot);
      });
    }
  }

  // Next Button
  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    });
  }

  // Previous Button
  const prevBtn = document.getElementById("prev-btn");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentTestimonial =
        (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
    });
  }

  // Initialize testimonials
  generatePaginationDots();
  showTestimonial(currentTestimonial);

  // Dropdown Functionality for Monthly Ad Budget
  const budgetButton = document.getElementById("budget-button");
  const budgetDropdown = document.getElementById("budget-dropdown");
  const budgetSelected = document.getElementById("budget-selected");

  let selectedValue = null;

  if (budgetButton && budgetDropdown) {
    budgetButton.addEventListener("click", () => {
      budgetDropdown.classList.toggle("hidden");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !budgetButton.contains(e.target) &&
        !budgetDropdown.contains(e.target)
      ) {
        budgetDropdown.classList.add("hidden");
      }
    });

    // Handle selection
    document.querySelectorAll("#budget-dropdown li").forEach((item) => {
      item.addEventListener("click", () => {
        const value = item.getAttribute("data-value");
        const text = item.textContent;
        selectedValue = value;

        // Update button text
        if (budgetSelected) {
          budgetSelected.textContent = text;
        }

        budgetDropdown.classList.add("hidden");
      });
    });
  }
});

// Handle both main form and popup form submission
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("sr-contactPopup");
  const openPopupBtn = document.getElementById("sr-openPopup");
  const closePopupBtn = document.getElementById("sr-closePopup");

  // ===== POPUP CONTROLS =====
  if (openPopupBtn) {
    openPopupBtn.addEventListener("click", function (e) {
      e.preventDefault();
      popup.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (closePopupBtn) {
    closePopupBtn.addEventListener("click", function () {
      popup.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // Close popup when clicking outside
  if (popup) {
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        popup.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // Close popup on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popup && popup.classList.contains("active")) {
      popup.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // ===== MAIN CONTACT FORM =====
  const mainForm = document.querySelector(
    'form[name="submit-to-google-sheet"]'
  );
  if (mainForm) {
    mainForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = mainForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Simulate form submission (replace with actual Google Sheets logic)
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        window.location.href = "thank-you.html";
      }, 1000);
    });
  }

  // ===== POPUP CONTACT FORM =====
  const popupForm = document.querySelector(
    'form[name="submit-to-google-sheet-popup"]'
  );
  if (popupForm) {
    popupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = popupForm.querySelector("#sr-submitBtn");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Simulate form submission (replace with actual Google Sheets logic)
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Close popup
        popup.classList.remove("active");
        document.body.style.overflow = "";

        // Redirect to thank you page
        window.location.href = "thank-you.html";
      }, 1000);
    });
  }
});

// exit pop form redirection
// Handle exit popup form submission
document.addEventListener("DOMContentLoaded", function () {
  const exitPopup = document.getElementById("exitPopup");
  const exitCloseBtn = document.getElementById("exitCloseBtn");
  const exitPopupForm = document.forms["exit-popup-form"];

  // ===== EXIT POPUP CONTROLS =====
  if (exitCloseBtn) {
    exitCloseBtn.addEventListener("click", function () {
      exitPopup.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // Close popup when clicking outside
  if (exitPopup) {
    exitPopup.addEventListener("click", function (e) {
      if (e.target === exitPopup) {
        exitPopup.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // Close popup on Escape key
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      exitPopup &&
      exitPopup.classList.contains("active")
    ) {
      exitPopup.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // ===== EXIT POPUP FORM SUBMISSION =====
  if (exitPopupForm) {
    const exitScriptURL =
      "https://script.google.com/macros/s/AKfycbyV1GmCoXQTHDpSk2SzOV2U1NBm26g52tjniVlItnuiTlZFXEYZhRXdudx_DkThKbARqw/exec";

    exitPopupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = exitPopupForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Submit to Google Sheets
      fetch(exitScriptURL, {
        method: "POST",
        body: new FormData(exitPopupForm),
      })
        .then((response) => {
          console.log("Success!", response);

          // Close popup
          exitPopup.classList.remove("active");
          document.body.style.overflow = "";

          // Redirect to thank you page
          window.location.href = "thank-you.html";
        })
        .catch((error) => {
          console.error("Error!", error.message);
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          alert("Something went wrong. Please try again.");
        });
    });
  }
});

// Exit Intent Popup JavaScript - Add to your script.js or create new file

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const exitPopup = document.getElementById("exitPopup");
  const exitCloseBtn = document.getElementById("exitCloseBtn");
  const exitPopupForm = document.getElementById("exitPopupForm");
  const startProjectBtns = document.querySelectorAll('[href="#fp"]');

  // Track popup display
  let exitIntentShown = false;
  let buttonClickShown = false;

  // Show popup function
  function showExitPopup() {
    exitPopup.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }

  // Close popup function
  function closeExitPopup() {
    exitPopup.classList.remove("active");
    document.body.style.overflow = ""; // Restore scroll
  }

  // Exit intent detection - mouse leaving from top
  document.addEventListener("mouseout", function (e) {
    // Check if mouse is leaving the document from the top
    if (!e.toElement && !e.relatedTarget && !exitIntentShown) {
      showExitPopup();
      exitIntentShown = true;
    }
  });

  // Alternative exit detection for better browser support
  document.addEventListener("mouseleave", function (e) {
    if (e.clientY <= 10 && !exitIntentShown) {
      showExitPopup();
      exitIntentShown = true;
    }
  });

  // Button click trigger - look for "Start a Project" buttons
  startProjectBtns.forEach(function (btn) {
    const btnText = btn.textContent.trim().toLowerCase();
    if (
      btnText.includes("let's get started") ||
      btnText.includes("let's get started")
    ) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        showExitPopup();
        buttonClickShown = true;
      });
    }
  });

  // Close button click
  if (exitCloseBtn) {
    exitCloseBtn.addEventListener("click", closeExitPopup);
  }

  // Close when clicking outside popup
  exitPopup.addEventListener("click", function (e) {
    if (e.target === exitPopup) {
      closeExitPopup();
    }
  });

  // Prevent closing when clicking inside popup content
  const exitPopupContent = document.querySelector(".exit-popup-content");
  if (exitPopupContent) {
    exitPopupContent.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // Form submission handler
  if (exitPopupForm) {
    exitPopupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById("exit-name").value,
        email: document.getElementById("exit-email").value,
        social: document.getElementById("exit-social").value,
        website: document.getElementById("exit-website").value,
      };

      console.log("Exit popup form submitted:", formData);

      // Google Sheets integration (if you have it)
      const scriptURL = "YOUR_GOOGLE_SHEETS_SCRIPT_URL_HERE";

      fetch(scriptURL, {
        method: "POST",
        body: new FormData(exitPopupForm),
      })
        .then((response) => {
          console.log("Success!", response);
          exitPopupForm.reset();
          closeExitPopup();
        })
        .catch((error) => {
          console.error("Error!", error.message);
          // Still show success message even if script fails
          exitPopupForm.reset();
          closeExitPopup();
        });
    });
  }

  // Keyboard ESC key to close
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && exitPopup.classList.contains("active")) {
      closeExitPopup();
    }
  });
}); // End of DOMContentLoaded
