// 轮播图
$(function(){
	function autoPlay(){
		this.init();
	}
	autoPlay.prototype={
		time:null,
		index:0,
		len:$('.banner-list').length,
		init:function(){//初始化
			var _this = this;
			this.play()
			//左点击
			$('.prev').on('click',function(){
				_this.index--;
				if(_this.index<0){
					_this.index=_this.len-1;
				}
				_this.shows(_this.index)
			})
			//右点击
			$('.next').on('click',function(){
				_this.index++;
				if(_this.index>=_this.len){
					_this.index=0;
				}
				_this.shows(_this.index)
			})
			$('.banner').on('mouseover',function(){
				clearInterval(_this.time)
				$('.banner-pages div').css({
					'opacity':1
				})
			})
			$('.banner').on('mouseout',function(){
				_this.play()
				$('.banner-pages div').css({
					'opacity':0
				})
			})
		},
		shows:function(num){//轮播图显示
			$('.banner-list').eq(num).fadeIn(1000).siblings('.banner-list').fadeOut(700);
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

// 研究所动态
var swiper1  = new Swiper(".trs-animate",{
	loop:true,
	autoplay:3000,
	pagination: '.swiper-pagination',
    paginationClickable: true
})
var swiper2  = new Swiper(".ny-tswiper",{
	loop:true,
	autoplay:300000,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10,
    slidesPerView: 5
})


$('.news-list .nw-title').on("click",function(){
	$(this).next().animate({
		'height':'40px'
	},300);
	$(this).parent().siblings('.news-list').find('.nw-txt').animate({
		'height':'0'
	},300)
})

// top
$('.top').on('click',function(){
	$('html,body').animate({scrollTop:0},500)
})