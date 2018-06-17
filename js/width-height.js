$(function() {
    //This function makes it possible to square images by getting the width of the given image and replace its height with width to make a square
    var imageSquareResizer = (selector) => {
        selector.height(selector.width());
    }
    if($('.corevalue .card-deck .card-header ').length) {
        console.log('test');
        imageSquareResizer($('.corevalue .card-deck .card-header'));
    }
});