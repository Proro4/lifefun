$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
    });
    $('.tell-slider').owlCarousel({
        items:1,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        smartSpeed:500,
        loop:true,
        margin:0
    });
    $('.slider-2').owlCarousel({
        items:1,
        URLhashListener:true,
        startPosition: 'URLHash',
        dots:false
    });

    $('.info-1__circle__1').hover(function(){
        $(this).addClass('active');
        $('.info-1__circle__2').removeClass('active');
        $('.info-1__circle__3').removeClass('active');
    })
    $('.info-1__circle__2').hover(function(){
        $(this).addClass('active');
        $('.info-1__circle__1').removeClass('active');
        $('.info-1__circle__3').removeClass('active');
    })
    $('.info-1__circle__3').hover(function(){
        $(this).addClass('active');
        $('.info-1__circle__2').removeClass('active');
        $('.info-1__circle__1').removeClass('active');
    })
    $('.click-scroll').on('click', function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

});