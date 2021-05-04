new Swiper('.header__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoHeight: true,
    hideOnClick: true,
    loop: true,
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".header__image"
    },
    autoplay: {
        delay: 3000,
        stopOnLasrSlide: false,
        disableOnInteraction: false,
    },
    speed: 1000,
});

new Swiper('.portfolio__slider', {
    // autoHeight: false,
    spaceBetween: 23,
    slidesPerColumn: 2,
    slidesPerView: 4,
    freeMode: true,
    navigation: {
        nextEl: '.portfolio__button',
    },
    autoplay: {
        delay: 1000,
        stopOnLasrSlide: false,
        disableOnInteraction: false,
    },
    speed: 3000,
});

new Swiper('.testimonials__swiper', {
    navigation: {
        nextEl: '.testimonials__slider-button-next',
        prevEl: '.testimonials__slider-button'
    },
    autoHeight: true,
});

$(document).ready(function () {
    $("#list").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 600);
    });
    $("#list-up").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 600);
    });
});