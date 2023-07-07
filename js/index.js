// REVIEWS

const reviewsSlider = new Swiper('.reviews__slider', {
   slidesPerView: 2,
   spaceBetween: 40,

   navigation: {
      prevEl: '.reviews-nav__btn--prev',
      nextEl: '.reviews-nav__btn--next',
   },

   pagination: {
      el: '.reviews-nav__pagination',
      type: 'fraction',
   },
});