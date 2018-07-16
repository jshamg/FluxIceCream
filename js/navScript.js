function showNav() {
    var x = document.getElementById("topBar");
    if (x.className === "navbar-nav") {
        x.className += " responsive";
    } else {
        x.className = "navbar-nav";
    }
}

/*Thanks to Alice Wonder @ https://stackoverflow.com/questions/10732690/offsetting-an-html-anchor-to-adjust-for-fixed-header/28920612#28920612
* The Function I wrote worked just on the first click,
* but on the second it the navbar overscrolls the div again...
* */
function outsideToHash() {
    var fragment;
    if (window.location.hash) {
        fragment = window.location.hash.substring(1);
        anchorScroll(fragment);
    }
}

function insideToHash(nnode) {
    var fragment;
    fragment = $(nnode).attr('href').substring(1);
    anchorScroll(fragment);
}

function anchorScroll(fragment) {
    var heightOfNav, link;
    heightOfNav = $('.navbar').height();
    link = $('#' + fragment);
    if(fragment == "aboutUs"){
        if(viewportSize.getWidth()>768){
            heightOfNav+=50;
        }
    };
    $('html,body').animate({ scrollTop: link.offset().top - heightOfNav }, 250);
    return false;
}

$(document).ready(function () {
    $("a[href^='#']").bind('click',  function () {insideToHash(this); });
    outsideToHash();
});