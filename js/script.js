const swiper = new Swiper('.best-sellers__slider', {
    loop: true, // volta pro início quando chega no fim

    slidesPerView: 3, // quantos cards aparecem
    spaceBetween: 5, // espaço entre eles

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});
