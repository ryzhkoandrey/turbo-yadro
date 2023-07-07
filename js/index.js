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

// FAQ

$('.faq-item__top').each(function() {
   if ($(this).parent('.faq-item').hasClass('faq-item--active')) {
      $(this).siblings('.faq-item__content').slideToggle(300);
   }
});

$('.faq-item__top').click(function() {
   $(this).parent('.faq-item').toggleClass('faq-item--active')
	$(this).siblings('.faq-item__content').slideToggle(300);
});