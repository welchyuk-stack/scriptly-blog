// Section filter for /blog/. Lives in its own file because the site CSP
// (script-src 'self') blocks inline scripts.
(function () {
  var buttons = document.querySelectorAll('[data-blog-filter]');
  var items = document.querySelectorAll('#blog-list [data-section]');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
      var filter = btn.dataset.blogFilter;
      items.forEach(function (item) {
        item.style.display = (filter === 'all' || item.dataset.section === filter) ? '' : 'none';
      });
    });
  });
})();
