$(function() {
    const $body = $('body');
    const $popupWindow = $('#js-popupWindow');

    let scrollTop;

    $('.js-popupImage').on('click', function() {
        scrollTop = $(window).scrollTop();
        console.log ($(this).attr('data-title'));

        $body.addClass('fixed').css({
            top: -scrollTop
        });
        $popupWindow.removeClass('p-dispNone');
    });

    $('#js-closePopupWindow, #js-closePopupWindowButton').on('click', function(e) {
        $body.removeClass('fixed');
        $(window).scrollTop(scrollTop);
        $popupWindow.addClass('p-dispNone');
    });

    $('#js-popupWindowBody').on('click', function(e) {
        e.stopPropagation();
    });
});