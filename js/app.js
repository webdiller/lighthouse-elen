document.addEventListener("DOMContentLoaded", () => {
  // DEFAULT SCRIPTS
  const defaultScripts = () => {
    const buttons = document.querySelectorAll('[data-trigger][data-type="callModal"]');
    const modals = document.querySelectorAll('[data-type="modal"]');
    const menu = document.getElementById("menu");
    const topNav = document.getElementById("topNav");
    const menuBtn = document.getElementById("menuBtn");

    if (menu && topNav && menuBtn) {
      menuBtn.addEventListener("click", function () {
        menu.classList.toggle("menu_active");
        topNav.classList.toggle("top-nav_active");
      });
    }

    if (buttons) {
      buttons.forEach(item => {
        item.addEventListener("click", function (e) {
          const name = item.dataset.trigger;
          const modal = document.getElementById(name);
          if (modal) {
            modal.classList.add("active");
          }
        });
      });
    }
    if (modals) {
      modals.forEach(item => {
        item.addEventListener("click", function (e) {
          if (
            e.target.classList.contains("modal__top-close-img") ||
            e.target.classList.contains("modal__container") ||
            e.target.classList.contains("modal") ||
            e.target.classList.contains("subscribe-modal__close-img") ||
            e.target.dataset?.type?.includes('modal') 
            ) {
            item.classList.remove("active");
          }
        });
      });
    }
    // setTimeout(() => {
    //   modalSubscribe.classList.add('subscribe-modal_active')
    // }, 10000);
  };
  defaultScripts();

  // HOME PAGE
  const homePage = () => {
    var promotionsSlider = new Swiper("#promotionsSlider", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".promotions__arrows .promotions__arrow.promotions__arrow_next",
        prevEl: ".promotions__arrows .promotions__arrow.promotions__arrow_prev"
      }
    });
  };
  homePage();

  // ABOUT PAGE
  const aboutpage = () => {
    (() => {
      const currentSlideEl = document.getElementById("currentSlide");
      const allSlidesEl = document.getElementById("allSlides");
      const loop = false;
      var textWithSlider = new Swiper("#textWithSlider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: loop,
        navigation: {
          nextEl: ".text-with-slider__arrows .text-with-slider__arrow.text-with-slider__arrow_next",
          prevEl: ".text-with-slider__arrows .text-with-slider__arrow.text-with-slider__arrow_prev"
        },
        on: {
          init: function () {
            const count = this.slides.length;
            const active = this.activeIndex;
            this.slideTo(1);
            if (currentSlideEl && allSlidesEl) {
              if (loop) {
                currentSlideEl.innerHTML = active + 1;
                allSlidesEl.innerHTML = count;
              }
            }
          },
          slideChange: function () {
            const count = this.slides.length;
            const active = this.activeIndex;
            if (currentSlideEl && allSlidesEl) {
              if (loop) {
                currentSlideEl.innerHTML = active + 1;
                allSlidesEl.innerHTML = count;
              }
            }
          }
        }
      });
    })();

    (() => {
      const currentSlideEl = document.getElementById("currentSlideAbout");
      const allSlidesEl = document.getElementById("allSlidesAbout");
      let leftImg = document.getElementById('aboutSliderLeftImg');
      let rightImg = document.getElementById('aboutSliderRightImg');

      const loop = true;
      var abloutSlider = new Swiper("#abloutSlider", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: loop,
        navigation: {
          nextEl: ".about-slider__arrows .about-slider__arrow.about-slider__arrow_next",
          prevEl: ".about-slider__arrows .about-slider__arrow.about-slider__arrow_prev"
        },
        on: {
          init: function () {
            const count = this.slides.length;
            const active = this.activeIndex;

            const currentSlide = document.querySelector('#abloutSlider .swiper-slide-active img');

            if (currentSlideEl && allSlidesEl) {
              if (loop) {
                currentSlideEl.innerHTML = active + 1;
                allSlidesEl.innerHTML = `/ ${count}`;
              }
            }
          },
          slideChange: function () {

            // images
            const currentSlide = document.querySelector('#abloutSlider .swiper-slide-active img');
            leftImg.src = currentSlide.src;

            // counter
            const count = this.slides.length;
            const active = this.activeIndex;
            if (currentSlideEl && allSlidesEl) {
              if (loop) {
                currentSlideEl.innerHTML = active + 1;
                allSlidesEl.innerHTML = `/ ${count}`;
              }
            }
          }
        }
      });
    })();
  };
  aboutpage();
});
