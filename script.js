// JavaScript for carousel
$(document).ready(function(){
    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');

    $('#carouselExampleIndicators').carousel();
});

// JavaScript for gallery
document.addEventListener('DOMContentLoaded', function() {
    var galleryContainer = document.querySelector('.gallery .row');

    var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

    images.forEach(function(image) {
        var imgElement = document.createElement('img');
        imgElement.setAttribute('src', image);
        imgElement.setAttribute('alt', 'Gallery Image');
        imgElement.classList.add('col-md-4', 'mb-3');
        galleryContainer.appendChild(imgElement);
    });
});
