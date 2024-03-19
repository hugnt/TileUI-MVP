$(document).ready(function(){
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop(); // Lấy vị trí hiện tại của thanh cuộn
        var myDivOffset = $('section.back-pos').offset().top; // Lấy vị trí của phần tử div
        if(scrollTop >= myDivOffset){
            $('.back-to-top').css("display","block");
            $('.back-to-top').addClass('fadeIn');
        }
        else{
            $('.back-to-top').removeClass('fadeIn');
            $('.back-to-top').css("display","none");
            
        }
        if (scrollTop >= 100) { // Kiểm tra nếu trang web được cuộn đến phần tử div
          $('header').addClass('dynamic-menu');
          $('header').addClass('fadeInDown');
          $('header').addClass('animated');
          $('header').removeClass('static-menu')
          $('header').addClass('fixed-top')
        }
        else{
            $('header').removeClass('dynamic-menu');
            $('header').removeClass('fadeInDown');
            $('header').removeClass('animated');
            $('header').removeClass('fixed-top')
            $('header').addClass('static-menu')
        }
      });

      $('.back-to-top').click(function(){
            $(window).scrollTop(0);
      });

      var lang = true;
      $('header .language').click(function(){
        lang=!lang;
        if(lang) $(this).text('VI');
        else $(this).text('EN');
      });


});