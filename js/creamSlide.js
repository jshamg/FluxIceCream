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
            $prev.attr("src","pics/Waldmeister.svg");
            $center.attr("src","pics/Erdbeere.svg");
            $caption.text("Erdbeere");
            $next.attr("src","pics/Vanille.svg");
            break;
        case 2:
            $prev.attr("src","pics/Erdbeere.svg");
            $center.attr("src","pics/Vanille.svg");
            $caption.text("Vanille");
            $next.attr("src","pics/Schoki.svg");
            break;
        case 3:
            $prev.attr("src","pics/Vanille.svg");
            $center.attr("src","pics/Schoki.svg");
            $caption.text("Schokolade");
            $next.attr("src","pics/Mango.svg");
            break;
        case 4:
            $prev.attr("src","pics/Schoki.svg");
            $center.attr("src","pics/Mango.svg");
            $caption.text("Mango");
            $next.attr("src","pics/Waldmeister.svg");
            break;
        case 5:
            $prev.attr("src","pics/Mango.svg");
            $center.attr("src","pics/Waldmeister.svg");
            $caption.text("Waldmeister");
            $next.attr("src","pics/Erdbeere.svg");
            break;
        default:
            $prev.attr("src","pics/Waldmeister.svg");
            $center.attr("src","pics/Erdbeere.svg");
            $caption.text("Erdbeere");
            $next.attr("src","pics/Vanille.svg");
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