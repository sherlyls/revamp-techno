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