
$(document).ready(function () {

    // CHANGE HEADER WITH SCROLL ----------- //

    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });
});