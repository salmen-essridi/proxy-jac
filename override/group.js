
//alert('group.js');
//16
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    "session_source" : document.referrer,
  //  "session_useragent" : new BrowserDetector(window.navigator.userAgent).parseUserAgent(),
    "pageCategory": "product page",
    "pageSpecific": "",
    "user_wishListProducts":"",
    "site_country":"France",
    "site_language":"fr",
    "currency": "EUR",
    
    "page_name":"bebe::bebe-fille::combinaison-bloomer-et-salopette::ensemble-bebe-fille-ceremonie"
    
});
//JACADI.dataLayerUser.loadUser();
//20
//if(JACADI.slider){
    //JACADI.slider.sectionAd(document.querySelector('.jac-section-ad-splide'));
  //}
//23 

/*
$.getParameters = function(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi,
        function(m, key, value) {
            vars[key] = value !== undefined ? value : '';
        });

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
};

$.getParameters('reserv') === 'true' && $("#reservProduct").trigger('click');
*/
//24 
//if(JACADI.slider){
   // JACADI.slider.productLook(document.querySelector('.jac-product-look-carousel'));
//}


function loadImage() {
    function generateSlideHTML(imageSrc) {
        return `
        <li class="splide__slide">
                <img width="400" height="400" fetchpriority="high" src="${imageSrc}" alt="Placeholder Image" tgid="jac-img-50" loading="lazy">
        </li>
        `;
    }

    // Example list of image sources
    var imageSources = [
        "/medias/product-2037233-701-P-01.jpg?context=bWFzdGVyfGltYWdlc3w2NzExNjl8aW1hZ2UvanBlZ3xoM2QvaDczLzk4ODM1ODU3MDgwNjIvcHJvZHVjdF8yMDM3MjMzXzcwMV9QXzAxLmpwZ3w3MGRlMzZjOWNlOGQyYTQ4ZGMyZmY2OWQ4M2Y5NjYwMzRjOTA2ZDg0NmJmMWFkNjZkMTE2YWUwZTU5MGE3NmQ3",
        "/medias/product-2037233-701-P-02.jpg?context=bWFzdGVyfGltYWdlc3wxMTA1MzE0fGltYWdlL2pwZWd8aDI5L2g3ZS85ODgyNjI0Njg4MTU4L3Byb2R1Y3RfMjAzNzIzM183MDFfUF8wMi5qcGd8MzdmN2VmNGQ3OWY4ZWYyZjgyNjUyYTlmZGIxMjk3YzlhZjIzNTlmOTNmZWM4NDgxZjc5NmVmODJmNzExOWMwOQ",
        "/medias/product-2037233-701-P-03.jpg?context=bWFzdGVyfGltYWdlc3w5OTIzNDd8aW1hZ2UvanBlZ3xoOWYvaDI5Lzk4ODI2MjUwMTU4MzgvcHJvZHVjdF8yMDM3MjMzXzcwMV9QXzAzLmpwZ3wwNDM5MjU0MGZjMmI3ODEzNmM2OThjNGY1ZTQ1ZDYwMzc1ZTgzOTA2OWFmYThhMTA0NGYzZWIyZGMzMTA3NzQ3",
       
    ];

    // Get the elements by class name
    var carouselList = document.getElementById('list-xxx');

    // Remove the first element in the list
//carouselList.removeChild(carouselList.firstElementChild);

    // Loop through the list elements
    imageSources.forEach(function(imageSrc) {
        var slideHTML = generateSlideHTML(imageSrc);
        // Append generated HTML to the current list element
        carouselList.insertAdjacentHTML('beforeend', slideHTML);
    });
}


    document.IsSplideLoaded = false;

function nextSlide(param) {
    if (!document.IsSplideLoaded) {
        var carouselList = document.getElementById('list-xxx');

    // Remove the first element in the list
    carouselList.removeChild(carouselList.firstElementChild);

    loadImage();
    document.IsSplideLoaded = true;
    

    JACADI.sss =  new Splide('#zzzz', {
        pagination: false,
        start  : 1,
        arrows: true,
        lazyLoad: 'nearby',
        breakpoints: {
            768: {
                pagination: true,
            }
        }
    }).mount();

}

}


