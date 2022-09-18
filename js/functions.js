$(document).ready(function () {
  AOS.init();
  emailjs.init('qhBUjZCwmvp6NtQD7');

  reacomodarVideo();

});

$(window).resize(function () {
  reacomodarVideo();
});

function reacomodarVideo() {
  var height_total = $(window).height();

  $('.contenedor_principal').height(height_total);
  var height_img = height_total - 95;
  console.log(height_img);
  console.log(height_total);
  $('.heigth_img').height(height_img);
}

$('frmContacto').submit(function (e) { 
  e.preventDefault();

  emailjs.sendForm('service_lol', 'frmContacto', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });

});