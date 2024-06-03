
$(document).ready(function () {

    // CHANGE HEADER WITH SCROLL ----------- //

    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });


    // MOBILE MENU ------------------- //
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.header__menu').toggleClass('open');
        $('body').toggleClass('hidden');
    });



    //  ANIMATION WITH SCROLL ------------------ //

    AOS.init({
        once: true,
        offset: -50,
        duration: 800,
        easing: "ease-in-out",
    });



    $('.booknowbtn').click(function (e) {
        e.preventDefault();
        $('.bokkmeettabbtn').hide();
        $('.bokkmeettab').show();
    })

    $('.backlink').click(function (e) {
        e.preventDefault();
        $('.bokkmeettabbtn').show();
        $('.bokkmeettab').hide();
    })
    // selects
    if ($('select').length) {
        $('.styledselect').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: Infinity,
        });
    }


});