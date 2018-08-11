$(document).ready(function() {

    function setHOMEsize() {

        var h = (viewportSize.getHeight() - 64);
        var navheight = $(".navbar").height();
        $("#storeIMG").css("height", h);
        console.log("The viewport height: " + viewportSize.getHeight());
        console.log("The height of the navbar: " + $(".navbar").height());
        $("body").css("margin-top", navheight);
        $("#storeIMG").css("width", $("body").innerWidth());
    };

    function setContactSite() {
        var h = (viewportSize.getHeight() - 64);
        var w = (viewportSize.getWidth());
        console.log("The height minus the navbar: " + h)
        $("#contact-col").css("height", "100%");
        if(h>700){
            if(w<=768){
                $("#contactSite").css("height", h + $("#contactInfo").height());
                $("#contact-col").css("height", $("#contact-col").height()-$("#contactInfo").height() - 40);

            } else {
                $("#contactSite").css("height", h);
                $("#contact-col").css("height", "100%");
            }
        } else {
            if(w<=768){
                $("#contactSite").css("height", 700 + $("#contactInfo").height());
                $("#contact-col").css("height", $("#contact-col").height()-$("#contactInfo").height() - 40);

            } else {
                $("#contactSite").css("height", 700);
                $("#contact-col").css("height", "100%");
            }
        };
        $("#contactForm textarea").css("height", "60%");
        $("#contactForm input[type=email]").css("height", "10%");
        $("#contactForm button[type=submit]").css("height", "10%");
    };

    function setCalendarSite() {
        var h = (viewportSize.getHeight() - 64);
        var w = (viewportSize.getWidth());
        console.log("The height of daysNewsInfo height: " + $("#daysNewsInfo").height());
        if (viewportSize.getHeight() <= (($("#daysNewsInfo").height()*1.25)+64)) {
            if(w<=768){
                $("#calendarSite").css("height", ((470)+64) + $("#newsInfo").height());
                $("#calendar-col").css("height", $("#calendar").height() - $("#newsInfo").height());
            } else {
                $("#calendarSite").css("height", (($("#daysNewsInfo").height()*1.25)+64));
                $("#calendar-col").css("height", "100%");
            }
        } else {
            if(w<=768){
                $("#calendarSite").css("height", h + $("#newsInfo").height());
                $("#calendar-col").css("height", $("#calendar").height() - $("#newsInfo").height());
            } else {
                $("#calendarSite").css("height", h);
                $("#calendar-col").css("height", "100%");
            }
        }
        console.log("What is the height of #newsInfo: " + $("#newsInfo").height());
        console.log("What is the height of #calendarSite: " + $("#calendarSite").height())
    };


    setHOMEsize();
    setContactSite();
    setCalendarSite();

//Das folgende Auskommentierte könnte man verwenden um ein dalay
//beim resizen zu erhalten, falls Javascript performance nicht
//mehr ausreicht
    /*var wait = null;*/
    $(window).resize(function() {
        setHOMEsize();
        setContactSite();
        setCalendarSite();
        /*if(wait !== null) {
            window.clearTimeout(wait);
        }


        wait = setTimeout(function() {
            setHOMEsize();
        }, 1000);*/
    });
});

function resizePadding() {
    $("body").css("margin-top", $(".navbar").height());
}


