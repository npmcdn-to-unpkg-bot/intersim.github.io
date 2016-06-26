$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('#fixed-nav').removeClass('hide-nav');
    } else {
        $('#fixed-nav').addClass('hide-nav');
    }
});