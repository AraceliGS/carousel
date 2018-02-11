// Inicio de mi código
$(document).ready(function() {
  // Inicializando una variable
  var target = 0;
  // Elementos
  var $buttons = $('.control'); // Botones circulares
  var $previous = $('.previous'); // Ícono de flecha hacia la izquierda
  var $next = $('.next'); // Ícono de flecha hacia la derecha
  // Eventos
  // Evento de los botones
  $buttons.click(function() {
    target = parseInt($(this).data('target'));
    showImage(target);
  });
  // Evento para mostrar la imagen previa(Ícono de flecha hacia la izquierda)
  $previous.click(function(event) {
    event.preventDefault();
    target = target - 1;
    target = (target < 0) ? 8 : target;
    showImage(target);
  });
  // Evento para mostrar la siguiente imagen(Ícono de flecha hacia la derecha)
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
