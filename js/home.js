$(document).ready(function() {
    function resizeHome() {
        $("#slogan").css("width", "60%");
        $("#sloganLogo").css("width", "40%");
        $("#slogan").css("height", "auto");
        $("#sloganLogo").css("height", "auto");
        if ($("#slogan").height() + $("#sloganLogo").height() >= $("#storeIMG").height()) {
            while ($("#slogan").height() + $("#sloganLogo").height() >= $("#storeIMG").height()){
                var heightofslogan = $("#slogan").height();
                var heightofsloganLogo = $("#sloganLogo").height();
                $("#slogan").css("height", heightofslogan - 10);
                $("#sloganLogo").css("height", heightofsloganLogo - 20);
            }
        }
    };
    resizeHome();

    $(window).resize(function () {
        resizeHome();
    });
});