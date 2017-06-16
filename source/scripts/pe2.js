/**
 * Created by zh on 2017/6/14.
 */
$(function(){
  // 增加图标抖动动画类
  $(".service-title").hover(function () {
    $(this).find('i').addClass('pulse')
  }, function () {
    $(this).find('i').removeClass('pulse')
  });
  // $('#aboutPePage').height(window.screen.height)
});