(function () {
  'use strict';
  var root = document.documentElement;
  var preference = null;
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  var toggle;

  try {
    var saved = localStorage.getItem('mfmp-personal-theme');
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch (error) {
    // El selector también funciona cuando el almacenamiento está bloqueado.
  }

  function apply(theme) {
    root.dataset.theme = theme;
    var dark = theme === 'dark';
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#2E4052' : '#FFFFFF');
    if (toggle) {
      toggle.textContent = dark ? 'Modo claro' : 'Modo oscuro';
      toggle.setAttribute('aria-label', dark ? 'Activar modo claro' : 'Activar modo oscuro');
    }
  }

  apply(preference || (system.matches ? 'dark' : 'light'));

  document.addEventListener('DOMContentLoaded', function () {
    toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    toggle.hidden = false;
    apply(root.dataset.theme);
    toggle.addEventListener('click', function () {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(preference);
      try {
        localStorage.setItem('mfmp-personal-theme', preference);
      } catch (error) {
        // Conserva la elección durante esta sesión.
      }
    });
  });

  system.addEventListener('change', function (event) {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  });
}());
