var $newsHeader;

function setHeight(a) {
    var height = a.height();
    var width = viewportSize.getWidth();
    var compressor = 0.4;
    if (width<=768){
        a.css('font-size', Math.min(a.width() / (compressor*10)));
    } else {
        a.css({
            'font-size': height + 'px',
            'line-height': height + 'px'
        });
    }
};

$(document).ready(function() {
    $newsHeader = $('#newsHeader');
    setHeight($newsHeader);
    console.log("The height of the newsheader is " + $newsHeader.css('height'));
    console.log("The height of the Font of the newsheader is " + $newsHeader.css('font-size'));
});

$(window).resize(function() {
    setHeight($newsHeader);
    console.log("The width of the Viewport: " + viewportSize.getWidth());
});