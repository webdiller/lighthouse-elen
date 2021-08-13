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
      const item1 = preloader.querySelector(".preloader__item_one");
      const item2 = preloader.querySelector(".preloader__item_two");
      const item3 = preloader.querySelector(".preloader__item_three");

      setTimeout(() => {
        item1.classList.add("active");
      }, 500);

      setTimeout(() => {
        item2.classList.add("active");
      }, 1500);

      setTimeout(() => {
        item3.classList.add("active");
      }, 2500);

      setTimeout(() => {
        item1.classList.remove("active");
        item2.classList.remove("active");
        item3.classList.remove("active");
      }, 3500);

      setInterval(() => {
        setTimeout(() => {
          item1.classList.add("active");
        }, 500);

        setTimeout(() => {
          item2.classList.add("active");
        }, 1500);

        setTimeout(() => {
          item3.classList.add("active");
        }, 2500);

        setTimeout(() => {
          item1.classList.remove("active");
          item2.classList.remove("active");
          item3.classList.remove("active");
        }, 3500);
      }, 4500);

      preloaderBtn.addEventListener("click", function (e) {
        preloader.classList.toggle("active");
      });
    }

    if (topNavItems) {
      if (window.innerWidth <= 576) {
        topNavItems.forEach(item => {
          item.addEventListener("click", function (e) {
            item.classList.toggle("active");
          });
        });
      }
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
      var textWithSlider = new Swiper("#textWithSlider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
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
            if (currentSlideEl && allSlidesEl) {
              this.slideTo(4);
              const count = this.slides.length - this.loopedSlides * 2;
              const active = this.realIndex;

              currentSlideEl.innerHTML = zeropad(active);
              allSlidesEl.innerHTML = "/" + count;
            }
          },
          slideChange: function () {
            const count = this.slides.length - this.loopedSlides * 2;
            let active = this.realIndex;

            if (active === 0) {
              currentSlideEl.innerHTML = zeropad(count);
            } else {
              currentSlideEl.innerHTML = zeropad(active);
            }

            allSlidesEl.innerHTML = " / " + count;
          }
        }
      });

      // topGoodsSlider

      const tgcurrentSlideEl = document.getElementById("tgcurrentSlide");
      const tgallSlidesEl = document.getElementById("tgallSlides");

      const topGoodsCurrentName = document.getElementById("topGoodsCurrentName");
      const topGoodsCurrentPriceNew = document.getElementById("topGoodsCurrentPriceNew");
      const topGoodsCurrentPriceOld = document.getElementById("topGoodsCurrentPriceOld");
      const topGoodsCurrentLink = document.getElementById("topGoodsCurrentLink");

      var topGoodsSlider = new Swiper("#topGoodsSlider", {
        slidesPerView: 6.1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".top-goods__arrows .top-goods__arrow.top-goods__arrow_next",
          prevEl: ".top-goods__arrows .top-goods__arrow.top-goods__arrow_prev"
        },
        breakpoints: {
          0: {
            slidesPerView: 4.9,
            spaceBetween: 6
          },
          576: {
            slidesPerView: 5.1,
            spaceBetween: 6
          },
          991: {
            slidesPerView: 6.1,
            spaceBetween: 20
          }
        },
        on: {
          afterInit: function () {
            this.slideTo(7);

            let currentWrapper = document.getElementById("currentWrapper");
            let currentImg = document.querySelector("#currentWrapper img");
            currentWrapper.classList.add("changing");

            let currentEl = document.querySelector("#topGoodsSlider .swiper-slide-active");
            let { name, link, priceNew, priceOld } = currentEl.dataset;
            topGoodsCurrentName.innerHTML = name;
            topGoodsCurrentPriceNew.innerHTML = priceNew;
            topGoodsCurrentPriceOld.innerHTML = priceOld;
            topGoodsCurrentLink.href = link;

            setTimeout(() => {
              currentImg.src = document.querySelector("#topGoodsSlider .swiper-slide-active").previousElementSibling.querySelector("img").src;
            }, 300);
            setTimeout(() => {
              currentWrapper.classList.remove("changing");
            }, 400);
          },
          transitionEnd: function () {
            const count = this.slides.length - this.loopedSlides * 2;
            let active = this.realIndex;

            let currentWrapper = document.getElementById("currentWrapper");
            let currentImg = document.querySelector("#currentWrapper img");
            currentWrapper.classList.add("changing");

            if (active === 0) {
              tgcurrentSlideEl.innerHTML = zeropad(count);
            } else {
              tgcurrentSlideEl.innerHTML = zeropad(active);
            }

            tgallSlidesEl.innerHTML = " / " + count;

            let currentEl = document.querySelector("#topGoodsSlider .swiper-slide-active");
            let { name, link, priceNew, priceOld } = currentEl.dataset;

            topGoodsCurrentName.innerHTML = name;
            topGoodsCurrentPriceNew.innerHTML = priceNew;
            topGoodsCurrentPriceOld.innerHTML = priceOld;
            topGoodsCurrentLink.href = link;

            setTimeout(() => {
              currentImg.src = document.querySelector("#topGoodsSlider .swiper-slide-active").previousElementSibling.querySelector("img").src;
            }, 300);
            setTimeout(() => {
              currentWrapper.classList.remove("changing");
            }, 400);
          }
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
        loop: true,
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
            this.slideTo(4);
            const count = this.slides.length - this.loopedSlides * 2;
            const active = this.realIndex;

            currentSlideEl.innerHTML = zeropad(active);
            allSlidesEl.innerHTML = count;
          },
          transitionEnd: function () {
            const count = this.slides.length - this.loopedSlides * 2;
            let active = this.realIndex;

            const currentSlide = document.querySelector("#aboutSlider .swiper-slide-active img");
            const nextEl = document.querySelector("#aboutSlider .swiper-slide-active");

            leftImgWrapper.classList.add("changing");
            rightImgWrapper.classList.add("changing");
            setTimeout(() => {
              leftImg.src = currentSlide.src;
              rightImg.src = nextEl.nextElementSibling.querySelector("img").src;
            }, 350);
            setTimeout(() => {
              leftImgWrapper.classList.remove("changing");
              rightImgWrapper.classList.remove("changing");
            }, 500);

            if (active === 0) {
              currentSlideEl.innerHTML = zeropad(count);
            } else {
              currentSlideEl.innerHTML = zeropad(active);
            }

            allSlidesEl.innerHTML = " / " + count;
          }
        }
      });
    })();
  };
  aboutpage();

  // CARD PAGE
  const cardPage = () => {
    try {
      if (window.location.pathname.includes("card")) {
        document.body.style.overflowX = "visible";
      }
    } catch (error) {
      // console.log(error);
    }
    try {
      const w = document.getElementById("cardMain").offsetWidth;
      const h = w + 100;
      cardMain.style.height = `${h}px`;
    } catch (error) {
      // console.log(error);
    }

    try {
      const slider = document.querySelector(".card-slider__wrapper");
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener("mousedown", e => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mousemove", e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
      });
    } catch (error) {
      // console.log(error);
    }

    try {
      const tabs = document.getElementById("tabs");
      const cardMedia = document.getElementById("cardMedia");

      const cardThumbEl = document.querySelectorAll("#cardThumb .carousel-cell");

      var $carousel = $("#cardMain").flickity({
        pageDots: false,
        on: {
          ready: function () {
            cardMedia.classList.add("active");
          }
        }
      });

      var $carouselBottom = $("#cardBottom").flickity({
        pageDots: false,
        draggable: false
      });

      $carouselBottom.flickity("select", 1);

      var $carouselNav = $("#cardThumb");
      var $carouselNavCells = $carouselNav.find(".carousel-cell");

      $carouselNav.on("click", ".carousel-cell", function (event) {
        var index = $(event.currentTarget).index();
        $carouselBottom.flickity("select", index + 1);
        $carousel.flickity("select", index);
      });

      var flkty = $carousel.data("flickity");
      var navTop = $carouselNav.position().top;
      var navCellHeight = $carouselNavCells.height();
      var navHeight = $carouselNav.height();

      $carousel.on("select.flickity", function (event) {
        $carouselNav.find(".is-nav-selected").removeClass("is-nav-selected");
        var $selected = $carouselNavCells.eq(flkty.selectedIndex).addClass("is-nav-selected");
        $carouselBottom.flickity("select", $carousel.data("flickity").selectedIndex + 1);
        if (window.innerWidth >= 769) {
          var scrollY = $selected.position().top + $carouselNav.scrollTop() - (navHeight + navCellHeight) / 2;
          $carouselNav.animate({
            scrollTop: scrollY
          });
        }
      });

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
    } catch (error) {
      // console.log(error);
    }
  };
  cardPage();

  // CATALOG PAGE
  const catalogPage = () => {
    const items = document.querySelectorAll("#catalogItems .catalog-items__item .swiper-container");
    const catalogFilter = document.getElementById("catalogFilter");

    if (catalogFilter) {
      catalogFilter.addEventListener("click", function (e) {
        this.classList.toggle("active");
      });
    }

    if (items) {
      items.forEach(el => {
        const swiper = new Swiper(el, {
          speed: 400,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 5000,
          },
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
            cubeEffect: {
              slideShadows: false
            }
          },
          effect: "fade",
          fadeEffect: {
            crossFade: true
          }
        });

        $(".swiper-pagination-bullet").hover(function () {
          $(this).trigger("click");
        });
      });
    }

    try {
      if (window.location.pathname.includes("catalog") || window.location.pathname.includes("payment-delivery")) {
        callSearch.classList.add("active");
      }
    } catch (error) {
      // console.log(error);
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

  const cabinetPageAndCabinetOrdersPage = () => {
    const order__header = document.querySelectorAll(".order__header");
    const ordersButtons = document.querySelectorAll("[data-id]");
    const orderItems = document.querySelectorAll(".main-orders__item");
    const orders = document.getElementById("orders");
    const cabinetItems = document.querySelectorAll("#cabinetItems .cabinet__item-title");

    if (cabinetItems && window.innerWidth <= 991) {
      cabinetItems.forEach(item => {
        item.addEventListener("click", function () {
          cabinetItems.forEach(el => {
            el.classList.toggle("hidden");
          });
          this.classList.toggle("active");
          this.classList.toggle("hidden");
        });
      });
    }

    if (orders && ordersButtons && orderItems && window.innerWidth >= 992) {
      ordersButtons.forEach(item => {
        item.addEventListener("click", function () {
          ordersButtons.forEach(el => el.classList.remove("active"));
          orderItems.forEach(el => el.classList.remove("active"));
          this.classList.add("active");
          document.getElementById(this.dataset.id).classList.add("active");
        });
      });
    }

    if (order__header && window.innerWidth <= 991) {
      if (order__header.length >= 0) {
        order__header.forEach(item => {
          item.parentElement.classList.remove("active");
          item.nextElementSibling.classList.remove("active");
          item.addEventListener("click", function (e) {
            item.parentElement.classList.toggle("active");
            item.nextElementSibling.classList.toggle("active");
          });
        });
      }
    }
  };
  cabinetPageAndCabinetOrdersPage();
});

function zeropad(number, amount = 2) {
  if (number >= Math.pow(10, amount)) {
    return number;
  }
  return (Array(amount).join(0) + number).slice(-amount);
}