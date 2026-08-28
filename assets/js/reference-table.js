/**
 * Shared vanilla-JS behavior for MacBound's data-driven reference tables:
 * live search/filter, copy-to-clipboard, favourites (localStorage), and
 * "show favourites only". No build step, no framework — works on any
 * table with the right data attributes.
 *
 * Expected markup per table:
 *   <table class="ref-table" data-storage-key="shortcuts">
 *     <tr data-search="copy ctrl+c ⌘+c" data-copy="⌘+C">...</tr>
 *
 * Optional page furniture (auto-detected if present):
 *   <input type="search" id="ref-search">
 *   <button id="ref-fav-toggle" class="btn">Show favourites only</button>
 *   <button id="ref-print" class="btn">Print / Save as PDF</button>
 *   <div class="empty-state" id="ref-empty">No matches.</div>
 */
(function () {
  "use strict";

  function safeStorage() {
    try {
      const testKey = "__macbound_test__";
      window.localStorage.setItem(testKey, "1");
      window.localStorage.removeItem(testKey);
      return window.localStorage;
    } catch (e) {
      return null;
    }
  }

  const storage = safeStorage();

  function init(table) {
    const storageKey = table.dataset.storageKey || "reference";
    const favKey = "macbound:favs:" + storageKey;
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    const searchInput = document.getElementById("ref-search");
    const favToggle = document.getElementById("ref-fav-toggle");
    const printBtn = document.getElementById("ref-print");
    const emptyState = document.getElementById("ref-empty");

    let favourites = new Set();
    if (storage) {
      try {
        favourites = new Set(JSON.parse(storage.getItem(favKey) || "[]"));
      } catch (e) {
        favourites = new Set();
      }
    }

    let favOnly = false;
    let query = "";

    function rowId(row, index) {
      return row.dataset.id || String(index);
    }

    function persistFavourites() {
      if (!storage) return;
      storage.setItem(favKey, JSON.stringify(Array.from(favourites)));
    }

    function applyFilters() {
      let visibleCount = 0;
      rows.forEach((row, i) => {
        const id = rowId(row, i);
        const haystack = (row.dataset.search || row.textContent).toLowerCase();
        const matchesQuery = !query || haystack.includes(query);
        const matchesFav = !favOnly || favourites.has(id);
        const visible = matchesQuery && matchesFav;
        row.classList.toggle("is-hidden", !visible);
        if (visible) visibleCount++;
      });
      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? "block" : "none";
      }
    }

    // Wire up favourite stars, if present
    rows.forEach((row, i) => {
      const id = rowId(row, i);
      const btn = row.querySelector(".fav-btn");
      if (!btn) return;
      if (!storage) {
        btn.style.display = "none";
        return;
      }
      const setState = () => {
        const active = favourites.has(id);
        btn.classList.toggle("is-fav", active);
        btn.textContent = active ? "★" : "☆";
        btn.setAttribute("aria-pressed", String(active));
      };
      setState();
      btn.addEventListener("click", () => {
        if (favourites.has(id)) {
          favourites.delete(id);
        } else {
          favourites.add(id);
        }
        persistFavourites();
        setState();
        if (favOnly) applyFilters();
        if (favToggle) favToggle.style.display = favourites.size ? "" : (favOnly ? "" : "none");
      });
    });

    // Wire up copy buttons, if present
    table.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const text = btn.dataset.copy || "";
        if (!text) return;
        const done = () => {
          const original = btn.textContent;
          btn.textContent = "Copied";
          btn.classList.add("is-copied");
          setTimeout(() => {
            btn.textContent = original;
            btn.classList.remove("is-copied");
          }, 1200);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done).catch(() => {});
        }
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        query = searchInput.value.trim().toLowerCase();
        applyFilters();
      });
    }

    if (favToggle) {
      // Hide the toggle until there's at least one favourite, so it's not
      // dead UI on a first visit.
      favToggle.style.display = favourites.size ? "" : "none";
      favToggle.addEventListener("click", () => {
        favOnly = !favOnly;
        favToggle.classList.toggle("is-active", favOnly);
        favToggle.textContent = favOnly ? "Showing favourites only" : "Show favourites only";
        applyFilters();
      });
    }

    if (printBtn) {
      printBtn.addEventListener("click", () => window.print());
    }

    applyFilters();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("table.ref-table[data-storage-key]").forEach(init);
  });
})();
