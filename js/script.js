const swiper = new Swiper('.swiper', {
   loop: true,
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
   },
   breakpoints: {
      500: {
         // loop: true,
         // pagination: {
         //    el: '.swiper-pagination',
         // },
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         slidesPerView: 3,
         spaceBetween: 67
      }
   }
});


