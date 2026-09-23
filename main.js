// Lightbox for AI Mockups — click a tile to see it larger,
// right inside the page (no new tab, no leaving the site).
document.addEventListener('DOMContentLoaded', function () {
  var triggers = document.querySelectorAll('.lightbox-trigger');
  if (!triggers.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
    '<img class="lightbox-img" alt="">';
  document.body.appendChild(overlay);

  var img = overlay.querySelector('.lightbox-img');
  var closeBtn = overlay.querySelector('.lightbox-close');

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  triggers.forEach(function (t) {
    t.style.cursor = 'zoom-in';
    t.addEventListener('click', function () {
      open(t.getAttribute('src'), t.getAttribute('alt'));
    });
  });

  overlay.addEventListener('click', close);
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
});
