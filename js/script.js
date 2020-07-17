$(document).ready(function() {
    $("#nav-toggle").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".header-collapse").toggleClass("active");


    });
    /* Carrosel Principal */

    $('.owl-carousel').owlCarousel({
        items: 1, // para mostrar 1 imagem por vez
        lazyLoad: true,
        loop: true,
        margin: 10
    });


});