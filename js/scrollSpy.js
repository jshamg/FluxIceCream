//Thanks to 'Eugene Kholyavkin' on github for this simple scrollSpy-script
function scrollSpy() {
    var sections = ['home', 'headerForSortsSite', 'aboutUs', 'calendarSite', 'contactSite', 'mapSite'];
    var current;
    for (var i = 0; i < sections.length; i++) {
        if ( $('#'+sections[i]).offset().top <= $(window).scrollTop() + 300 ) {
            current = sections[i];
        }
    }
    if($('#mapSite').offset().bottom == 0){
        current = sections[5];
    }
    $("nav a[href='#"+current+"']").addClass('active');
    $("nav a").not("a[href='#"+current+"']").removeClass('active');
}
//scrollSpy call
$(document).ready( function() {
    scrollSpy();
});
$(window).scroll( function() {
    scrollSpy();
});