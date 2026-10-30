/* =========================================================
   Miatoll Family — main.js (v3)
   Navbar · Dropdown · Mobile menu · Slideshow · Search · Filter
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
    });
  }

  /* ---------- Navbar scroll state ---------- */
  var navbar = doc.getElementById("navbar");

  function onScroll() {
    var y = window.scrollY || 0;
    if (navbar) navbar.classList.toggle("is-scrolled", y > 8);
    if (toTop) toTop.classList.toggle("is-visible", y > 480);
  }
  var toTop = doc.getElementById("toTop");
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Dropdown menus ---------- */
  var drops = Array.prototype.slice.call(doc.querySelectorAll("[data-drop]"));

  function closeAllDrops(except) {
    drops.forEach(function (d) {
      if (d === except) return;
      d.classList.remove("is-open");
      var btn = d.querySelector(".nav-drop-btn");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  }

  drops.forEach(function (drop) {
    var btn = drop.querySelector(".nav-drop-btn");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = !drop.classList.contains("is-open");
      closeAllDrops(drop);
      drop.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  doc.addEventListener("click", function () {
    closeAllDrops(null);
  });

  doc.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllDrops(null);
      closeMobile();
    }
  });

  /* ---------- Mobile menu ---------- */
  var menuBtn = doc.getElementById("menuBtn");
  var mobileMenu = doc.getElementById("mobileMenu");

  function closeMobile() {
    if (!mobileMenu || !menuBtn) return;
    mobileMenu.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = mobileMenu.hidden;
      mobileMenu.hidden = !open;
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) closeAllDrops(null);
    });
  }

  /* ---------- Slideshow (hero — fade in/out) ---------- */
  var stage = doc.querySelector("[data-slideshow]");
  if (stage) {
    var slides = Array.prototype.slice.call(stage.querySelectorAll(".slide"));
    var dots = Array.prototype.slice.call(stage.querySelectorAll(".stage-dots button"));
    var current = 0;
    var timer = null;
    var DELAY = 4800;

    function goTo(i) {
      if (!slides.length) return;
      current = ((i % slides.length) + slides.length) % slides.length;
      slides.forEach(function (s, idx) {
        s.classList.toggle("is-active", idx === current);
      });
      dots.forEach(function (d, idx) {
        d.classList.toggle("is-active", idx === current);
        d.setAttribute("aria-selected", idx === current ? "true" : "false");
      });
    }

    function play() {
      stop();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timer = setInterval(function () {
        goTo(current + 1);
      }, DELAY);
    }

    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    dots.forEach(function (d, i) {
      d.addEventListener("click", function () {
        goTo(i);
        play();
      });
    });

    stage.addEventListener("mouseenter", stop);
    stage.addEventListener("mouseleave", play);
    stage.addEventListener("focusin", stop);
    stage.addEventListener("focusout", play);
    doc.addEventListener("visibilitychange", function () {
      if (doc.hidden) stop();
      else play();
    });

    goTo(0);
    play();
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
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Home search ---------- */
  var homeSearch = doc.getElementById("homeSearch");
  var searchResults = doc.getElementById("homeSearchResults");
  var MF_INDEX = window.MF_INDEX || [];
  var srActive = -1;

  function renderResults(q) {
    if (!searchResults) return;
    q = (q || "").trim().toLowerCase();
    if (!q) {
      searchResults.hidden = true;
      searchResults.innerHTML = "";
      srActive = -1;
      return;
    }
    var hits = MF_INDEX.filter(function (it) {
      return (it.t + " " + it.c + " " + it.v + " " + it.a).toLowerCase().indexOf(q) !== -1;
    }).slice(0, 7);

    if (!hits.length) {
      searchResults.innerHTML = '<p class="sr-empty">Tidak ada hasil untuk "' + q.replace(/</g, "&lt;") + '"</p>';
      searchResults.hidden = false;
      srActive = -1;
      return;
    }

    searchResults.innerHTML = hits
      .map(function (it, i) {
        return (
          '<a class="sr-item' +
          (i === srActive ? " is-active" : "") +
          '" href="' +
          it.p +
          '" role="option">' +
          '<span class="sr-cat">' +
          it.c +
          "</span>" +
          '<span class="sr-title">' +
          it.t.replace(/</g, "&lt;") +
          "</span>" +
          '<span class="sr-ver">A' +
          it.a +
          "</span>" +
          "</a>"
        );
      })
      .join("");
    searchResults.hidden = false;
  }

  if (homeSearch) {
    homeSearch.addEventListener("input", function () {
      srActive = -1;
      renderResults(homeSearch.value);
    });
    homeSearch.addEventListener("keydown", function (e) {
      var items = searchResults ? searchResults.querySelectorAll(".sr-item") : [];
      if (e.key === "ArrowDown" && items.length) {
        e.preventDefault();
        srActive = Math.min(srActive + 1, items.length - 1);
        renderResults(homeSearch.value);
      } else if (e.key === "ArrowUp" && items.length) {
        e.preventDefault();
        srActive = Math.max(srActive - 1, 0);
        renderResults(homeSearch.value);
      } else if (e.key === "Enter") {
        if (srActive >= 0 && items[srActive]) {
          window.location.href = items[srActive].getAttribute("href");
        } else if (homeSearch.value.trim()) {
          window.location.href = "/rom?q=" + encodeURIComponent(homeSearch.value.trim());
        }
      } else if (e.key === "Escape") {
        renderResults("");
        homeSearch.blur();
      }
    });
    doc.addEventListener("click", function (e) {
      if (searchResults && !e.target.closest("[data-home-search]")) renderResults("");
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
    var active = {};

    function applyFilter() {
      var q = (searchInput && searchInput.value ? searchInput.value : "").trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (card) {
        var ok = true;
        Object.keys(active).forEach(function (group) {
          var val = active[group];
          if (!val) return;
          var attr = card.getAttribute("data-" + group) || "";
          if (attr.split(/\s+/).indexOf(val) === -1) ok = false;
        });
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
      if (!chip) return;
      var group = chip.getAttribute("data-filter");
      active[group] = chip.getAttribute("data-value") || "";
      filterRoot.querySelectorAll('.chip[data-filter="' + group + '"]').forEach(function (c) {
        c.classList.toggle("is-active", c === chip);
      });
      applyFilter();
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
      var timerF;
      searchInput.addEventListener("input", function () {
        clearTimeout(timerF);
        timerF = setTimeout(applyFilter, 100);
      });
      try {
        var qParam = new URLSearchParams(window.location.search).get("q");
        if (qParam) {
          searchInput.value = qParam;
          applyFilter();
        }
      } catch (e) {}
    }
  }

  /* ---------- FAQ: satu terbuka per list ---------- */
  doc.querySelectorAll(".faq-list").forEach(function (listEl) {
    listEl.addEventListener(
      "toggle",
      function (e) {
        var target = e.target;
        if (target.tagName !== "DETAILS" || !target.open) return;
        listEl.querySelectorAll("details.faq-item").forEach(function (d) {
          if (d !== target) d.open = false;
        });
      },
      true
    );
  });
})();
