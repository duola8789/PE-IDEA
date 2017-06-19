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
