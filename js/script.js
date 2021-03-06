function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	for(var i=0;i<ibg.length;i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}

}
ibg();

$(document).ready(function(){
	$('.sliderFirst').slick({
		asNavFor:'.sliderSecond',
		rtl:true,
		variableWidth:true,
		arrows:false,
		touchThreshold:10,
		infinite:true,
		autoplay:true,
		autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover:false,
        pauseOnFocus:false,
		responsive:[{
			breakpoint:850,
			settings:{
				rtl:false
			}
		}]
	});
	$('.sliderSecond').slick({
		asNavFor:'.sliderFirst',
		infinite:true,
		variableWidth:true,
		arrows:false,
		touchThreshold:10
	});


	
	
	

	let w = $(window).width();
	let menu = $('.header-body__list');
	let burgerBody = $('.burger-menu__body');
	let burgerBtn = $('.header-burger');
	let headLink = $('.header-link');
	burgerBtn.click(function(){
		$('.burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.container').toggleClass('lock');
	})
	if(w<850){
		menu.appendTo(burgerBody);
		headLink.appendTo(burgerBody);
	}else{
		menu.insertAfter($('.header-body__logo'));
		headLink.insertAfter(burgerBtn);
	}
	
	

	let faqP = $('.faq-body__p');
	faqP.hide();
	let faqItem = $('.faq-body__item');
	faqItem.each(function(){
		$(this).click(function(){
			if($(this).find($('.faq-body__p')).css('display') == 'none'){
			faqP.hide(500);
			faqItem.each(function(){
				$(this).removeClass('active');
			})
			$(this).find($(".faq-body__p")).show(500);
			$(this).addClass('active');
		}else{
			faqP.hide(500);
			$(this).removeClass('active');
		}
		})
	})
})

$(window).resize(function(){
	let w = $(window).width();
	let menu = $('.header-body__list');
	let burgerBody = $('.burger-menu__body');
	let burgerBtn = $('.header-burger');
	let headLink = $('.header-link');
	burgerBtn.click(function(){
		$('.burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.container').toggleClass('lock');
	})
	if(w<850){
		menu.appendTo(burgerBody);
		headLink.appendTo(burgerBody);
	}else{
		headLink.appendTo($('.link-ins'));
		menu.insertAfter($('.header-body__logo'));
	}
})