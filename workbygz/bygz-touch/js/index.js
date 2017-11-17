// 新闻
 $('.news-list').width($('.nw-wraper').width())
 $(function(){
	var nwidth = $('.news-list').eq(0).width()
    var w=nwidth;
    var l=0;
	var timer=null;
	var len=$(".news-list").length*2; 
	$(".nw-box").append($(".nw-box").html()).css({'width':len*w, 'left': -len*w/2});

    timer=setInterval(init,3000);
    // 初始化
    function init(){
        $(".news-next").trigger('click'); 
    } 
    // hover
    $(".news-list").hover(function(){
		clearInterval(timer);
	},function(){
        timer=setInterval(init,3000);
    });
    // 左边
    $(".news-prev").click(function(){
		l=parseInt($(".nw-box").css("left"))+w;  
		 showCurrent(l); 
		 console.log(l)
    });
    // 右边
	$(".news-next").click(function(){
	 	l=parseInt($(".nw-box").css("left"))-w; 
		showCurrent(l);
	});

	function showCurrent(l){   
		if(len==2){ 
			return;
		}
		$(".nw-box").animate({"left":l},500,function(){
			if(l==0){
				$(".nw-box").css("left",-len*w/2);   
			}else if(l==(1-len)*w){ 
				$(".nw-box").css('left',(1-len/2)*w); 
			}
		});       
	}
});   
window.onload=function(){

    // 音频播放
    $('.music').on('click',function(){
    	console.log(1)
      var audios = document.getElementById('audios')
      $(this).toggleClass('active')
      // audios.play();
      if(audios.paused){
        audios.play();
      }else{
        audios.pause()
      }
    })

    // 旅游出行
    $('.er-rnav>li').on('click',function(){
      var index = $(this).index();
      $(this).addClass('active').siblings('li').removeClass('active');
      $('.er-tour-info').eq(index).delay(500).fadeIn('fast').siblings('.er-tour-info').fadeOut('fast')
    })

    // 微信弹层

    $('.tc-wchart').on('click',function(){
    	$('.mask').fadeIn('fast');
    	$('.wx-imgs').delay(300).fadeIn('fast');
    	$(this).addClass('active');
    })

    $('.mask').on('click',function(){
    	$(this).fadeOut('fast');
    	$('.wx-imgs').css({
    		'display':'none'
    	});
    	$('.wx-imgs').removeClass('wxh-imgs')
    	$('.tc-wchart').removeClass('active')
         $('.wx-live').removeClass('active')
    })

    $('.wx-live').on('click',function(){
    	$('.mask').fadeIn('fast');
    	$('.wx-imgs').delay(300).fadeIn('fast').addClass('wxh-imgs');
    	$(this).addClass('active').siblings('a').removeClass('active');
    })
    $('.wx-back').on('click',function(){
        $('.mask').delay(300).fadeOut('fast');
        $('.wx-imgs').fadeOut('fast');
        $('.wx-imgs').removeClass('wxh-imgs')
        $('.tc-wchart').removeClass('active')
    })
    // 吃喝玩乐
    $('.plays-btns>a').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.er-relax-content').eq(index).delay(500).fadeIn('fast').siblings('.er-relax-content').fadeOut('fast')
    })

}
/*//实现日期选择联动
var start = {
    format: 'YYYY-MM-DD',
    isinitVal:true,
    minDate: '2014-06-16 23:59:59', //设定最小日期为当前日期
    //festival:true,
    maxDate: $.nowDate({DD:0}), //最大日期
    choosefun: function(elem,datas){
        end.minDate = datas; //开始日选好后，重置结束日的最小日期
        endDates();
    },
    okfun:function (elem,datas) {
       
    }
};
var end = {
    format:"YYYY-MM-DD",
    isinitVal:true,
    // minDate: $.nowDate({DD:0}), //设定最小日期为当前日期
    //festival:true,
    maxDate: $.nowDate({DD:0}), //最大日期
    choosefun: function(elem,datas){
        start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
    }
};
// 游客量查询
function endDates() {
    end.trigger = false;
    $("#numend").jeDate(end);
}
$("#numstart").jeDate(start);
$("#numend").jeDate(end);
*/





























































































































