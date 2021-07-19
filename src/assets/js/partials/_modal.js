$('.modal-trigger-button').on('click', function(){

    var target = $(this).data('modal');
    openModal(target);
});

function openModal(id){
    var modal = $('#'+id);
    var modalClose = modal.find('.modal__close');

    $('body').css('overflow','hidden');
    modal.addClass('active--');
    modal.fadeIn('200');

    modalClose.on('click', function(){
        modal.removeClass('active--');
        modal.hide();
        $('body').css('overflow','auto');

        modalClose.off('click');
    });

    var modalSlick = modal.find(".room-carousel");

    if (modalSlick.length > 0) {
        $('.room-carousel').slick('setPosition');
        $(window).triggerHandler('resize.rowEqualiser');
    }
}