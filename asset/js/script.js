$(document).ready(function() {
    $('.icon-burger').click(function() {
      $(this).siblings(".content-burger").toggle();
    });
  });

  $(window).scroll(function() {

    if ($(this).scrollTop() > 10){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});