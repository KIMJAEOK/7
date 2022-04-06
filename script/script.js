$(function(){
    $('nav>ul>li').hover(function(){
        $(this).find('.submenu').stop().slideDown(400);
    },
    function(){
        $(this).find('.submenu').stop().slideUp(400);
    });

    var x = 0;
    setInterval(function(){
        if(x<2){
            x++;
        } else {
            x=0;
        }
        var sp = x * (-300)+'px';
        $('.slideList').animate({top:sp},400);
    },3000);

    $('.layerPopup').on('click', function(){
        $('#popup').fadeIn();
    });
    $('.close').on('click', function(){
        $('#popup').fadeOut();
    });

});