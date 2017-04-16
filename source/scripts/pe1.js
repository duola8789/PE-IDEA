/**
 * Created by JESSIEJOE on 2017/4/4.
 */
var $myCarousel1 = $('#myCarousel1'),
    $carousel1Height = $myCarousel1.height(),
    $myHeader = $("#myHeader"),
    $collapse = $('#example-navbar-collapse');

//首页轮播图循环时间
$(function(){
    $myCarousel1.carousel({
        interval: 2500
    });

// 增加图标抖动动画类
    $(".service-title").hover(function(){
        $(this).find('i').addClass('swing')
    },function(){
        $(this).find('i').removeClass('swing')
    });

// 导航滚动
    $(document).scroll(function(){
        var $carousel1Height = $myCarousel1.height();
        if($(this).scrollTop() > $carousel1Height){
            $myHeader.css({
                'position' : 'fixed',
                'top' : 0
            })
        }
        else{
            $myHeader.css({
                'position' : 'absolute',
                'top' : $carousel1Height
            })
        }
    });
    $(window).resize(function(){
        $(document).triggerHandler('scroll')
    })
});


