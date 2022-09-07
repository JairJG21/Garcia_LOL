
$(document).ready(function () {
  AOS.init({
    duration: 1200,
  })
  
  // Fondo
  var instance = new vidbg(
    ".background_0_index",
    {
      mp4: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-playing-on-a-computer-43527-large.mp4",
      overlay: true,
      overlayColor: "#000",
      overlayAlpha: 0.3
    }
    // {
    //   autoplay: true,
    //   controls: false,
    //   loop: true,
    //   muted: true,
    //   playsInline: true,
    // }
  );
  instance.playVideo();

  var height_total = $(window).height();

      $('.contenedor_principal').height(height_total);

      var height_img = height_total - 95;
      console.log(height_img);
      console.log(height_total);
      $('.heigth_img').height(height_img);
  
  });
    