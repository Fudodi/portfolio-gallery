$(function() {
    const $body = $('body');
    const $popupWindow = $('#js-popupWindow');
    const $popupImgWrapper = $('#js-popupImgWrapper');
    const $popupImage = $('#js-popupImage');
    const $popupSlideWrapper = $('#js-popupSlideWrapper');
    const $popupSlideButtonL = $('#js-popupSlideButtonL');
    const $popupSlideButtonR = $('#js-popupSlideButtonL');
    const $popupSlideBody = $('#js-popupSlideBody');
    const $popupSlideImg = $popupSlideBody.find('.js-popupSlideImg');
    const $popupTitle = $('#js-popupTitle');
    const $popupDetail = $('#js-popupDetail');

    let scrollTop;
    let isSlideshowOn;
    let slideIndex = [];
    let currentIndex;

    // function
    const setSlideshow = function(data) {
        // add translatex to slidebody
        const dataList = data.split(',');
        $.each(dataList, (i, value) => {
            let $target = $popupSlideImg.clone().removeClass('p-dispNone');
            $target.children('img').attr('src', value);
            $target.appendTo($popupSlideBody);
            slideIndex.push(i);
        });
    };

    const resetSlideshow = function() {
        $popupSlideBody.empty();
        slideIndex = [];
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

        let dataSlideshow = $(this).attr('data-slideshow');

        //if it has the slideshow class
        if (dataSlideshow) {
            //show the slideshow
            isSlideshowOn = true;
            $popupImgWrapper.addClass('p-dispNone');
            $popupSlideWrapper.removeClass('p-dispNone');
            setSlideshow(dataSlideshow);
        };
    });

    $('#js-closePopupWindow, #js-closePopupWindowButton').on('click', function(e) {
        //if the slideshow is on
        if (isSlideshowOn) {
            //off the slideshow
            isSlideshowOn = false;
            $popupImgWrapper.removeClass('p-dispNone');
            $popupSlideWrapper.addClass('p-dispNone');
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