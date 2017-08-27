$(function() {
    var title = $('.title');
    title.click(function() {
        var showCurrent = $(this).next().css("display");
        if (showCurrent === 'none') {
            $(this).next().slideDown();
            $(this).children().stop().animate({ "left": "-400px" }, 500)
        } else {
            $(this).next().slideUp();
            $(this).children().stop().animate({ "left": "0" }, 500)
        };

    })
})