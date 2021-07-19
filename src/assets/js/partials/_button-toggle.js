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