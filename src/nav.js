// Mobile nav toggle. Progressive enhancement: without JS the menu stays
// closed and the "Get in touch" button still works.
(function () {
  var btn = document.querySelector('.navtoggle');
  var nav = document.querySelector('.mainnav');
  if (!btn || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!nav.classList.contains('open'));
  });

  // Close when a link is chosen, on outside click, or on Escape.
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // Reset state if the viewport grows back to desktop.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 640) setOpen(false);
  });
})();
