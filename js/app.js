// Inicio de mi código
$(document).ready(function() {
  // Inicializando una variable
  var target = 0;
  // Elementos
  var $buttons = $('.control');
  var $previous = $('.previous');
  var $next = $('.next');
  // Eventos
  // Evento de los botones
  $buttons.click(function() {
    target = parseInt($(this).data('target'));
    showImage(target);
  });
  // Evento para mostrar la imagen previa
  $previous.click(function(event) {
    event.preventDefault();
    target = target - 1;
    target = (target < 0) ? 8 : target;
    showImage(target);
  });
  // Evento para mostrar la siguiente imagen
  $next.click(function(event) {
    event.preventDefault();
    target = target + 1;
    target = (target > 8) ? 0 : target;
    showImage(target);
  });
  // Función que muestra la imagen deseada 
  var showImage = function(target) {
    var $lastSlide = $('div.active');
    var $slide = $('div[data-slide="' + target + '"]');
    $lastSlide.removeClass('active');
    $slide.addClass('active');
  };
});
