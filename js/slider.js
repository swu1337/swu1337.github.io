$(function() {
    var clicked = false;
    $('#imperium').on('click', function(e) {
        if(!clicked) {
            for (var i = 0; i < $('.slider figure').length; i++) {
                $('.slider figure').eq(i).css('z-index', $('.slider figure').length - i);
            }
            clicked = true;
        }

        $('.next').on('click', function() {
            var active = $('.active');
            var next = active.next();

            if(next.is('figure')) {
                next.addClass('active');
                active.animate({opacity: 0}, 1000).removeClass('active');
            } else {
                var next = $('.slider figure').first();
                next.animate({opacity: 1}, 1000, function() {
                    $('.slider figure').css('opacity', 1);
                });
                next.addClass('active');
                active.removeClass('active');
            }
        });
    
        $('.prev').on('click', function() {
            var active = $('.active');
            var prev = active.prev();
    
            if(prev.is('figure')) {
                prev.addClass('active').animate({opacity: 1}, 1000);
                active.removeClass('active');
            } else {
                //$('figure:not(:last)').animate({opacity: 0}, 1000);
                $('.slider figure:not(:last):not(:first)').css('opacity', 0);
                active.animate({opacity: 0}, 1000);
                var prev = $('.slider figure').last();
                prev.addClass('active');
                active.removeClass('active');
            }
        });
    })
});