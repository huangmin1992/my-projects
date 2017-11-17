

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
// 新闻轮播
    $('.news-list').width($('.nw-wraper').width());
    console.log($('.nw-wraper').width())
    var timer = null;
    var nwidth = $('.news-list').eq(0).width()//元素宽度
    var lens = $('.news-list').length;//元素长度
    $(".nw-box").prepend($('.news-list').last().clone());
    $(".nw-box").append($('.news-list').first().clone());
    var imgCount = $('.news-list').length;//元素的长度
    $(".nw-box").css({
        left:0-nwidth,
        width:imgCount*nwidth
    })
    var curidx = 0;
    var move = 1;
    var lock = false;
    function playNext(){
        $('.nw-box').animate({
            left:'-='+move*nwidth,
        },function(){
            curidx+=move;
            if(curidx==lens){
                $('.nw-box').css({
                    left:0-nwidth
                });
                curidx=0;
            }
        })
    }
    function playPre(){
        $('.nw-box').animate({
            left:'+='+move*nwidth
        },function(){
            curidx-=move;
            if(curidx==(-1)){
                $('.nw-box').css({left:0-nwidth*lens});
                curidx=lens-1;
            }
        })
    }

    timer=setInterval(init,3000);
    // 初始化
    function init(){
        $(".news-next").trigger('click'); 
    } 
    // hover
    $(".nw-wraper").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(init,3000);
    });

    //前一个
    $('.news-prev').on('click',function(){
        playPre();
    })
    //后一个
    $('.news-next').on('click',function(){
        playNext();
    })

    // 新闻tabs
    $('.nes-lsinfo').on('click',function(){
    console.log(1)
    $(this).addClass('active').siblings('.nes-lsinfo').removeClass('active');
    $(this).find('.news-indir').animate({left:100,opacity:0},300);
    $(this).siblings('.nes-lsinfo').find('.news-indir').animate({left:17,opacity:1},300)


    $(this).find('.news-more').fadeIn(500);
    $(this).siblings('.nes-lsinfo').find('.news-more').fadeOut(500);
    $(this).find('.news-info').animate({height:55,paddingTop:5,paddingBottom:5},500);
    $(this).siblings('.nes-lsinfo').find('.news-info').animate({height:0,padding:0},500);
    })
})
