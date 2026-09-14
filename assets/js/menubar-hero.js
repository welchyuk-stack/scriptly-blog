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

  // Live clock, styled like the real macOS menu bar ("Mon 15 Sep  09:14").
  var clock = document.querySelector('.mb-clock');
  if (clock) {
    var fmt = new Intl.DateTimeFormat(undefined, {
      weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit'
    });
    function tick() {
      var parts = fmt.formatToParts(new Date());
      var get = function (type) { var p = parts.find(function (x) { return x.type === type; }); return p ? p.value : ''; };
      clock.textContent = get('weekday') + ' ' + get('day') + ' ' + get('month') + '  ' +
        get('hour') + ':' + get('minute') + (get('dayPeriod') ? ' ' + get('dayPeriod') : '');
    }
    tick();
    setInterval(tick, 15000);
  }
})();
