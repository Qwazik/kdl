$(function() {
	equalHeight('.row','.article-item');
	$(window).resize(function(){
		equalHeight('.row','.article-item');
	});
	$('.fancybox').fancybox();
	$('.viezd-price__nav li').click(function(){
		var indx = $(this).index();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		
		$('.viezd-price__item').removeClass('active');
		$('.viezd-price__item').eq(indx).addClass('active');
	});

	$('.scrollto').click(function(){
		var target = $(this).attr('href');
		var offset = 30;
		if($(this).data('scroll-offset') != undefined){
			offset = $(this).data('scroll-offset');
		}
		target = $(target).offset().top;
		$('html, body').animate({
			scrollTop: target + offset + 'px'
		});
		return false;
	});
	
	$('.swiper-container.column1').swiper({
		nextButton: '.swiper-next',
		prevButton: '.swiper-prev',
		autoplay: false,
		loop:true,
		effect: 'fade',
		breakpoints:{
				'767':{
					effect: 'slide'
				}
			}

	});
	$('.swiper-container.column3').swiper({
		slidesPerView:3,
		spaceBetween: 30,
		nextButton: '.swiper-next',
		prevButton: '.swiper-prev',
		pagination: '.swiper-pagination',
		autoplay: 5000,
		loop:true,
		paginationClickable:true,
		breakpoints: {
			'767': {
				slidesPerView:1,

			}
		}
	});

	// init
	fitHomeStart();
	$('select.input').styler();
	$('.quest').click(function(){openQuest(this)});
	equalHeight('.home-service','.home-service__item');

	$('.toggler').click(function(){
		var target = $(this).attr('href');
		var type = $(this).data('toggler-type');
		switch(type){
			case 'slide': 
				$(target).slideToggle(); break
			case 'fade': 
				$(target).fadeToggle(); break
			default: 
				$(target).toggleClass('active');
		}
		return false;
	});

	var right = $('.main-menu').outerWidth();
	$('.main-menu').css('right', '-' + right + 'px');
	$('#navButton').click(function(){

		
		responsiveMenuPadding();
		
		if(!$('.main-menu').is('.open')){
			$(this).addClass('open');
			openMenu();
		}else{
			$(this).removeClass('open');
			closeMenu();
		}

		function openMenu(){
			$('.main-menu').stop(true, true).animate({
				right: 0
			},function(){
				$('.main-menu').addClass('open');
			});
		}

		function closeMenu(){
			$('.main-menu').stop(true, true).animate({
				right: '-' + right + 'px'
			}, function(){
				$('.main-menu').removeClass('open');
			});
		}
		
	});
	

	$(window).resize(function(){
		responsiveMenuPadding();
	});
});

function fitHomeStart(){
	if($(window).height() > 774){
		$('.home-start').height($(window).height() - $('.page__main-header').outerHeight());
		
		var homeStartReady = setInterval(function(){
			if($('.home-start').height() == $(window).height() - $('.page__main-header').outerHeight()){
				$('.home-start .animated').show();
				$('.home-start li.animated').css('display','inline-block');
				$('.home-start .btn.animated').css('display','block');
				clearInterval(homeStartReady);
			}
		}, 100);
	}else{
		$('.home-start .animated').show();
		$('.home-start li.animated').css('display','inline-block');
		$('.home-start .btn.animated').css('display','block');
	}
}

function responsiveMenuPadding(){
	var pr = ($(window).outerWidth()-$('.container').outerWidth())/2;
	if($('.container').outerWidth() <= '970'){
		$('.main-menu').css('padding-right',pr+'px');	
	}	
}

function openQuest(el){
	$(el).toggleClass('active');
	$(el).stop(true,true).siblings('.answer').slideToggle(300);
}

function equalHeight(wrap, element){
    $(wrap).each(function(){
        var maxHeight = [],
            className = element;
        $(this).find(className).each(function(){
            $(this).height('auto');
        });
        $(this).find(className).each(function(){
            maxHeight.push($(this).height());
        });
        maxHeight = Math.max.apply(null, maxHeight);
        $(this).find(className).each(function(){
            $(this).height(maxHeight);
        });
    });
}

if(location.origin == 'https://qwazik.github.io'){
    $('body').append($('<script type="text/javascript" src="https://cdn.rawgit.com/Qwazik/scripts/master/navGit.js"></script>'));
    $(window).on('load', function(){
        navGit({
            'Главная':'index.html',
            'Статьи':'articles.html',
            'О компании':'about.html',
            'Типовая':'inner.html',
            'Вопрос-ответ':'questions.html',
            'Контакты':'contacts.html'
        });
    });
}


	
