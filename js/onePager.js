$(document).ready(function() {

    function setPagesize() {
        resizePadding();
        var h = (viewportSize.getHeight() - $(".navbar").height() - $("#footer").height());
        $("#pageStuff").css("height", h);
        $("#content").css("height", h - $("#header").height());
        console.log("bruv" + h)
        console.log("The viewport height: " + viewportSize.getHeight());
        console.log("The height of the navbar: " + $(".navbar").height());
        console.log("The height of the footer: " + $("#footer").height());
    };


    setPagesize();
    $("#header").fitText(3);

    //Das folgende Auskommentierte könnte man verwenden um ein dalay
    //beim resizen zu erhalten, falls Javascript performance nicht
    //mehr ausreicht
    /*var wait = null;*/
    $(window).resize(function() {
        setPagesize();
        /*if(wait !== null) {
            window.clearTimeout(wait);
        }


        wait = setTimeout(function() {
            setPagesize();
        }, 1000);*/
    });
});

function resizePadding() {
    $("body").css("margin-top", $(".navbar").height());
}