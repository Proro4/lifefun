$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
  	items:1,
  	dots:false,
  	// autoplay: true,
  	autoplaySpeed:500
  });
	 var wrappHeight = $('.wrapper').height(); 
	 $('.bck').css('height',wrappHeight);
	 $('.info-2__circle__1').hover(function(){
	 	$(this).addClass('active');
	 	$('.info-2__circle__2').removeClass('active');
	 	$('.info-2__circle__3').removeClass('active');
	 })
	 $('.info-2__circle__2').hover(function(){
	 	$(this).addClass('active');
	 	$('.info-2__circle__1').removeClass('active');
	 	$('.info-2__circle__3').removeClass('active');
	 })
	 $('.info-2__circle__3').hover(function(){
	 	$(this).addClass('active');
	 	$('.info-2__circle__2').removeClass('active');
	 	$('.info-2__circle__1').removeClass('active');
	 })
	  $('.click-scroll').on('click', function (e) { 
        e.preventDefault(); 
        var id  = $(this).attr('href'), 
            top = $(id).offset().top; 
        $('body,html').animate({scrollTop: top}, 800); 
    });

}) 
// // Paralax 
// $(window).scroll(function(){
// 	var windowWidth = $(window).width();
// 	var windowScroll = $(this).scrollTop();
// 	var windowHeight = $(window).height();
// 	var windowBottom = windowScroll + windowHeight;   
// 	var imgBlock = $('.info-1__inner__img img');
// 	var imgBlockTop = $('.info-1__inner__img');
// 	var heeadSquirrel = $('.header__squirrel');
// 	if(windowScroll > 10  ){  
// 		if(heeadSquirrel.hasClass('hiddenOn')){ }
// 		else{
// 			heeadSquirrel.addClass('hiddenOn');
// 		}
// 	}else{
// 		heeadSquirrel.removeClass('hiddenOn');
// 	}
// 	if(windowScroll >= 300  ){  
// 		imgBlock.addClass('top-1'); 
// 	}else{
// 		imgBlock.removeClass('top-1');
// 	}
// 	if(windowScroll >= 600){
// 		imgBlock.removeClass('top-1');
// 		imgBlock.addClass('top-2'); 
// 		imgBlockTop.addClass('top-1');
// 		imgBlockTop.addClass('top-1');
// 	}else{
// 		imgBlock.removeClass('top-2');
// 		imgBlockTop.removeClass('top-1');
// 		imgBlockTop.removeClass('top-1');
// 	} 
// // 	// textUp
// 	$('.textUp').each(function(){
// 		var objTop = $(this).offset().top; 
// 		if(windowBottom>=objTop){ 
// 			var opacity = (windowBottom-objTop)/7;
// 			if(opacity < 10){
// 				$(this).css('opacity','0.0'+Math.floor(opacity));
// 				$('.info-1 h2').removeClass('up');
// 			}
// 			else if(opacity <100){
// 				$(this).css('opacity','0.'+Math.floor(opacity));

// 			}else{
// 				$('.info-1 h2').addClass('up');
// 				$(this).css('opacity',Math.floor(opacity));
// 			}
// 		}
// 	})
// 	//blockUp
// 	$('.blockUp').each(function(){
// 		var objTop = $(this).offset().top;
// 		if(windowBottom >= objTop+100){
// 			$(this).addClass('active');
// 		}else{
// 			$(this).removeClass('active');
// 		}
// 	})
// 	//upHide
// 	$('.upHide').each(function(){
// 		var objTop = $(this).offset().top;
// 		var objCenter = ($(this).height()/3) + objTop; 
// 		if(windowScroll >= objCenter){
// 			$(this).addClass('active');
// 		}else{
// 			$(this).removeClass('active');
// 		}
// 	})
// 	if(windowWidth <= 772){
// 		$('.info-5__form__soc .butt').html('');
// 	}else{
// 		$('.butt.butt-tel').html('Telegram');
// 		$('.butt.butt-fac').html('Facebook');
// 	}
// 	$(window).resize(function(){
// 		if(windowWidth <= 772){
// 			$('.info-5__form__soc .butt').html('');
// 		}else{
// 			$('.butt.butt-tel').html('Telegram');
// 			$('.butt.butt-fac').html('Facebook');
// 		}
// 	 var wrappHeight = $('.wrapper').height(); 
	 // $('.bck').css('height',wrappHeight);
// 	})
	$('#fullpage').fullpage({
		//options here
		licenseKey:('OPEN-SOURCE-GPLV3-LICENSE'), 
        onLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){ 
        	console.log(index.index);
            if(index.index >= 1){ 
            	$('.info-1__inner__img').addClass('top-1');
            	$('.info-1__inner__img img').addClass('top-1');
            }
            else{ 
            	$('.info-1__inner__img').removeClass('top-1');
            	$('.info-1__inner__img img').removeClass('top-1');
            }
            if(index.index >= 4){ 
            	$('.info-4').addClass('top-1'); 
            } 
        }
	});
// }) 
// //preloader
$(window).on('load', function () {
    var preloader = $('.loaderArea');
    var loader = preloader.find('.loader');
    loader.delay(2000).fadeOut();
    preloader.delay(2000).fadeOut('slow');

});