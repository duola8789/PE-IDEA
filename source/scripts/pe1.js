/**
 * Created by JESSIEJOE on 2017/4/4.
 */
var navHeight = 54;
$(window).load(function () {
  // $(".loader .fading-line").fadeOut();
  // $(".loader").fadeOut("slow");
});

var $myCarousel1 = $('#myCarousel'),
  $myCarousel2 = $('#myCarousel2'),
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

  //TODO: 恢复加载效果
  // setTimeout(function(){
  //   $('.loader').fadeOut();
  //   setTimeout(function(){
  //     $('.peWrap').fadeIn();
  //   }, 500)
  // }, 3000);

  // 移动端导航点击后自动回收
  $(".nav > li > a").click(function(){
    $('#clickBtn').addClass("collapsed");
    $('#clickBtn').attr("aria-expanded",false);
    $("#example-navbar-collapse").removeClass("in");
    $("#example-navbar-collapse").attr("aria-expanded",false);
  });
  $(document).on("click", "body", function(e){
    $('#clickBtn').addClass("collapsed");
    $('#clickBtn').attr("aria-expanded",false);
    $("#example-navbar-collapse").removeClass("in");
    $("#example-navbar-collapse").attr("aria-expanded",false);
  });

  // 轮播图间隔
  $myCarousel1.carousel({
    interval: 3000
  });
  // $myCarousel2.carousel({
  //   interval: 3000
  // });

  // 案例hover效果
  $('.item').hover(function () {
    $(this).find('.workTitle, .overlay').stop(true, true).fadeIn('500');
  }, function () {
    $(this).find('.workTitle, .overlay').stop(true, true).fadeOut('500');
  });

  // 案例展示瀑布流效果
  initPortfolio();

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
  setCarouselHeight();

  // 案例显示效果
  $('.item').hover(function () {
    $(this).find('.work-title, .overlay').stop(true, true).fadeIn('500');
  }, function () {
    $(this).find('.work-title, .overlay').stop(true, true).fadeOut('500');
  })
});

// 设置轮播图高度
function setCarouselHeight(){
  var $myCarousel1 = $('#myCarousel');
  $myCarousel1.css({
    'max-height': $(window).height() - navHeight
  }).find('.item').css({
    'max-height': $(window).height() - navHeight
  });
}

// 案例展示瀑布流效果
function initPortfolio() {
  var itemsNav = $('#items-nav');
  var items = $('.items');
  var item = $('.item');
  var clickNumber = 1;


  // 案例图片初始化加载
  items.imagesLoaded(function () {
    items.isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows',
      transitionDuration: '0.7s',
      filter: '.init',
      sortBy : 'original-order'
    });
  });

  // 点击导航，切换案例显示内容
  itemsNav.find('li').click(function () {
    $(this).addClass('active')
      .siblings()
      .removeClass('active');
    var showItem = $(this).attr('data-filter');
    var filter = "." + showItem;
    items.isotope({
      filter: filter,
      sortBy : 'original-order'
    });
  });

}



$(window).resize(function() {
  setCarouselHeight();
  $(document).triggerHandler('scroll')
});