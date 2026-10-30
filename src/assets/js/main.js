/* =========================================================
   Miatoll Family — main.js
   Theme · Sidebar · Reveal · Counters · Filter · Utilities
   ========================================================= */
(function () {
  "use strict";

  var doc = document;
  var root = doc.documentElement;

  /* ---------- Theme toggle ---------- */
  var themeBtn = doc.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("mf-theme", next);
      } catch (e) {}
      themeBtn.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(0.82) rotate(-12deg)" },
          { transform: "scale(1.06) rotate(6deg)" },
          { transform: "scale(1)" }
        ],
        { duration: 420, easing: "cubic-bezier(0.34, 1.4, 0.44, 1)" }
      );
    });
  }

  /* ---------- Mobile sidebar ---------- */
  var sidebar = doc.getElementById("sidebar");
  var menuBtn = doc.getElementById("menuBtn");
  var backdrop = doc.getElementById("backdrop");

  function setSidebar(open) {
    if (!sidebar) return;
    sidebar.classList.toggle("is-open", open);
    if (backdrop) backdrop.hidden = !open;
    if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    doc.body.style.overflow = open ? "hidden" : "";
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setSidebar(!sidebar.classList.contains("is-open"));
    });
  }
  if (backdrop) {
    backdrop.addEventListener("click", function () {
      setSidebar(false);
    });
  }
  doc.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setSidebar(false);
  });
  if (sidebar) {
    sidebar.addEventListener("click", function (e) {
      var a = e.target.closest("a");
      if (a && window.matchMedia("(max-width: 960px)").matches) setSidebar(false);
    });
  }

  /* ---------- Sidebar hover glow follows cursor ---------- */
  doc.querySelectorAll(".nav-item").forEach(function (item) {
    item.addEventListener("pointermove", function (e) {
      var r = item.getBoundingClientRect();
      item.style.setProperty("--mx", e.clientX - r.left + "px");
      item.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });

  /* ---------- Topbar scroll state + back-to-top ---------- */
  var topbar = doc.getElementById("topbar");
  var toTop = doc.getElementById("toTop");

  function onScroll() {
    var y = window.scrollY || 0;
    if (topbar) topbar.classList.toggle("is-scrolled", y > 12);
    if (toTop) toTop.classList.toggle("is-visible", y > 520);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = doc.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Animated counters ---------- */
  var counters = doc.querySelectorAll("[data-count]");
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var dur = 1300;
    var start = performance.now();
    function frame(now) {
      var t = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = target;
    }
    requestAnimationFrame(frame);
  }
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) {
      cio.observe(el);
    });
  } else {
    counters.forEach(function (el) {
      el.textContent = el.getAttribute("data-count");
    });
  }

  /* ---------- Filter (chips + search) ---------- */
  var filterRoot = doc.querySelector("[data-filter-root]");
  if (filterRoot) {
    var list = doc.querySelector("[data-filter-list]");
    var cards = list ? Array.prototype.slice.call(list.querySelectorAll(".dl-card")) : [];
    var searchInput = filterRoot.querySelector("[data-filter-search]");
    var countEl = filterRoot.querySelector("[data-filter-count]");
    var emptyEl = doc.querySelector("[data-filter-empty]");
    var resetBtn = filterRoot.querySelector("[data-filter-reset]");
    var active = {}; // group -> value ("" = all)

    function applyFilter() {
      var q = (searchInput && searchInput.value ? searchInput.value : "").trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (card) {
        var ok = true;
        // chip groups (AND between groups, OR-less: single value per group)
        Object.keys(active).forEach(function (group) {
          var val = active[group];
          if (!val) return;
          var attr = card.getAttribute("data-" + group) || "";
          var values = attr.split(/\s+/);
          if (values.indexOf(val) === -1) ok = false;
        });
        // search
        if (ok && q) {
          var hay = card.getAttribute("data-search") || card.textContent.toLowerCase();
          if (hay.indexOf(q) === -1) ok = false;
        }
        card.classList.toggle("is-hidden", !ok);
        if (ok) shown++;
      });
      if (countEl) countEl.textContent = shown;
      if (emptyEl) emptyEl.hidden = shown !== 0;
    }

    filterRoot.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip[data-filter]");
      if (chip) {
        var group = chip.getAttribute("data-filter");
        var value = chip.getAttribute("data-value") || "";
        active[group] = value;
        filterRoot
          .querySelectorAll('.chip[data-filter="' + group + '"]')
          .forEach(function (c) {
            c.classList.toggle("is-active", c === chip);
          });
        applyFilter();
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        active = {};
        if (searchInput) searchInput.value = "";
        filterRoot.querySelectorAll(".chip[data-filter]").forEach(function (c) {
          c.classList.toggle("is-active", (c.getAttribute("data-value") || "") === "");
        });
        applyFilter();
      });
    }

    if (searchInput) {
      var timer;
      searchInput.addEventListener("input", function () {
        clearTimeout(timer);
        timer = setTimeout(applyFilter, 120);
      });
    }
  }

  /* ---------- FAQ: only one open per list (optional polish) ---------- */
  doc.querySelectorAll(".faq-list").forEach(function (listEl) {
    listEl.addEventListener("toggle", function (e) {
      var target = e.target;
      if (target.tagName !== "DETAILS" || !target.open) return;
      listEl.querySelectorAll("details.faq-item").forEach(function (d) {
        if (d !== target) d.open = false;
      });
    }, true);
  });

  /* ---------- Footer year safety ---------- */
  var yr = doc.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();
})();
