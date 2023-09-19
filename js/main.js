addEventListener("scroll", (event) => {
  let currentScroll = $("#fullpage").scrollTop();

  console.log(currentScroll);
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
        // when window width is >= 320px
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

    console.log(stateSwiper);
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

  if ($("#fullpage").length > 0) {
    if ($(window).width() > 1200) {
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
      $(window).on("scroll", function () {
        setStylesHeader($(window).scrollTop());
      });
    }
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
