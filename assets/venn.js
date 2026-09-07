(function () {
  'use strict';
  var diagram = document.querySelector('.venn');
  var circles = Array.from(diagram.querySelectorAll('[data-area]'));
  var title = document.getElementById('area-title');
  var description = document.getElementById('area-description');
  var link = document.getElementById('area-link');
  var status = document.getElementById('area-status');
  var reset = document.querySelector('.venn-reset');
  var selected = null;
  var content = {
    teaching: ['Docencia', 'Cursos, materiales y recursos para acompañar el aprendizaje.'],
    salesforce: ['Salesforce', 'Un espacio para compartir proyectos, aprendizajes y recursos del ecosistema Salesforce.'],
    other: ['Otros', 'Ideas, intereses y proyectos que van encontrando su propio lugar.']
  };
  function show(area) {
    circles.forEach(function (circle) {
      circle.dataset.active = String(circle.dataset.area === area);
      circle.classList.toggle('active', circle.dataset.area === selected);
      circle.setAttribute('aria-pressed', String(circle.dataset.area === selected));
    });
    title.textContent = area ? content[area][0] : 'Todo se conecta.';
    description.textContent = area ? content[area][1] : '';
    description.hidden = !area;
    link.hidden = area !== 'teaching';
    status.hidden = !area || area === 'teaching';
    reset.hidden = !selected;
  }
  circles.forEach(function (circle) {
    circle.addEventListener('pointerenter', function (event) {
      if (event.pointerType !== 'touch') show(circle.dataset.area);
    });
    circle.addEventListener('focus', function () { show(circle.dataset.area); });
    circle.addEventListener('click', function () {
      selected = circle.dataset.area;
      show(selected);
    });
  });
  diagram.addEventListener('pointerleave', function () {
    var focused = circles.find(function (circle) { return circle === document.activeElement; });
    show(selected || (focused && focused.dataset.area));
  });
  diagram.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') { selected = null; show(null); }
  });
  reset.addEventListener('click', function () {
    selected = null;
    circles[0].focus();
    show(null);
  });
  show(null);
}());
