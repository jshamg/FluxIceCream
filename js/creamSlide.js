var slideIndex = 1;

$(document).ready(function() {
    showSlides(slideIndex);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var $center = $("#cream");
    var $next = $("#creamNext");
    var $prev = $("#creamPrev");
    var $caption = $("#captionSorte");
    if (n > 5) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = 5
    } else if (n >= 1 && n <= 5) {
        slideIndex = n;
    }
    switch(slideIndex) {
        case 1:
            $prev.attr("src","pics/waldmeister.svg");
            $center.attr("src","pics/erdbeere.svg");
            $caption.text("Erdbeere");
            $next.attr("src","pics/vanille.svg");
            break;
        case 2:
            $prev.attr("src","pics/erdbeere.svg");
            $center.attr("src","pics/vanille.svg");
            $caption.text("Vanille");
            $next.attr("src","pics/schoki.svg");
            break;
        case 3:
            $prev.attr("src","pics/vanille.svg");
            $center.attr("src","pics/schoki.svg");
            $caption.text("Schokolade");
            $next.attr("src","pics/mango.svg");
            break;
        case 4:
            $prev.attr("src","pics/schoki.svg");
            $center.attr("src","pics/mango.svg");
            $caption.text("Mango");
            $next.attr("src","pics/waldmeister.svg");
            break;
        case 5:
            $prev.attr("src","pics/mango.svg");
            $center.attr("src","pics/waldmeister.svg");
            $caption.text("Waldmeister");
            $next.attr("src","pics/erdbeere.svg");
            break;
        default:
            $prev.attr("src","pics/waldmeister.svg");
            $center.attr("src","pics/erdbeere.svg");
            $caption.text("Erdbeere");
            $next.attr("src","pics/vanille.svg");
    }
    //Noch schnell das Cetering für die Sorten mit
    //FITTEXT hinzugefügt...
    jQuery("#captionSorte").fitText(0.7);
    //noch ein schicker Fade dazu extra für dich Ugo,
    //mal sehen, ob du das liest :D
    $caption.fadeTo(0,0.30).fadeTo(150,1);
    $prev.fadeTo(0,0.30).fadeTo(150,1);
    $center.fadeTo(0,0.30).fadeTo(150,1);
    $next.fadeTo(0,0.30).fadeTo(150,1);
}