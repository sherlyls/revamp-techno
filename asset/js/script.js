$(document).ready(function () {
  $('.icon-burger').click(function () {
    $(this).siblings(".content-burger").toggle();
  });
  $('.other .search .icon').on('click', function () {
    $('.box-search').toggleClass('open');
  });
  $('.box-search .close').on('click', function () {
    $('.box-search').removeClass('open');
  });
});

$(window).scroll(function () {

  if ($(this).scrollTop() > 10) {
    $('header').addClass("sticky");
  }
  else {
    $('header').removeClass("sticky");
  }
});

function toggle_visibility(e) { var l = document.getElementById(e); "none" == l.style.display ? l.style.display = "block" : l.style.display = "none" } document.querySelector(".rec-x").onclick = function () { document.querySelector("#show-hover").style.display = "none" };