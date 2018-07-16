var $newsHeader;
var $headerForSorts;

/*var $sortsHeader;*/

function setHeight(a) {
    var height = a.height();
    var width = viewportSize.getWidth();
    var compressor = 0.4;
    console.log("a =" + height);
    if (width<=768){
        a.css('font-size', Math.min(a.width() / (compressor*10)));
    } else {
        console.log(a.css('font-size'));
        a.css({
            'font-size': height + 'px',
            'line-height': height + 'px'
        });

        console.log(a.css('font-size'));
        console.log("bip");
    }
};

$(document).ready(function() {
    $newsHeader = $('#newsHeader');
    /*$sortsHeader = $('#sortsHeader');*/
    setHeight($newsHeader);
    console.log("The height is " + $newsHeader.css('height'));
    console.log("The height of the Font is " + $newsHeader.css('font-size'));
    /*setHeight($sortsHeader);*/
    //Dynamically change the Fontsize of the Header
    //of the Sorts Site.
    /*setHeight($headerForSorts);*/
});

$(window).resize(function() {
    setHeight($newsHeader);
    console.log("Give me the width of the Viewport: " + viewportSize.getWidth());
    /*setHeight($headerForSorts);*/
    /*setHeight($sortsHeader);*/
});