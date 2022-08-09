AOS.init();

    function abrirMenu() {
      $('.navbar ul').css(
        {
          "display": "initial",
          "position": "absolute",
          "right": "0",
          "top": "0",
          "overflow": "hidden",
          "background-color": "rgb(0, 0, 0)",
          "width": "100%"
        });

        $('.btn_cerrar_menu').css(
        {
          "color": "rgb(255, 255, 255)",
          "position": "absolute",
          "top": "10px",
          "right": "20px"
        });

        $('.navbar ul li').css(
        {
          "margin": "0 0 0 0",
          "margin": "5px 0 0 0",
          "padding": "10px 0 10px 20px"
        });
      }

    function cerrarMenu() {
      $('.navbar ul').css(
        {
          "display": "",
          "position": "",
          "right": "",
          "top": "",
          "overflow": "",
          "background-color": "",
          "width": ""
        });

        $('.btn_cerrar_menu').css(
        {
          "color": ""
        });

        $('.navbar ul li').css(
        {
          "margin": "",
          "margin": "0 20px 0 0",
          "padding": ""
        });
    }