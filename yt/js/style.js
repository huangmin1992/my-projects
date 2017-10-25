// 轮播图
$(function(){
	function autoPlay(){
		this.init();
	}
	autoPlay.prototype={
		time:null,
		index:0,
		len:$('.wraper-list').length,
		init:function(){//初始化
			var _this = this;
			this.play()
			//左点击
			$('.wraper-prev').on('click',function(){
				_this.index--;
				if(_this.index<0){
					_this.index=_this.len-1;
				}
				_this.shows(_this.index)
			})
			//右点击
			$('.wraper-next').on('click',function(){
				_this.index++;
				if(_this.index>=_this.len){
					_this.index=0;
				}
				_this.shows(_this.index)
			})
			$('.wraper').on('mouseenter',function(){
				clearInterval(_this.time)
			})
			$('.wraper').on('mouseleave',function(){
				_this.play()
			})
		},
		shows:function(num){//轮播图显示
			$('.wraper-list').eq(num).fadeIn(1000).siblings('.wraper-list').fadeOut(700);
		},
		play:function(){//轮播
			var _this = this;
			this.time = setInterval(function(){

				_this.index++;
				if(_this.index>=_this.len){
					_this.index=0;
				}
				_this.shows(_this.index);
			},5000)
		},
		
	}
	new autoPlay()
})
window.onload = function(){
/*	var swiper = new Swiper('.swiper-container', {
		autoplay:5000,
		loop:true, 
		slidesPerView: 4,
        spaceBetween: 30,
        prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
    });*/
    function resizeSwiper(elem){	
	    if($(window).width()<=768){
	    	var proSwiper = new Swiper(elem, {
				autoplay:5000,
				loop:true, 
				slidesPerView: 2,
		        spaceBetween: 30,
		        prevButton:'.swiper-button-prev',
				nextButton:'.swiper-button-next',
		    });
	    }else{
	    	var proSwiper = new Swiper(elem, {
				autoplay:5000,
				loop:true, 
				slidesPerView: 4,
		        spaceBetween: 30,
		        prevButton:'.swiper-button-prev',
				nextButton:'.swiper-button-next',
		    });
	    }
    }
    resizeSwiper(".product-swiper");
    $(window).resize(function(){
    	resizeSwiper(".product-swiper");
    })
    function elemAnimate(){
    	if($(window).scrollTop()>=0&&$(window).scrollTop()<780){
    		$('.pages0 .topY0').addClass('tranY');
    		$('.pages0 .topY1').addClass('tranY');
    	}
    	if($(window).scrollTop()>=450&&$(window).scrollTop()<1300){
    		$('.pages1 .topY0').addClass('tranY');
    		$('.pages1 .topY1').addClass('tranY');
    		$('.pages1 .topY2').addClass('tranY');
    	}
    	if($(window).scrollTop()>=1050){
    		$('.pages2 .topY0').addClass('tranY');
    		$('.pages2 .topY1').addClass('tranY');
    		$('.pages2 .topY2').addClass('tranY');
    	}
    	if($(window).scrollTop()>=1600){
    		$('.pages3 .topY0').addClass('tranY');
    		$('.pages3 .topY1').addClass('tranY');
    	}
    }
    elemAnimate();
    $(window).scroll(function(){
    	elemAnimate();
    })
}