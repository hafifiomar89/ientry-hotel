/*------------------------------
Mobile Menu (toggleClass to activate transitions)
------------------------------*/

$( ".hamburger" ).click(function() {
    $(".hamburger").toggleClass("is-active--");
    $( ".site-header__block" ).toggleClass( "active--" );
    $("html").toggleClass("open--");
    $(".site-header").toggleClass("open--");
});