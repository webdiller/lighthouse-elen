document.addEventListener("DOMContentLoaded", () => {
  // DEFAULT SCRIPTS
  const defaultScripts = () => {
    const buttons = document.querySelectorAll('[data-trigger][data-type="callModal"]');
    const modals = document.querySelectorAll('[data-type="modal"]');
    const counters = document.querySelectorAll('[data-type="counter"]');
    const menu = document.getElementById("menu");
    const items = document.querySelectorAll("#paymentAccordion .payment-delivery__item-title");
    const topNavItems = document.querySelectorAll("#menu .menu__item-title");
    const menuClose = document.getElementById("menuClose");
    const topNav = document.getElementById("topNav");
    const menuBtn = document.getElementById("menuBtn");
    const search = document.getElementById("search");
    const callSearch = document.getElementById("callSearch");
    const searchReset = document.getElementById("searchReset");
    const preloader = document.getElementById("preloader");
    const preloaderBtn = document.getElementById("preloaderBtn");

    if (preloader && preloaderBtn) {
      preloaderBtn.addEventListener("click", function (e) {
        preloader.classList.toggle("active");
      });
    }

    if (topNavItems) {
      topNavItems.forEach(item => {
        item.addEventListener("click", function (e) {
          item.classList.toggle("active");
        });
      });
    }

    if (search && callSearch) {
      callSearch.addEventListener("click", function (e) {
        search.classList.toggle("active");
        if (window.innerWidth <= 1100) {
          document.documentElement.classList.toggle("hiddenY");
        }
      });
      searchReset.addEventListener("click", function (e) {
        search.classList.remove("active");
        document.documentElement.classList.remove("hiddenY");
      });
    }

    if (counters && counters.length > 0) {
      let totalPrice = document.querySelector("#basketTotal span").innerHTML.trim();
      totalPrice = parseInt(totalPrice.replace(/\s/g, ""));

      counters.forEach(counter => {
        const minus = counter.querySelector("[data-type='counterMinus']");
        const plus = counter.querySelector("[data-type='counterPlus']");
        const price = Number(counter.querySelector("[data-price]").dataset.price);
        const result = counter.nextElementSibling.querySelector("span");
        let counterInput = counter.querySelector("[data-type='counterInput']");
        const remove = counter.parentElement.querySelector("[data-remove]");

        minus.addEventListener("click", function () {
          if (Number(counterInput.value) !== 1) {
            counterInput.value = Number(counterInput.value) - 1;
            result.innerHTML = price * counterInput.value;
          }
        });
        plus.addEventListener("click", function () {
          counterInput.value = Number(counterInput.value) + 1;
          result.innerHTML = price * counterInput.value;
        });
        remove.addEventListener("click", function (e) {
          this.parentElement.parentElement.remove();
        });
      });
    }

    if (menu && topNav && menuBtn && menuClose) {
      menuBtn.addEventListener("click", function () {
        menu.classList.toggle("menu_active");
        topNav.classList.toggle("top-nav_active");
        search.classList.toggle("active-menu");
        document.documentElement.classList.toggle("hiddenY");
      });
      menuClose.addEventListener("click", function () {
        menu.classList.remove("menu_active");
        topNav.classList.remove("top-nav_active");
        search.classList.remove("active-menu");
        document.documentElement.classList.remove("hiddenY");
      });
    }

    if (buttons) {
      buttons.forEach(item => {
        item.addEventListener("click", function (e) {
          const name = item.dataset.trigger;
          const modal = document.getElementById(name);
          if (modal) {
            modal.classList.add("active");
            document.documentElement.classList.add("hiddenY");
          }
        });
      });
    }

    if (modals) {
      modals.forEach(item => {
        item.addEventListener("click", function (e) {
          if (e.target.classList.contains("modal__top-close-img") || e.target.classList.contains("modal__container") || e.target.classList.contains("modal") || e.target.classList.contains("table-size") || e.target.classList.contains("filter__header-close") || e.target.classList.contains("table-size__header-close") || e.target.classList.contains("subscribe-modal__close-img") || e.target.dataset?.type?.includes("modal")) {
            item.classList.remove("active");
            document.documentElement.classList.remove("hiddenY");
          }
        });
      });
    }
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
      },
      breakpoints: {
        // when window width is >= 0
        0: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 320px
        576: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  };
  homePage();

  // ABOUT PAGE
  const aboutpage = () => {
    (() => {
      // textWithSlider
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
        breakpoints: {
          // when window width is >= 0
          0: {
            spaceBetween: 10
          },
          // when window width is >= 991px
          991: {
            spaceBetween: 30
          }
        },
        on: {
          init: function () {
            const count = this.slides.length;
            const active = this.activeIndex;
            this.slideTo(1);
            if (currentSlideEl && allSlidesEl) {
              currentSlideEl.innerHTML = this.activeIndex;
              allSlidesEl.innerHTML = `/ ${this.slides.length}`;
            }
          },
          slideChange: function () {
            const count = this.slides.length;
            const active = this.activeIndex;
            if (currentSlideEl && allSlidesEl) {
              currentSlideEl.innerHTML = this.activeIndex + 1;
              allSlidesEl.innerHTML = `/ ${this.slides.length}`;
            }
          }
        }
      });

      // topGoodsSlider
      var topGoodsSlider = new Swiper("#topGoodsSlider", {
        slidesPerView: 5.1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".top-goods__arrows .top-goods__arrow.top-goods__arrow_next",
          prevEl: ".top-goods__arrows .top-goods__arrow.top-goods__arrow_prev"
        },
        on: {
          init: function () {},
          slideChange: function () {}
        }
      });
    })();

    (() => {
      const currentSlideEl = document.getElementById("currentSlideAbout");
      const allSlidesEl = document.getElementById("allSlidesAbout");

      let leftImgWrapper = document.getElementById("aboutSliderLeftImgWrapper");
      let leftImg = document.getElementById("aboutSliderLeftImg");

      let rightImgWrapper = document.getElementById("aboutSliderRightImgWrapper");
      let rightImg = document.getElementById("aboutSliderRightImg");

      var aboutSlider = new Swiper("#aboutSlider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        navigation: {
          nextEl: ".about-slider__arrows .about-slider__arrow.about-slider__arrow_next",
          prevEl: ".about-slider__arrows .about-slider__arrow.about-slider__arrow_prev"
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        },
        on: {
          init: function () {
            const count = this.slides.length;
            const active = this.activeIndex;

            const currentSlide = document.querySelector("#aboutSlider .swiper-slide-active img");

            currentSlideEl.innerHTML = this.activeIndex + 1;
            allSlidesEl.innerHTML = `/ ${this.slides.length}`;
          },
          transitionEnd: function () {
            // images
            const currentSlide = document.querySelector("#aboutSlider .swiper-slide-active img");

            leftImgWrapper.classList.add("changing");
            rightImgWrapper.classList.add("changing");
            setTimeout(() => {
              leftImg.src = currentSlide.src;
              rightImg.src = currentSlide.src;
            }, 350);
            setTimeout(() => {
              leftImgWrapper.classList.remove("changing");
              rightImgWrapper.classList.remove("changing");
            }, 500);

            // counter
            currentSlideEl.innerHTML = this.activeIndex;
            allSlidesEl.innerHTML = `/ ${this.slides.length}`;

            if (currentSlideEl && allSlidesEl) {
              currentSlideEl.innerHTML = this.activeIndex + 1;
              allSlidesEl.innerHTML = `/ ${this.slides.length}`;
            }
          }
        }
      });
    })();
  };
  aboutpage();

  // CARD PAGE
  const cardPage = () => {
    const tabs = document.getElementById("tabs");
    const cardThumbnails = document.querySelectorAll("#cardThumbnails .card__media-thumbnail-img");
    const cardThumbnailsMain = document.getElementById("cardThumbnailsMain");
    const cardThumbnailsMainImg = document.getElementById("cardThumbnailsMainImg");
    const cardThumbnailsBottom = document.getElementById("cardThumbnailsBottom");
    const cardThumbnailsBottomImg = document.getElementById("cardThumbnailsBottomImg");

    if (cardThumbnails && cardThumbnailsMain && cardThumbnailsBottom) {
      cardThumbnails.forEach(item => {
        item.addEventListener("click", function () {
          cardThumbnailsMain.classList.add("changing");
          cardThumbnailsBottom.classList.add("changing");
          cardThumbnails.forEach(i => i.parentElement.classList.remove("active"));
          this.parentElement.classList.add("active");
          setTimeout(() => {
            cardThumbnailsMainImg.src = item.src;
            cardThumbnailsBottomImg.src = item.src;
          }, 350);
          setTimeout(() => {
            cardThumbnailsMain.classList.remove("changing");
            cardThumbnailsBottom.classList.remove("changing");
          }, 500);
        });
      });
    }

    if (tabs) {
      const tabTopItems = tabs.querySelectorAll("[data-tab]");
      const tabElem = tabs.querySelectorAll("[data-tab-el]");

      tabTopItems.forEach(item => {
        item.addEventListener("click", function () {
          tabTopItems.forEach(i => i.classList.remove("active"));
          tabElem.forEach(i => i.classList.remove("active"));
          this.classList.add("active");
          document.getElementById(this.dataset.tab).classList.add("active");
        });
      });
    }
  };
  cardPage();

  // CATALOG PAGE
  const catalogPage = () => {
    const items = document.querySelectorAll("#catalogItems .catalog-items__item");

    if (items) {
      items.forEach(i => {
        const thumbs = i.querySelectorAll(".catalog-items__action");
        thumbs.forEach(th => {
          th.addEventListener("click", function () {
            const imgSrc = this.dataset.src;
            const mainElWrapper = th.parentElement.parentElement.querySelector(".catalog-items__img-wrapper");
            const mainEl = th.parentElement.parentElement.querySelector(".catalog-items__img");

            thumbs.forEach(z => z.classList.remove("active"));

            this.classList.add("active");
            mainElWrapper.classList.add("changing");
            setTimeout(() => {
              mainEl.src = imgSrc;
            }, 350);
            setTimeout(() => {
              mainElWrapper.classList.remove("changing");
            }, 500);
          });
        });
      });
    }
  };
  catalogPage();

  // PAYMENT-DELIVERY PAGE
  const paymentDeliveryPage = () => {
    const items = document.querySelectorAll("#paymentAccordion .payment-delivery__item-title");

    if (items) {
      items.forEach(item => {
        item.addEventListener("click", function (e) {
          item.classList.toggle("active");
        });
      });
    }
  };
  paymentDeliveryPage();

  // ORDERING PAGE
  const orderingPage = () => {
    const showMainCardBtn = document.getElementById("showMainCardBtn");
    const showMainCard = document.getElementById("showMainCard");
    const orderingForm = document.getElementById("orderingForm");
    const inputs = document.querySelectorAll("#orderingForm [name='orderingDelivery']");

    if (orderingForm && inputs) {
      inputs.forEach(item =>
        item.addEventListener("change", function (e) {
          if (this.value === "Самовывоз") {
            document.querySelector(".ordering__delivery-fields").classList.add("hidden");
          } else {
            document.querySelector(".ordering__delivery-fields").classList.remove("hidden");
          }
        })
      );
    }

    if (showMainCardBtn && showMainCard) {
      showMainCardBtn.addEventListener("click", function (e) {
        this.classList.toggle("active");
        showMainCard.classList.toggle("active");
      });
    }
  };
  orderingPage();

  const cabinetOrdersPage = () => {
    const order__header = document.querySelectorAll('.order__header');
    if (order__header && window.innerWidth <= 991) {
      if(order__header.length >= 0) {
        order__header.forEach(item=>{
          item.addEventListener('click', function(e){
            item.parentElement.classList.toggle('order_active');
            item.nextElementSibling.classList.toggle('active');
          })
        })
      }
    }
  } 
  cabinetOrdersPage();
});
