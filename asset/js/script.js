$(document).ready(function() {
    $('.icon-burger').click(function() {
      $(this).siblings(".content-burger").toggle();
    });
  });

  $(window).scroll(function() {

    if ($(this).scrollTop() > 50){  
        $('#content').addClass("content_fixed");
    }
    else{
        $('#content').removeClass("content_fixed");
    }
});