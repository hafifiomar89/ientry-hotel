$('.select-room').click(function(e){
    var $this = $(this).toggleClass('select-room');

    if($this.hasClass('select-room')) {
        $this.text('Select room');
        $(this).closest('.room-list__wrapper').removeClass("selected--");
    } else {
        $this.text('Unselect room');
        $(this).closest('.room-list__wrapper').addClass("selected--");
    }
})

var scrollHeight = true;

if($(".room-reservation__wrapper").length > 0) {
    $(window).on('scroll.paymentBreakdown resize.paymentBreakdown', function() {
        if (scrollHeight == false) {
            return;
        } if ($(window).scrollTop() + $(window).outerHeight() >= $(".room-reservation__details-wrapper").offset().top) {
            $(".room-reservation__wrapper").addClass("toggle-payment-header");
        } else {
            $(".room-reservation__wrapper").removeClass("toggle-payment-header");
        }
    });
}

$(window).triggerHandler('scroll.paymentBreakdown');

$(".room-reservation__mobile").click(function (){
    $('html, body').animate({
        scrollTop: $(".room-reservation__wrapper").offset().top
    }, 300);
});