(function () {
  var dropdown = document.getElementById('apps-dropdown');
  var trigger = document.getElementById('apps-dropdown-trigger');
  if (!dropdown || !trigger) return;

  function close() {
    dropdown.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
  }
  function toggle() {
    var open = dropdown.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(open));
  }

  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    toggle();
  });
  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
