addEventListener("scroll", (event) => {
  let currentScroll = $("#fullpage")?.scrollTop();

  // console.log(currentScroll);
});

$(document).ready(function () {
  if ($(".burger").length > 0) {
    let menu = $(".menu");
    let burger = $(".burger");
    let buttonClose = $(".menu-close");
    let overlay = $(".menu-overlay");

    burger.on("click", function () {
      burger.addClass("burger--opened");
      // overlay.addClass("menu-overlay--opened");
      menu.stop().slideDown();
    });

    // overlay.on("click", function () {
    //   closeMenu();
    // });

    // buttonClose.on("click", function () {
    //   closeMenu();
    // });

    // $(".header-phone").clone(true, true).appendTo(".menu-mobile-info");
    // $(".header-adress").clone(true, true).appendTo(".menu-mobile-info");

    // function closeMenu() {
    //   menu.stop().slideUp();
    //   burger.removeClass("burger--opened");
    //   overlay.removeClass("menu-overlay--opened");
    //   $(document).off("mouseup");
    // }
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".state-section__slider").length > 0) {
    const stateSwiper = new Swiper(".state-section__slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }

  if ($(".task-slider").length > 0) {
    const stateSwiper = new Swiper(".task-slider", {
      slidesPerView: 5,
      spaceBetween: 47,
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.25,
          spaceBetween: 30,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 47,
        },
      },
    });
  }

  if ($(".certificates-slider").length > 0) {
    const stateSwiper = new Swiper(".certificates-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".certificates-section .swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (current) {
          return `0${current}`;
        },
        formatFractionTotal: function (number) {
          return `0${number}`;
        },
      },
      navigation: {
        nextEl: ".certificates-section .swiper-button-next",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }

  if ($(".job-slider").length > 0) {
    const stateSwiper = new Swiper(".job-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      fadeEffect: { crossFade: true },
      speed: 2000,
      pagination: {
        el: ".job-slider .swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " \\ " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
      navigation: {
        nextEl: ".job-slider .swiper-button-next",
        prevEl: ".job-slider .swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 50,
          speed: 500,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }

  if ($(".other-letters__slider").length > 0) {
    if ($(window).width() < 768) {
      const stateSwiper = new Swiper(".other-letters__slider", {
        slidesPerView: 1,
        spaceBetween: 47,
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          0: {
            // slidesPerView: 1.25,
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
      });
    }
  }

  if ($("select").length > 0) {
    $("select").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {},
        onClose: function (element) {},
      });
    });
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        setTimeout(() => {
          $("body").removeClass("modal-open");
        }, 300);
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".marquee").length > 0) {
    let gap = 230;

    if ($(window).width() < 1024) {
      gap = 120;
    }

    if ($(window).width() < 768) {
      gap = 40;
    }

    $(".marquee").marquee({
      duration: 12000,
      delayBeforeStart: 0,
      gap: gap,
      direction: "left",
      duplicated: true,
    });
  }

  if ($(".marquee-page-error").length > 0) {
    $(".marquee-page-error").marquee({
      duration: 12000,
      delayBeforeStart: 0,
      gap: 0,
      direction: "left",
      duplicated: true,
    });
  }

  if ($(".slider-simple").length > 0) {
    const sliders = document.querySelectorAll(".slider-simple");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 5,
            spaceBetween: 40,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
            },
            on: {
              init: function (swiper) {},
              slideChange: function (swiper) {},
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1600: {
                slidesPerView: 4,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".header").length > 0) {
    if ($(window).width() > 1200) {
      if ($("#fullpage").length > 0) {
        $("#fullpage").fullpage({
          autoScrolling: true,
          scrollOverflow: true,
          // onLeave: function (origin, destination, direction, trigger) {
          //   console.log("origin", origin);
          //   console.log("destination", destination);
          //   console.log("direction", direction);
          //   console.log("trigger", trigger);
          // },
        });

        $(".fullpage-grettings .fp-overflow").on("scroll", function () {
          setStylesHeader($(this).scrollTop());
        });

        $(".grettings-btn__next").on("click", function () {
          $(".fullpage-grettings .fp-overflow").animate({
            scrollTop: window.innerHeight,
          });
        });
      } else {
        setHeaderScroll();
      }
    } else {
      setHeaderScroll();
    }

    function setHeaderScroll() {
      $(window).on("scroll", function () {
        setStylesHeader($(window).scrollTop());
      });
    }
  }

  if ($(".js-open-filter").length > 0) {
    $(".js-open-filter").on("click", function () {
      $(".tabs-block").addClass("opened");
    });

    $(".tabs-block__close").on("click", function () {
      $(".tabs-block").removeClass("opened");
    });
  }
});

$(window).on("resize", function () {});

function openModal(modal) {
  MicroModal.show(modal);
  $(".modal__close").on("click", function () {
    closeModal(modal);
  });
  $("body").addClass("modal-open");
}

function closeModal(modal) {
  MicroModal.close(modal);
  setTimeout(() => {
    $("body").removeClass("modal-open");
  }, 300);
}

function setStylesHeader(window) {
  if (window > 0) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
}
