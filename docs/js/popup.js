$(function() {
    const $body = $('body');
    const $popupWindow = $('#js-popupWindow');
    const $popupImage = $('#js-popupImage');
    const $popupTitle = $('#js-popupTitle');
    const $popupDetail = $('#js-popupDetail');

    let scrollTop;

    $('.js-popupImage').on('click', function() {
        scrollTop = $(window).scrollTop();
        console.log ($(this).attr('data-title'));

        $body.addClass('fixed').css({
            top: -scrollTop
        });
        $popupWindow.removeClass('p-dispNone');

        $popupImage.attr('src', $(this).attr('data-src'));
        $popupTitle.append($(this).attr('data-title'));
        $popupDetail.append($(this).attr('data-detail'));
    });

    $('#js-closePopupWindow, #js-closePopupWindowButton').on('click', function(e) {
        $body.removeClass('fixed');
        $(window).scrollTop(scrollTop);
        $popupWindow.addClass('p-dispNone');
        $popupTitle.empty();
        $popupDetail.empty();
    });

    $('#js-popupWindowBody').on('click', function(e) {
        e.stopPropagation();
    });
});