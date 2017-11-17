// 全屏
function fullScreen() {

  var el = document.documentElement;

  var rfs = el.requestFullScreen || el.webkitRequestFullScreen || 

      el.mozRequestFullScreen || el.msRequestFullScreen;

  if(typeof rfs != "undefined" && rfs) {

    rfs.call(el);

  } else if(typeof window.ActiveXObject != "undefined") {

    //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏

    var wscript = new ActiveXObject("WScript.Shell");

    if(wscript != null) {

        wscript.SendKeys("{F11}");

    }

  }
}

function exitFullScreen() {

  var el = document;

  var cfs = el.cancelFullScreen || el.webkitCancelFullScreen || 

      el.mozCancelFullScreen || el.exitFullScreen;

  if(typeof cfs != "undefined" && cfs) {

    cfs.call(el);

  } else if(typeof window.ActiveXObject != "undefined") {

    //for IE，这里和fullScreen相同，模拟按下F11键退出全屏

    var wscript = new ActiveXObject("WScript.Shell");

    if(wscript != null) {

        wscript.SendKeys("{F11}");

    }

  }
}
var full = false;
$('.nav-fullscreen').on('click',function(){
  full = !full;
  if(full){
    fullScreen()
  }else{
    exitFullScreen()
  }
  
})


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
			$('.wraper-dir').on('mouseover',function(){
				clearInterval(_this.time)
			})
			$('.wraper-dir').on('mouseout',function(){
				_this.play()
			})
		},
		shows:function(num){//轮播图显示
			$('.wraper-list').eq(num).fadeIn(1000).siblings('.wraper-list').fadeOut(700);
			$('.wraper-nownum').text('0'+(num+1));
			$('.wraper-destxt').eq(num).delay(500).fadeIn('fast').siblings('.wraper-destxt').fadeOut('fast');
		},
		play:function(){//轮播
			var _this = this;
			this.time = setInterval(function(){

				_this.index++;
				if(_this.index>=_this.len){
					_this.index=0;
				}
				_this.shows(_this.index);
			},500000)
		},
		
	}
	new autoPlay()
})
// 新闻轮播
$('.news-list').width($('.nw-wraper').width());
var timer = null,
	$newBox = $('.nw-box'),
	$items = $newBox.children(),
	$pre = $('.news-prev'),
	$next = $('.news-next'),
	oldCount = $items.size(),
	imgWidth = $('.news-list').eq(0).width();
	$newBox.prepend($items.last().clone());
	$newBox.append($items.first().clone());
var	newCount = $newBox.children().size();
	$newBox.css({
		'left':0-imgWidth,
		'width':imgWidth*newCount
	})
timer=setInterval(init,3000);
// 初始化
function init(){
    $pre.trigger('click'); 
} 
// hover
$(".nw-wraper").hover(function(){
	clearInterval(timer);
},function(){
    timer=setInterval(init,3000);
});
$next.on('click',function(){
	playNext();
})
$pre.on('click',function(){
	playPre();
})

var move = 1,
	curidx = 0;
function playNext(){
	$newBox.animate({
		'left':'-='+move*imgWidth
	},function(){
		curidx+=move;
		if(curidx==oldCount){
			$newBox.css({
				'left':0-imgWidth
			})
			curidx=0;
		}
	})
}

function playPre(){
	$newBox.animate({
		'left':'+='+move*imgWidth
	},function(){
		curidx-=move;
		if(curidx==(-1)){
			$newBox.css({
				'left':0-imgWidth*oldCount
			})
			curidx = oldCount-1;
		}
	})
}



// $('.news-list').width($('.nw-wraper').width());
// var $ct=$('.nw-box'),
// 	$items=$ct.children(),
// 	$pre=$('.news-prev'),
// 	$next=$('.news-next'),
// 	imgCount=$items.size(),
// 	imgWidth=$items.width();
// 	$ct.append($items.first().clone());
// 	$ct.prepend($items.last().clone());
// var	newCount=$ct.children().size();
// 	$ct.css({left:0-imgWidth,width:newCount*imgWidth});
// $next.on('click',function(){
// 	playnext();

// })
// $pre.on('click',function(){
// 	playpre();
// })
// var curidx =0;
// var mov = 1;
// var lock=false;
// function playnext(){
// 	$ct.animate({left:'-='+mov*imgWidth},function(){
// 		curidx+=mov;
// 		if(curidx===imgCount){
// 			$ct.css({left:0-imgWidth});
// 			curidx=0;
// 		}
// 	})
// }

// function playpre(){
// 	$ct.animate({left:'+='+mov*imgWidth},function(){
// 		curidx-=mov;
// 		if(curidx===(-1)){
// 			$ct.css({left:0-imgWidth*imgCount});
// 			curidx=imgCount-1;
// 		}
// 	})
// }	
// timer=setInterval(init,3000);
// // 初始化
// function init(){
//    $next.trigger('click'); 
// } 
// // hover
// $(".nw-wraper").hover(function(){
// 	clearInterval(timer);
// },function(){
//     timer=setInterval(init,3000);
// });






window.onload = function(){
	// 默认样式
	function mStyle(){
		$('.san-zbox').css({
			'margin-top':'-'+$('.san-zbox').height()/2+'px'
		})
	}
	mStyle();
	// yuyan
	$('.nav-iclng').on('click',function(){
		$(this).toggleClass('lanshow');
		// $(this).animate({width:118},500)
	})
	// 新闻
	$('.nes-lsinfo').on('click',function(){
		$(this).addClass('active').siblings('.nes-lsinfo').removeClass('active');
		$(this).find('.news-indir').animate({left:100,opacity:0},300);
		$(this).siblings('.nes-lsinfo').find('.news-indir').animate({left:17,opacity:1},300)


		$(this).find('.news-more').fadeIn(500);
		$(this).siblings('.nes-lsinfo').find('.news-more').fadeOut(500);
		$(this).find('.news-info').animate({height:55,paddingTop:5,paddingBottom:5},500);
		$(this).siblings('.nes-lsinfo').find('.news-info').animate({height:0,padding:0},500);
	})
	// 二级导航条
	var w_height = $('body').height();
	$(window).scroll(function(){
		moveTo();
		// banner
		if ($(window).scrollTop() < $(window).height()) {/*
		    $('.baner-top').css('transform', "translate(0px," + ($(window).scrollTop()) / 1.5 + "px)");
		    $('.baner-top').css('transform', "translate(0px," + ($(window).scrollTop()) / 1.5 + "px)");*/
		};
	})
	function moveTo(){
		$('.er-nav').css({
			'top':0,
			'opacity':1
		})
		$('.baner-top .logo').css({
			'left':'-10%',
			'opacity':'0'
		})
		$('.baner-top .nav').css({
			'right':'-50%;',
			'opacity':'0'
		})
		if($(window).scrollTop()<=100){
			$('.er-nav').css({
				'top':'-80px',
				'opacity':0
			})
			$('.baner-top .logo').css({
				'left':'20px',
				'opacity':'1',
				'transition-delay':'0.3s'
			})
			$('.baner-top .nav').css({
				'right':'20px;',
				'opacity':'1',
				'transition-delay':'0.3s'
			})
		}
		if($(window).scrollTop()>w_height+$('.view-gk').height()+$('.news-center').height()){
			$('.bg-01').css({
				'opacity':'0'
			})
			$('.bg-02').css({
				'opacity':'1',
				'transition-delay':'0.3s'
			})
		}else{
			$('.bg-01').css({
				'opacity':'1',
				'transition-delay':'0.3s'
			})
			$('.bg-02').css({
				'opacity':'0'
			})
		}
				// 三级导航显示
		
		if($(window).scrollTop()>=$('.san-head').outerHeight()){
			$('.san-nav').css({
				'top':0,
				'opacity':1
			})
		}else{
			$('.san-nav').css({
				'top':'-15%',
				'opacity':0
			})
		}
	}
	moveTo();
	/*// 三级导航条
	$('.san-center').css({
		'padding-left':$('.san-left').outerWidth()+'px',
		'padding-right':$('.san-right').outerWidth()+'px'
	})
	$('.san-right').css({
		'margin-left':'-'+$('.san-right').outerWidth()+'px'
	})*/
	// 视频
	var video = document.getElementById('vides');
	$('.san-bar').on('click',function(){
		$('#vides').attr('controls',true)
		video.play()
		$(this).fadeOut('fast')
	})
	// 弹窗
	
	// $('.more').on('click',function(){
	// 	$('.info-box').css({
	// 		'left':0
	// 	})
	// 	setTimeout(function(){
	// 		$('body').css({
	// 			'overflow':'hidden'
	// 		})
	// 	},700)
	// })

	$('.tcbtns').on('click',function(){
		$('#iframes').attr('src',$(this).find('a').attr('href'));
		$('body').css({
			'overflow':'hidden'
		})
		setTimeout(function(){
			$('.info-box').css({
				'left':0
			})
		},500)
	})





	// fanhui
	$('.back').on('click',function(){
		var _iframe = window.parent;
        var _div =_iframe.document.getElementById('box');
        _div.style.left = '100%';
        console.log($(_div).find('#iframes'))
        $(_div).find('#iframes').attr('src','');
        $(_div).parent().css({
        	'overflow':'auto'
        })
	})
	// top
	$('.top').on('click',function(){
		$("html,body").animate({scrollTop:0},800)
	})


}