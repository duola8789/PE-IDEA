// /**
//  * Created by JESSIEJOE on 2017/4/4.
//  */
// var $myCarousel1 = $('#myCarousel'),
//   $carousel1Height = $myCarousel1.height(),
//   $myHeader = $("#myHeader"),
//   $collapse = $('#example-navbar-collapse');
// var $body = $("html, body");
//
// var fullPageHeight = $(window).height();
//
// //首页轮播图循环时间
// $(function () {
//   $myCarousel1.carousel({
//     interval: 2500
//   });
//   $myCarousel1.height(fullPageHeight-50);
//
// // 增加图标抖动动画类
//   $(".service-title").hover(function () {
//     $(this).find('i').addClass('swing')
//   }, function () {
//     $(this).find('i').removeClass('swing')
//   });
//
// // 导航滚动
//   $(document).scroll(function () {
//     var $carousel1Height = $myCarousel1.height();
//     if ($(this).scrollTop() > $carousel1Height) {
//       $myHeader.css({
//         'position': 'fixed',
//         'top': 0
//       })
//     }
//     else {
//       $myHeader.css({
//         'position': 'absolute',
//         'top': $carousel1Height
//       })
//     }
//   });
//   $(window).resize(function () {
//     $(document).triggerHandler('scroll')
//   });
//
//   // 点击导航定位到锚点的动画效果
//   $("#example-navbar-collapse").find('a').click(function(){
//     $body.animate({
//       scrollTop: $($(this).attr("href")).offset().top + "px"
//     }, {
//       duration: 500,
//       easing: "swing"
//     });
//     return false;
//   });
//
//   $('.fullPage').height(fullPageHeight)
//   // $("#about").click(function(){
//   //   window.location.href =
//   // })
// });
//
//
$(function(){
  $('#dowebok').fullpage();
});
