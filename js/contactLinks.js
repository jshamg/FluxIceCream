$(window).on('load', function () {
    $("#telephone").click(function(){
        location.href='tel:+1234567890';
    });

    $("#mail").click(function(){
        location.href='mailto:fluxicecream@gmail.com';
    });

    $("#facebook").click(function(){
        window.open('http://www.facebook.com','_blank');
    });

    $("#instagram").click(function(){
        window.open('http://www.instagram.com','_blank');
    });

    function mailOverflow(){
        if (viewportSize.getWidth() <= 870 && viewportSize.getWidth() >= 768) {
            $(".vertContentContactInfo a").css('font-size', '0.75rem');
        } else {
            $(".vertContentContactInfo a").css('font-size', '1rem');
        }
    }

    mailOverflow();

    $(window).resize(function() {
        mailOverflow();
    });
});
