$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('#fixed-nav').fadeIn('fast', function () {
          $(this).removeClass('hide-nav');
        })
    } else {
        $('#fixed-nav').fadeOut('fast', function () {
          $(this).addClass('hide-nav');
        })
    }
});