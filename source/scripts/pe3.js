/**
 * Created by zh on 2017/6/15.
 */
$(window).load(function () {
  $(".loader .fading-line").fadeOut();
  $(".loader").fadeOut("slow");
});

var $body = $("html body");

$(document).ready(function () {
  $('.aniview').AniView();
});

$(function(){
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
});

$("#backToTop").click(function () {
  $body.animate({
    scrollTop: $($(this).attr("href")).offset().top  + "px"
  }, {
    duration: 500,
    easing: "swing"
  });
  return false;
});
