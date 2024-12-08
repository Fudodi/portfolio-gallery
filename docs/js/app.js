$(function() {
    const $body = $('body');
    const $popupWindow = $('#js-popupWindow');
    const $popupImage = $('#js-popupImage');
    const $popupTitle = $('#js-popupTitle');
    const $popupDetail = $('#js-popupDetail');

    let scrollTop;
    let isSlideshowOn;

    // function
    const setSlideshow = function() {
        console.log ('slide');

    };

    const resetSlideshow = function() {
        console.log ('slideoff');
    };

    // events
    $('.js-popupImage').on('click', function() {
        scrollTop = $(window).scrollTop();

        $body.addClass('fixed').css({
            top: -scrollTop
        });
        $popupWindow.removeClass('p-dispNone');

        $popupImage.attr('src', $(this).attr('data-src'));
        $popupTitle.append($(this).attr('data-title'));
        $popupDetail.append($(this).attr('data-detail'));

        //if it has the slideshow class
        if ($(this).attr('data-slideshow')) {
            //show the slideshow
            isSlideshowOn = true;
            setSlideshow();
        };
    });

    $('#js-closePopupWindow, #js-closePopupWindowButton').on('click', function(e) {
        //if the slideshow is on
        if (isSlideshowOn) {
            //off the slideshow
            isSlideshowOn = false;
            resetSlideshow();
        }

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