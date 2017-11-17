(function(){
var supportOrientation = (typeof window.orientation === 'number' &&
typeof window.onorientationchange === 'object');
    var init = function(){
         var htmlNode = document.body.parentNode,
        orientation;
        var updateOrientation = function(){
            if(supportOrientation){
                orientation = window.orientation;
                switch(orientation){
                case 90:
                case -90:
                orientation = 'landscape';//横屏
                break;
                default:
                orientation = 'portrait';//竖屏
                break;
                }
            }else{
                orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
            }
                htmlNode.setAttribute('class',orientation);
        };
        if(supportOrientation){
            window.addEventListener('orientationchange',updateOrientation,false);
        }else{
            //监听resize事件
            window.addEventListener('resize',updateOrientation,false);
        }
        updateOrientation();
    };
    window.addEventListener('DOMContentLoaded',init,false);
})();
window.onload = function(){
    // 首页
    var swiper = new Swiper('.container',{
        autoplay:5000,
        loop:true,
        pagination : '.swiper-pagination',
        effect : 'fade',
        // effect : 'fade',
        // fade: {
        //   crossFade: false,
        // },
        autoplayDisableOnInteraction : false,
        paginationClickable: true,
        onTransitionEnd: function(swiper){
            // 向右
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.txtL').removeClass('transL')
            $('.swiper-slide').eq(swiper.activeIndex).find('.txtL').addClass('transL')
            // 向左
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.txtR').removeClass('transZl')
            $('.swiper-slide').eq(swiper.activeIndex).find('.txtR').addClass('transZl')
            // 韵向右
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.txtYr').removeClass('transZr')
            $('.swiper-slide').eq(swiper.activeIndex).find('.txtYr').addClass('transZr')
            // img向右
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.imgLr').removeClass('tansLr')
            $('.swiper-slide').eq(swiper.activeIndex).find('.imgLr').addClass('tansLr')
            // 向上
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.txtT').removeClass('transT')
            $('.swiper-slide').eq(swiper.activeIndex).find('.txtT').addClass('transT')
            // 向下
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.txtB').removeClass('transB')
            $('.swiper-slide').eq(swiper.activeIndex).find('.txtB').addClass('transB')
            // 放大
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.txtC').removeClass('transC')
            $('.swiper-slide').eq(swiper.activeIndex).find('.txtC').addClass('transC')
            // 谈入
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.txtO').removeClass('transO')
            $('.swiper-slide').eq(swiper.activeIndex).find('.txtO').addClass('transO')
            // 文字向上
            $('.swiper-slide').eq(swiper.activeIndex).siblings('.swiper-slide').find('.txtYt').removeClass('transZt')
            $('.swiper-slide').eq(swiper.activeIndex).find('.txtYt').addClass('transZt')
        }
    });
    // 判断机型
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isiOS){
        $('.pc1-name').css({
            'width':'1rem',
            'padding-right':'0.5rem'
        })
        $('.pc3-name').css({
            'width':'1rem',
            'padding-right':'0.5rem'
        })
    }
    // 新闻
    var swiperNews = new Swiper('.news-animate',{
        autoplay:5000,
        loop:true,
        pagination :'.swiper-pagination',
        autoplayDisableOnInteraction : false,
        paginationClickable: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper  
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
    })    
    // 吃喝玩乐
    function createSwiper(index){
        var swiper = new Swiper('.plays-0'+index,{
            autoplay:3000,
            loop:true,
            paginationClickable: true,
            autoplayDisableOnInteraction : false,
            pagination :'.swiper-pagination',
            observer:true,//修改swiper自己或子元素时，自动初始化swiper  
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
        })
        return swiper;
    }
    
    var swiper1,swiper2,swiper3,swiper4,swiper5;
    swiper1 = createSwiper(1);
    $('.plays-navlist').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        // $('.plays-content').eq(index).delay(500).fadeIn('fast').siblings('.plays-content').fadeOut('fast')
        $('.plays-content').eq(index).addClass('active').siblings('.plays-content').removeClass('active')
        if(index==0){
            if(swiper1!=undefined){
                swiper1.destroy();
            }
            swiper1 = createSwiper(1)
        }else if(index==1){
            if(swiper2!=undefined){
                swiper2.destroy();
            }
            swiper2 = createSwiper(2)
        }else if(index==3){
            if(swiper3!=undefined){
                swiper3.destroy();
            }
            swiper3 = createSwiper(3)
        }else if(index==4){
            if(swiper4!=undefined){
                swiper4.destroy();
            }
            swiper4 = createSwiper(4)
        }else if(index==5){
            if(swiper5!=undefined){
                swiper5.destroy();
            }
            swiper5 = createSwiper(5)
        }
    })

	$('.nav-icons').on('click',function(){
		$('.navbar').fadeIn('fast')
	})
	$('.back').on('click',function(){
		$('.navbar').fadeOut('fast')
	})
    // $('.news-right').height($('.news-left').height())
    // 省略号
    function overHidden(elm,num){
        var str = $(elm).text();
        if(str.length>num){
            $(elm).text(str.substring(0,num-3)+'...')
        }
    }
    overHidden('.txt-info',284);
    overHidden('.cul-txt',145);
    overHidden('.news-yimg .nw-cinfo',40)
    overHidden('.news-noimg .nw-cinfo',60)
    overHidden('.view-txtinfo',51)
    // news
    var show = false;
    $('.er-navshow').on('click',function(){
        var lH = 0;
        if($('.er-navinfo a').length>3){
            lH = $('.er-navinfo a').eq(0).height()*(Math.ceil($('.er-navinfo a').length/3));
        }else{
            lH = $('.er-navinfo a').eq(0).height();
        }
        show  = !show;
        if(show){
            $('.er-navinfo').css({
                'height':lH
            })
            $(this).find('.er-more').addClass('show-more')
        }else{
            $('.er-navinfo').css({
                'height':0
            })
            $(this).find('.er-more').removeClass('show-more')
        }
    })
    // 视频
    var video = document.getElementById('vides');
    $('.san-video').on('click',function(){
        $('#vides').attr('controls',true)
        video.play()
        $(this).find('.san-bar').fadeOut('fast')
    })
    // 音频
    $('.san-btns>a').on('click',function(){
        $('.load-box').css({
            'display':'-webkit-flex',
            'display':'flex'
        })
        $(this).addClass('active').siblings('a').removeClass('active');
    })
    $('.load-box').on('click',function(){
        $('.load-box').css({
            'display':'none',
        })
    })
     // 旅游服务
    $('.tour-nav .swiper-slide').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('.swiper-slide').removeClass('active');
        $('.tour-content').eq(index).addClass('active').siblings('.tour-content').removeClass('active')
    })
    // 留言回复
    $('.zi-tabs a').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.zi-langs').eq(index).addClass('active').siblings('.zi-langs').removeClass('active')
    })
    // 投诉建议
    $('.ts-tabs a').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.ts-langs').eq(index).addClass('active').siblings('.ts-langs').removeClass('active')
    })
    // 调查问卷
    $('.dc-tabs a').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.dc-langs').eq(index).addClass('active').siblings('.dc-langs').removeClass('active')
    })
    // 滚动导航栏
    var mySwiper1 = new Swiper('.move-nav',{
        watchSlidesProgress : true,
        watchSlidesVisibility : true,
        slidesPerView : 5,
        onTap: function(){
            mySwiper2.slideTo( mySwiper1.clickedIndex)
        }
    })
    var mySwiper2 = new Swiper('.move-content',{
        onSlideChangeStart: function(){
            updateNavPosition()
        }
    })

    function updateNavPosition(){
        $('.move-nav .active').removeClass('active')
        var activeNav = $('.move-nav .swiper-slide').eq(mySwiper2.activeIndex).addClass('active');
        if (!activeNav.hasClass('swiper-slide-visible')) {
            if (activeNav.index()>mySwiper1.activeIndex) {
                var thumbsPerNav = Math.floor(mySwiper1.width/activeNav.width())-1;
                mySwiper1.slideTo(activeNav.index()-thumbsPerNav);
            }else {
                mySwiper1.slideTo(activeNav.index());
            }   
        }
    }



   /* // 预定中心
     $('.order-nav .swiper-slide').on('click',function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('.swiper-slide').removeClass('active');
        $('.order-content').eq(index).addClass('active').siblings('.order-content').removeClass('active')
    })*/




     //查询结果
    $('.tour-surs').on('click',function(){
        var str = '';
        $('.tour-reslut').empty()
            str+='<table class="tour-table"><tr>'
                +'<td rowspan="2">1</td><td>2</td></tr>'         
                +'<tr><td>3</td></tr>'                
                +'<tr><td rowspan="2">1</td><td>2</td></tr>'       
                +'<tr><td>3</td></tr>'            
                +'</table>'
        $('.tour-reslut').append(str)           
    })
//查询结果
    $('.tour-surs').on('click',function(){
        $('.tour-reslut').empty();

        var starTime=$('#numstart').val();
        var endTime=$('#numend').val();
        if(endTime!='' && starTime !=''){
            $.ajax({
                url:'/Web/Server/getTime/',
                type:'POST',
                data:{
                    starTime:starTime,
                    endTime:endTime
                },
                success:function(res){
                    var arrNum = res.nums;
                    var totals = res.totals[0];
                    for(var i=0;i<arrNum.length;i++){
                        var orTime = arrNum[i].ordertime;
                        var newDate = new Date();
                        newDate.setTime(orTime*1000);
                        var numTimes = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate()
                        var jqNum = parseInt(totals.jqtop)- parseInt(arrNum[i].ticketnum);
                        var jdNum = parseInt(totals.jdtop)- parseInt(arrNum[i].hotelnum);
                        var cyNum = parseInt(totals.cytop)- parseInt(arrNum[i].footnum);
                        creatElem(numTimes,jqNum,jdNum,cyNum)
                    
                    }
                },
                err:function(err){
                    console.log(err)
                }
            })
        }else{
            var str = '<span style="display:block;text-align:center;color:red;">请选择查询时间</span>'
            $('.tour-reslut').append(str)
        }
       
    })
     function creatElem(time,viewNum,hotelNum,resNum){
        var str = '';
        str+='<table class="tour-table"><tr>'
            +'<td rowspan="3" style="text-align:center">'+time+'</td><td>景区接待量：'+viewNum+'人</td></tr>'         
            +'<tr><td>酒店接待量：'+hotelNum+'人</td></tr><tr><td>餐饮接待量：'+resNum+'人</td></tr>'                         
            +'</table>'
        $('.tour-reslut').append(str)
    }
    //实现日期选择联动
    $('#numstart').mobiscroll().date({
        theme:'android-ics light',
        lang:'zh',
        display:'bottom',
        dateFormat:'yy-mm-dd',
        onSelect:function(valueText,inst){
            //选择后触发
        }
    })
     $('#numend').mobiscroll().date({
        theme:'android-ics light',
        lang:'zh',
        display:'bottom',
        dateFormat:'yy-mm-dd',
        onSelect:function(valueText,inst){
            //选择后触发
        }
    })
      // 票务预订
    //实现日期选择联动
        $('#timestart').mobiscroll().date({
        theme:'android-ics light',
        lang:'zh',
        display:'bottom',
        dateFormat:'yy-mm-dd',
        onSelect:function(valueText,inst){
            //选择后触发
        }
    })
     $('#timeend').mobiscroll().date({
        theme:'android-ics light',
        lang:'zh',
        display:'bottom',
        dateFormat:'yy-mm-dd',
        onSelect:function(valueText,inst){
            //选择后触发
        }
    })
}