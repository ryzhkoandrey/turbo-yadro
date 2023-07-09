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
      $(this).siblings('.faq-item__content').slideDown(300);
   }
});

$('.faq-item__top').click(function() {
   $('.faq-item__top').parent('.faq-item').removeClass('faq-item--active');
   $('.faq-item__top').siblings('.faq-item__content').slideUp(300);

   $(this).parent('.faq-item').addClass('faq-item--active')
	$(this).siblings('.faq-item__content').slideDown(300);
});

// MODAL

const modal = new GraphModal();

$('#form-field-password').hide();
$('#btn-login').hide();

$('#btn-password').click(function(e) {
   e.preventDefault();
   $('#form-field-password').slideDown(200);
   $('#btn-password').hide(0);
   $('#btn-login').slideDown(200);
});

$('#btn-login-modal').click(function(e) {
   e.preventDefault();
});

$('#btn-register-modal').click(function(e) {
   e.preventDefault();
});