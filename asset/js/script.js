$(document).ready(function () {
  $('.icon-burger').on('click', function () {
    $('.bg-burger').toggleClass('open');
  });
  $('.bg-burger').on('click', function () {
    $('.bg-burger').removeClass('open');
  }).children().click(function (e) {
    return false;
  });
  $('.other .search .icon').on('click', function () {
    $('.box-search').toggleClass('open');
  });
  $('.box-search .close').on('click', function () {
    $('.box-search').removeClass('open');
  });
  $(".font-1").click(function () {
    $(".wrapper-container .article p").css("fontSize", "14px",);
  }),
    $(".font-2").click(function () {
      $(".wrapper-container .article p").css("fontSize", "16px");
    }),
    $(".font-3").click(function () {
      $(".wrapper-container .article p").css("fontSize", "20px");
      $(".wrapper-container .article p").css("lineHeight", "30px");
    })
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $('header').addClass("sticky");
    $('.content-burger').addClass("height");
  }
  else {
    $('header').removeClass("sticky");
    $('.content-burger').removeClass("height");
  }
});

window.onload = function(){ 
  // your code 
};

if ($("#pick-font").length) {
  for (var e, t = document.getElementById("pick-font").getElementsByClassName("a-sticky"), i = 0; i < t.length; i++) t[i].addEventListener("click", function () {
    var e = document.getElementsByClassName("active-sticky-detail");
    e[0].className = e[0].className.replace(" active-sticky-detail", ""), this.className += " active-sticky-detail"
  }), document.getElementById("pick-font").style.display = "flex";
  document.getElementById("pick-font").style.display = "flex"
}