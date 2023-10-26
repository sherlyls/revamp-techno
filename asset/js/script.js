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

function toggle_visibility(e) { var l = document.getElementById(e); "none" == l.style.display ? l.style.display = "block" : l.style.display = "none" } document.querySelector(".rec-x").onclick = function () { document.querySelector("#show-hover").style.display = "none" };

if ($("#size-font").length) {
  for (var e, t = document.getElementById("size-font").getElementsByClassName("font"), i = 0; i < t.length; i++)
      t[i].addEventListener("click", function () {
          var e = document.getElementsByClassName("active");
          (e[0].className = e[0].className.replace("active", "")), (this.className += " active");
      }),
          (document.getElementById("size-font").style.display = "flex");
  document.getElementById("size-font").style.display = "flex";
}