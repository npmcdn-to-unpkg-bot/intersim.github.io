$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('#fixed-nav').fadeIn(200, function () {
          $(this).removeClass('hide-nav').css('display', 'flex');
        })
    } else {
        $('#fixed-nav').fadeOut(200, function () {
          $(this).addClass('hide-nav');
        })
    }
});