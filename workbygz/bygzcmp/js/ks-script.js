
	$('#bt35').click(function(){
		$(".ewm").delay(500).fadeIn('slow');
		$(".e-left").animate({'left':-190},"slow");
		$(".left").animate({'left':-190},"slow");
		$(".e-right").animate({'right':-150},"slow");
		$(".ecenter").fadeOut('slow');
		
	});
	$('.ewm').click(function(){
		$(".ewm").fadeOut('slow');
		$(".e-left").delay(500).animate({'left':0},"slow");
		$(".left").delay(500).animate({'left':0},"slow");
		$(".e-right").delay(500).animate({'right':0},"slow");
		$(".ecenter").delay(500).fadeIn('slow');
	});
	$('.bt45').click(function(){
		$(".ydewm").delay(500).fadeIn('slow');
		$(".e-left").animate({'left':-190},"slow");
		$(".left").animate({'left':-190},"slow");
		$(".e-right").animate({'right':-150},"slow");
		$(".ecenter").fadeOut('slow');
		$('body').css({
			'z-index':'-1'
		})
		
	});
	$('.ydewm').click(function(){
		$(".ydewm").fadeOut('slow');
		$(".e-left").delay(500).animate({'left':0},"slow");
		$(".left").delay(500).animate({'left':0},"slow");
		$(".e-right").delay(500).animate({'right':0},"slow");
		$(".ecenter").delay(500).fadeIn('slow');
		$('body').css({
			'z-index':'0'
		})
	});

//吃喝玩乐大选项卡
$('.clwl-btn>ul>li').on('click',function(){
	var index = $(this).index();
	$(this).addClass('active').siblings('li').removeClass('active')
	$('.chwl-box').eq(index).addClass('active').siblings('.chwl-box').removeClass('active')
})
//旅游出行选项卡
$('.lycx-tab>ul>li').on('click',function(){
	var index = $(this).index();
	$(this).addClass('active').siblings('li').removeClass('active')
	$('.lycx-tab-list').eq(index).addClass('active').siblings('.lycx-tab-list').removeClass('active')
})

