/*$(document).ready(function () {
    /!*var h = ($("body").innerHeight() - $(".navbar").height());*!/
    setInterval(function() {
        $("#storeIMG").css("height", ($("body").innerHeight() - $(".navbar").height()));
        $("#storeIMG").css("margin-top", $(".navbar").height());
        $("#storeIMG").css("width", $("body").innerWidth());
    }, 100); // every 1000 ms
});*/




$(document).ready(function() {

    function setHOMEsize() {

        var h = (viewportSize.getHeight() - 64);
        var navheight = $(".navbar").height();
        $("#storeIMG").css("height", h);
        console.log($("body").innerWidth());
        console.log("viewport height: " + viewportSize.getHeight());
        console.log($(".navbar").height());
        $("body").css("margin-top", navheight);
        $("#storeIMG").css("width", $("body").innerWidth());
    };

    function setContactSite() {
        var h = (viewportSize.getHeight() - 64);
        var w = (viewportSize.getWidth());
        console.log("the right height " + h)
        $("#contact-col").css("height", "100%");
        if(h>700){
            if(w<=768){
                $("#contactSite").css("height", h + $("#contactInfo").height());
                $("#contact-col").css("height", $("#contact-col").height()-$("#contactInfo").height());

            } else {
                $("#contactSite").css("height", h);
                $("#contact-col").css("height", "100%");
            }
        } else {
            if(w<=768){
                $("#contactSite").css("height", 700 + $("#contactInfo").height());
                $("#contact-col").css("height", $("#contact-col").height()-$("#contactInfo").height());

            } else {
                $("#contactSite").css("height", 700);
                $("#contact-col").css("height", "100%");
            }
        };
        /*//nicht sicher, obs dynamisch benötigt wird, aber eventuell
        //sonst buganfälliger
        $("#contactForm").css({
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%,-50%)",
            "-ms-transform": "translate(-50%,-50%)",
            "width": "60%"
        });*/
        $("#contactForm textarea").css("height", "60%");
        $("#contactForm input[type=email]").css("height", "10%");
        $("#contactForm button[type=submit]").css("height", "10%");
        console.log("blub" + $("#contactInfo").css("height"));
        console.log("blib" + $("#contact-col").css("height"));
        console.log("blab" + $("#contactForm").css("height"));
        console.log("blob" + $("#contact").css("height"));
        console.log("bleb" + $("#contactSite").css("height"));
    };

    function setCalendarSite() {
        var h = (viewportSize.getHeight() - 64);
        var w = (viewportSize.getWidth());
        console.log("daysNewsInfo height: " + $("#daysNewsInfo").height());
        if (viewportSize.getHeight() <= (($("#daysNewsInfo").height()*1.25)+64)) {
            if(w<=768){
                $("#calendarSite").css("height", 470 + $("#newsInfo").height());
                $("#calendar-col").css("height", $("#calendar").height() - $("#newsInfo").height());
                console.log("wait is the height 1 : " + $("#calendarSite").height());
                console.log("wait is the height 2 : " + h);
            } else {
                    $("#calendarSite").css("height", (($("#daysNewsInfo").height()*1.25)+64));
                    $("#calendar-col").css("height", "100%");
                    console.log("wait is the height 2 : " + $("#calendarSite").height());
            }
        } else {
            if(w<=768){
                $("#calendarSite").css("height", h + $("#newsInfo").height());
                $("#calendar-col").css("height", $("#calendar").height() - $("#newsInfo").height());
                console.log("wait is the height 1 : " + $("#calendarSite").height());
                console.log("wait is the height 2 : " + h);
            } else {
                $("#calendarSite").css("height", h);
                $("#calendar-col").css("height", "100%");
                console.log("wait is the height 2 : " + $("#calendarSite").height());
            }
        }

        console.log("wait is the height of old #calendar-col: " + $("#calendar-col").height());
        /*var oldHeight = $("#calendar-col").height();
        if($("#calendar-col").height() <= 270){
            var calSiteHeight =  h + $("#newsInfo").height() + ((270 - oldHeight);
            $("#calendar-col").css("height", 270);
            $("#calendarSite").css("height", $("#calendar").height()*1.25);
        }*/
        console.log("wait is the height of new #calendar-col: " + $("#calendar-col").height());
        console.log("wait is the height of #newsInfo: " + $("#newsInfo").height());
        console.log("wait is the height of #calendarSite: " + $("#calendarSite").height());


    };


    setHOMEsize();
    setContactSite();
    setCalendarSite();


    /*var res = null;*/
    $(window).resize(function() {
        setHOMEsize();
        setContactSite();
        setCalendarSite();
        /*if(res !== null) {
            window.clearTimeout(res);
        }


        res = setTimeout(function() {
            setHOMEsize();
        }, 1000);*/
    });
});

function resizePadding() {
    $("body").css("margin-top", $(".navbar").height());
    console.log($(".navbar").height())
}


