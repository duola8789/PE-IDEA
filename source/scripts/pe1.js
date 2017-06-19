/**
 * Created by JESSIEJOE on 2017/4/4.
 */

$(window).load(function () {
  $(".loader .fading-line").fadeOut();
  $(".loader").fadeOut("slow");
});

var $myCarousel1 = $('#myCarousel'),
  $myHeader = $("#myHeader");
var $body = $("html body");

// var options = {
//   animateThreshold: 100,
//   scrollPollInterval: 20
// };
$(document).ready(function () {
  $('.aniview').AniView();
});

//首页轮播图循环时间
$(function () {
  // 移动端导航点击后自动回收
  $(".nav > li > a").click(function(){
    $('#clickBtn').addClass("collapsed");
    $('#clickBtn').attr("aria-expanded",false);
    $("#example-navbar-collapse").removeClass("in");
    $("#example-navbar-collapse").attr("aria-expanded",false);
  });

    $myCarousel1.carousel({
    interval: 3000
  });

// 增加图标抖动动画类
  $(".service-title").hover(function () {
    $(this).find('i').addClass('swing')
  }, function () {
    $(this).find('i').removeClass('swing')
  });

// 导航滚动
  $(document).scroll(function () {
    var $carousel1Height = $myCarousel1.height();
    if ($(this).scrollTop() > $carousel1Height) {
      $myHeader.css({
        'position': 'fixed',
        'top': 0
      });
    }
    else {
      $myHeader.css({
        'position': 'absolute',
        'top': $carousel1Height
      })
    }
  });
  $(window).resize(function () {
    $(document).triggerHandler('scroll')
  });

  // 点击导航定位到锚点的动画效果
  $("#example-navbar-collapse").find('a').click(function () {
    $body.animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });

  $('.fullPage').css({
    'min-height': $(window).height()
  });

  // 设置轮播图高度
  $myCarousel1.css({
    'max-height': $(window).height() - 50
  }).find('.item').css({
    'max-height': $(window).height() - 50
  });

  // 案例显示效果
  $('.item').hover(function () {
    $(this).find('.work-title, .overlay').stop(true, true).fadeIn('500');
  }, function () {
    $(this).find('.work-title, .overlay').stop(true, true).fadeOut('500');
  })
});
