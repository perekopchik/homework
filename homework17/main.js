$(function () {
    let current;
    $('img').click(function () {
        $('.js--modal').show();
        let currentImg = $(this).attr('src');
        current = $(this).parent();
        $('.js--modal__content').children().attr('src', currentImg)
        $(current).addClass('active');
    })
    $('.js--modal__close').click(function () {
        $('.js--modal').hide();
    })
    $('.js--modal__next').click(function () {
        if ($(current).not('#last').length) {
            current.removeClass('active');
            current = current.next().addClass('active');
            $('.js--modal__content').children().attr('src', $(current).children().attr('src'));
        }
    })
    $('.js--modal__prev').click(function () {
        if ($(current).not('#first').length) {
            current.removeClass('active');
            current = current.prev().addClass('active');
            $('.js--modal__content').children().attr('src', $(current).children().attr('src'));
        }
    })
})