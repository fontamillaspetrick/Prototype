// header function
var headerScrolled = () => {
  function checkScroll() {
    if ($(window).scrollTop() >= 50) {
      $(".header-main").addClass("header-scrolled");
    } else {
      $(".header-main").removeClass("header-scrolled");
    }
  }
  
  $(document).ready(function() {
    checkScroll();
    $(window).scroll(checkScroll);
  });
}

// Swiper JS

var swipers = () => {
  var swiperHero = new Swiper(".swiper-hero", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    loop : true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiperClient = new Swiper(".swiper-client", {
    slidesPerView: 1,
    loop : true,
    spaceBetween: 5,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
  });

}

// initialize the functions
headerScrolled();
swipers();