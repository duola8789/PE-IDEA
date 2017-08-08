/**
 * Created by JESSIEJOE on 2017/4/4.
 */

var $myCarousel1 = $('#myCarousel'),
  $myCarousel2 = $('#myCarousel2'),
  $myHeader = $("#myHeader");
var $body = $("html body");

// 初始化动画效果
$(document).ready(function () {
  $('.aniview').AniView();
});

// 设置轮播图高度
function setCarouselHeight() {
  var $myCarousel1 = $('#myCarousel');
  var navHeight = 54;
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
      filter: '.item',
      sortBy: 'original-order'
    });
  });

  // 点击导航，切换案例显示内容
  // itemsNav.find('li').click(function () {
  //   $(this).addClass('active')
  //     .siblings()
  //     .removeClass('active');
  //   var showItem = $(this).attr('data-filter');
  //   var filter = "." + showItem;
  //   items.isotope({
  //     filter: filter,
  //     sortBy : 'original-order'
  //   });
  // });
}

// 百度地图
function createMap() {
  var map = new BMap.Map("contactUs-map");
  var point = new BMap.Point(116.361658, 39.985466);
  map.centerAndZoom(point, 12);
  map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
  map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

  var marker = new BMap.Marker(point);  // 创建标注
  map.addOverlay(marker);               // 将标注添加到地图中
  marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

  var label = new BMap.Label("PE-IDEA", {offset: new BMap.Size(25, -10)}); // 设置文字标注
  marker.setLabel(label);
}

// 缩放窗口时重设轮播图宽度和导航状态
$(window).resize(function () {
  setCarouselHeight();
  $(document).triggerHandler('scroll')
});

$(function () {
  var $clickBtn = $('#clickBtn'),
    $exampleNavCollapse = $("#example-navbar-collapse");

  //TODO: 恢复加载效果
  // setTimeout(function(){
  //   $('.loader').fadeOut();
  //   setTimeout(function(){
  //     $('.peWrap').fadeIn();
  //   }, 500)
  // }, 3000);

  // 移动端导航点击后自动回收
  $(".nav > li > a").click(function () {
    $clickBtn.addClass("collapsed").attr("aria-expanded", false);
    $exampleNavCollapse.removeClass("in").attr("aria-expanded", false);
  });
  $(document).on("click", "body", function (e) {
    $clickBtn.addClass("collapsed").attr("aria-expanded", false);
    $exampleNavCollapse.removeClass("in").attr("aria-expanded", false);
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
  $exampleNavCollapse.find('a').click(function () {
    $body.animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });

  // 设置满屏高度
  $('.fullPage').css({
    'min-height': $(window).height()
  });

  // 设置轮播图高度
  setCarouselHeight();

  // 创建百度地图
  createMap()
});
