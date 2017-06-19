/**
 * Created by zh on 2017/6/15.
 */
var $body = $("html body");

$(window).load(function () {
  $(".loader .fading-line").fadeOut();
  $(".loader").fadeOut("slow");
});

$(document).ready(function () {
  $('.aniview').AniView();
});

$(function () {
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

  $('.fullPage').css({
    'min-height': $(window).height()
  });

  // 案例显示效果
  $('.item').hover(function () {
    $(this).find('.work-title, .overlay').stop(true, true).fadeIn('500');
  }, function () {
    $(this).find('.work-title, .overlay').stop(true, true).fadeOut('500');
  });
  initPortfolio()
});

function initPortfolio() {
  var itemsNav = $('#items-nav');
  var items = $('.items');
  var item = $('.item');
  var $moreCases = $('#moreCases');
  var clickNumber = 1;

  // 显示更多案例按钮在案例小于8个时不显示
  initMoreCaseBtn(item);

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

  // 点击更多案例按钮，每次多加载8个案例，滚动条向下滚动一定高度
  $moreCases.click(function () {
    caseShow(8 + clickNumber*8, item);
    items.isotope({
      filter: '.init',
      sortBy : 'original-order'
    });
    clickNumber++;
    $("html,body").stop().animate(
      {scrollTop :  $moreCases.offset().top},
      600);
    if ($('.item:hidden').length === 0) {
      $moreCases.hide();
    }
  });

  // 点击外围导航，切换更多案例按钮显示状态，切换案例显示内容
  itemsNav.find('li').click(function () {
    $(this).addClass('active')
      .siblings()
      .removeClass('active');

    $('#navInside').find('li').removeClass('active');

    var $navInside = $('#navInside');

    var showItem = $(this).attr('data-filter');
    var filter = "." + showItem;

    var ele = '#' + showItem + 'Nav';
    var eleShow = $navInside.find(ele);

    // 点击全部案例按钮
    if($(this).hasClass('all')){
      clickNumber = 1;
      initMoreCaseBtn(item);
      item.removeClass('init');
      caseShow(clickNumber*8, item);
      filter = '.init' + filter;
    }
    // 点击其他按钮
    else{
      $moreCases.hide();
    }

    // 点击有二级菜单的导航显示二级导航
    if(eleShow.length > 0 ){
      eleShow.show().siblings().hide();
    }
    else{
      $navInside.find("ul").hide()
    }

    items.isotope({
      filter: filter,
      sortBy : 'original-order'
    });
  });

  $('#navInside').find('li').click(function(){
    $(this).addClass('active')
      .siblings()
      .removeClass('active');
    var showItem = $(this).attr('data-filter');
    items.isotope({
      filter: '.' + showItem,
      sortBy : 'original-order'
    });
  })
}

// 案例展示Page中案例初始时只显示8个，其余隐藏
function caseShow(n, ele) {
  for (var i = 0; i < ele.length; i++) {
    if (i < n) {
      $(ele[i]).addClass('init')
    }
  }
}
function initMoreCaseBtn(item){
  var $moreCases = $('#moreCases');
  if (item.length > 8) {
    $moreCases.show()
  }
  else {
    $moreCases.hide()
  }
}

$("#backToTop").click(function () {
  $body.animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, {
    duration: 500,
    easing: "swing"
  });
  return false;
});