(function () {
  var apps = document.querySelectorAll('.mb-app');
  var menus = document.querySelectorAll('.mb-menu');
  if (!apps.length) return;

  function closeAll() {
    apps.forEach(function (x) { x.setAttribute('aria-expanded', 'false'); });
    menus.forEach(function (m) { m.classList.remove('is-open'); });
  }

  apps.forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = b.getAttribute('aria-expanded') === 'true';
      closeAll();
      if (!open) {
        b.setAttribute('aria-expanded', 'true');
        var menu = document.querySelector('.mb-menu[data-for="' + b.dataset.menu + '"]');
        if (menu) menu.classList.add('is-open');
      }
    });
  });

  document.addEventListener('click', closeAll);
})();
