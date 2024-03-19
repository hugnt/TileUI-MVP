$(document).ready(function () {
    var navHeight = $('header').height();
    var myBarOffset = $('.landing-menu').offset().top;
    var landingBarHeight = $('.landing-menu').height();
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop(); // Lấy vị trí hiện tại của thanh cuộn
        if (scrollTop + navHeight >= myBarOffset) {
            $('.landing-menu').addClass('fixed-top');
            $('.landing-menu').addClass('fadeInDown');
            $('.landing-menu').addClass('animated');
            $('.landing-menu').css("top", navHeight);
        }
        else {
            $('.landing-menu').removeClass('fadeInDown');
            $('.landing-menu').removeClass('animated');
            $('.landing-menu').removeClass('fixed-top');
            $('.landing-menu').css("top", "auto");

        }
        $('.landing-section').each(function() {
            // let id = $(this).attr('id');
            let topLimit = $(this).offset().top - navHeight - landingBarHeight;
            let botLimit = topLimit + $(this).height();
            if(scrollTop >= topLimit && scrollTop <= botLimit){
                $('.landing-menu a').removeClass('active-landingMenu');
                $(".landing-menu .btn-"+$(this).attr('id')).addClass('active-landingMenu');
            }
        });
    });
    $('html').css("scroll-padding-top", navHeight + landingBarHeight);
    $('.landing-menu a').click(function () {
        $('.landing-menu a').removeClass('active-landingMenu');
        $(this).addClass('active-landingMenu');
    });

});