$(document).ready(function() {
    $('.icon-burger').click(function() {
      $(this).siblings(".content-burger").toggle();
    });
  });

  $(document).ready(function() {
    $('.search .icon').on("click",function(){
      $(".box-search form input").css("display","block")
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