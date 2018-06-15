$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
  	items:1,
  	dots:true,
  	// autoplay: true,
  	autoplaySpeed:500
  });
	 var wrappHeight = $('.wrapper').height(); 
	 $('.bck').css('height',wrappHeight);
})

// Paralax 
$(window).scroll(function(){
	var windowWidth = $(window).width();
	var windowScroll = $(this).scrollTop();
	var windowHeight = $(window).height();
	var windowBottom = windowScroll + windowHeight;   
	if(windowScroll > 10  ){  
		$('.header__squirrel').addClass('hiddenOn');
	}else{
		$('.header__squirrel').removeClass('hiddenOn');
	}
	if(windowScroll >= 300  ){  
		windowScroll = windowScroll - 300; 
		$('.info-1__inner__img img').css('top',windowScroll/5);
		$('.info-1__inner__img').animate({'top': -(windowScroll/10) }, 10);
	}else{
		$('.info-1__inner__img').css('top',0); 
	} 
	// textUp
	$('.textUp').each(function(){
		var objTop = $(this).offset().top; 
		if(windowBottom>=objTop){ 
			var opacity = (windowBottom-objTop)/7;
			if(opacity < 10){
				$(this).css('opacity','0.0'+Math.floor(opacity));
				$('.info-1 h2').removeClass('up');
			}
			else if(opacity <100){
				$(this).css('opacity','0.'+Math.floor(opacity));

			}else{
				$('.info-1 h2').addClass('up');
				$(this).css('opacity',Math.floor(opacity));
			}
		}
	})
	//blockUp
	$('.blockUp').each(function(){
		var objTop = $(this).offset().top;
		if(windowBottom >= objTop+100){
			$(this).addClass('active');
		}else{
			$(this).removeClass('active');
		}
	})
	//upHide
	$('.upHide').each(function(){
		var objTop = $(this).offset().top;
		var objCenter = ($(this).height()/3) + objTop; 
		if(windowScroll >= objCenter){
			$(this).addClass('active');
		}else{
			$(this).removeClass('active');
		}
	})
	if(windowWidth <= 772){
		$('.info-5__form__soc .butt').html('');
	}else{
		$('.butt.butt-tel').html('Telegram');
		$('.butt.butt-fac').html('Facebook');
	}
	$(window).resize(function(){
		if(windowWidth <= 772){
			$('.info-5__form__soc .butt').html('');
		}else{
			$('.butt.butt-tel').html('Telegram');
			$('.butt.butt-fac').html('Facebook');
		}
	 var wrappHeight = $('.wrapper').height(); 
	 $('.bck').css('height',wrappHeight);
	})
}) 