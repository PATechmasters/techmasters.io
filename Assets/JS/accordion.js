var action = 'click';
var speed = "500";


$(document).ready(function(){

  $('li.q').on(action, function(){
    $(this).next().slideToggle(speed)
    .siblings('li.a').slideUp();

    var icon = $(this).children('.fa-chevron-down');

    $('.fa-chevron-down').not(icon).removeClass('rotate');

    icon.toggleClass('rotate');

  });

});
