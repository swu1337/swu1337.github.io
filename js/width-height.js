$(function() {
    //This function makes it possible to square images by getting the width of the given image and replace its height with width to make a square
    var imageSquareResizer = selector => { selector.height(selector.width()) };

    if($('.corevalue .card-deck .card-header').length) imageSquareResizer($('.corevalue .card-deck .card-header'));
    if($('.skills .pro-skills .skill-holder').length) imageSquareResizer($('.skills .pro-skills .skill-holder'));
});