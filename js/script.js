$(document).ready(function() {
    $("#nav-toggle").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".header-collapse").toggleClass("active");


    });

    // scroll

    // para o menu fixo so aparecer quando ele for maior que o header.

    //variaveis
    var nav = $('.header-nav'),
        navHeight = nav.outerHeight(),
        selecao = $('.selecao');

        //Scroll
        $(window).on('scroll', function(){

            var sTop = $(this).scrollTop();
            // fixando o Header

            if(sTop > navHeight){
                $('.header').addClass('fixed');

            }else {
                $('.header').removeClass('fixed');
            }   
           // marcando menu Scroll
           if(sTop == 0){
               nav.find('a').removeClass('active');
               nav.find('a[href="#home"]').addClass('active');  
           }else{
               selecao.each(function(){
                   var top = $(this).offset().top -navHeight;
                  if (sTop >= top){
                       nav.find('a').removeClass('active');
                       nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                   }
               });
           } 
                  
     
    });
    //Navegação
    nav.find('a').on('click',function(e){
        e.preventDefault();
        $('.header-collapse').removeClass('active');
        $('#nav-toggle').removeClass('active');


        var target = $(this).attr('href');
        if(target == "#home"){
            $('html, body').animate({scrollTop: 0},700);
        }else{
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 700);

        }

    });

    // back-top

    $('.back-top').on('click', function(e){
        e.preventDefault();
        // para efivar que atualize a pagina quando clikar no logo
        $('html, body').animate({scrollTop:0},700)
    });



    //Carrosel Principal 

    $('#carousel_principal').owlCarousel({
        items: 1, // para mostrar 1 imagem por vez
        lazyLoad: true,
        loop: true,
        margin: 10,
        nav: true,
        navSpeed: 1000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: true,
        dotsSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10

    });
    // carrosel testemunhas

    $('#carousel_testemunhas').owlCarousel({
        items: 2, // para mostrar 2 imagens por vez
        loop: true,
        margin: 40,
        nav: false,
        navSpeed: 1000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: true,
        dotsSpeed: 1000,
        // autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10,
        responsive: {
            0: {
                items: 1

            },

            960: {
                items: 2
            },
            1280: {
                nav: true,
            }
        }
    });
            
   //Portfolio 
 $ ('.portfolio-nav li a').click(function(e) {
     e.preventDefault ();
     $ ('.portfolio-nav li a').removeClass('active');
     $(this).addClass('active');

     $ ('.portfolio').removeClass('visible');

     if(this.id =="all"){
        $ ('.portfolio').addClass('visible');

     } else { 
        $ ('.portfolio.' + this.id).addClass('visible');
     }
     
    
});


});