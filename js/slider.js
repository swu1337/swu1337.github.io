$(function() {
    $('.work-button').on('click', function() {
        console.log($('figure'));
        console.log($('.slider figure'));
        for (var i = 0; i < $('.slider figure').length; i++) {
            $('figure').eq(i).css('z-index', $('figure').length - i);
        }
    
        $('.next').on('click', function() {
            var active = $('.active');
            var next = active.next();
            console.log(next.length);
            if(next.is('figure')) {
                console.log('asd');
                next.addClass('active');
                active.animate({opacity: 0}, 1000).removeClass('active');
            } else {
                //$('figure').animate({opacity: 1}, 1000);
                console.log($('.slider figure'));
                
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