gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let swiperSliders = [];
let observer = () => {
  if (swiperSliders.length) {
    swiperSliders.map(function (element, index) {
      swiperSliders[index].slider.destroy(true, true);
      swiperSliders[index].destroy();
    });
  }
};

$(document).ready(function () {
  if ($(".burger").length > 0) {
    let menu = $(".menu");
    let burger = $(".burger");
    let body = $("body");

    burger.on("click", function () {
      burger.toggleClass("burger--opened");
      body.toggleClass("hidden");
      menu.stop().slideToggle();
    });
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

  if ($(".other-projects__slider").length > 0) {
    const stateSwiper = new Swiper(".other-projects__slider", {
      slidesPerView: 3,
      spaceBetween: 140,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1.2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1500: {
          slidesPerView: 3,
          spaceBetween: 140,
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
      loop: true,
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
    initialModal();
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

    setTimeout(function () {
      initialModal();
    }, 300);
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
    setStylesHeader($(window).scrollTop());

    $(window).on("scroll", function () {
      setStylesHeader($(window).scrollTop());
    });
  }

  if ($(".grettings-btn__next").length > 0) {
    $(".grettings-btn__next").on("click", function () {
      $("html, body").animate({ scrollTop: window.innerHeight }, 1000);
    });
  }

  if ($(".js-open-filter").length > 0) {
    $(".js-open-filter").on("click", function () {
      $(".tabs-block").addClass("opened");
    });

    $(".tabs-block__close").on("click", function () {
      $(".tabs-block").removeClass("opened");
    });
  }

  if ($(".serv-slider").length > 0) {
    if ($(window).width() < 768) {
      initServ();
    }
  }

  if ($(".info-slider").length > 0) {
    const infoSwiper = new Swiper(".info-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      spaceBetween: 0,
      pagination: {
        el: ".info-slider .swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (current) {
          return `0${current}`;
        },
        formatFractionTotal: function (number) {
          return `0${number}`;
        },
      },
      navigation: {
        prevEl: ".info-slider .swiper-button-prev",
        nextEl: ".info-slider .swiper-button-next",
      },
    });

    if ($(".service-step__links").length > 0) {
      $(".service-step__links .tabs-link").on("click", function (e) {
        e.preventDefault();
        console.log($(this).index());
        infoSwiper.slideTo($(this).index());
      });
    }
  }

  if ($(".invis-anchor-section").length > 0) {
    let sections = $(".step-start");
    let blockPosition = sections.offset().top;

    let posSection = [];

    sections.each(function (i, el) {
      posSection.push({ id: $(el).attr("id"), pos: $(el).offset().top - 150 });
    });

    console.log(posSection);

    $(".invis-anchor a").on("click", function (event) {
      event.preventDefault();

      let id = $(this).attr("href");
      let top = $(id).offset().top - 140;

      $("body,html").animate({ scrollTop: top }, 300);
    });

    $(window).scroll(function () {
      let windowPostition = $(window).scrollTop();

      if (windowPostition >= blockPosition) {
        $(".invis-anchor-section").addClass("fixed");
      } else {
        $(".invis-anchor-section").removeClass("fixed");
      }

      sections.each(function (i, el) {
        let top = $(el).offset().top - 150;
        let bottom = top + $(el).height();
        let scroll = $(window).scrollTop();
        let id = $(el).attr("id");

        if (scroll > top && scroll < bottom) {
          $(".invis-anchor a.active").removeClass("active");
          $('.invis-anchor a[href="#' + id + '"]').addClass("active");
        }
      });
    });

    $(".btn-step-prev").on("click", function () {
      let current = $(".invis-anchor .tabs-link.active").attr("href");

      const count = posSection.findIndex(
        (element, index) => `#${element.id}` === current
      );

      if (count - 1 >= 0) {
        $("body,html").animate({ scrollTop: posSection[count - 1].pos }, 300);
      }
    });
  }

  if ($(".service-content__slider").length > 0) {
    if ($(window).width() < 768) {
      const sliders = document.querySelectorAll(".service-content__slider");
      let mySwipers = [];

      function sliderinit() {
        sliders.forEach((slider, index) => {
          if (!slider.swiper) {
            mySwipers[index] = new Swiper(slider, {
              slidesPerView: 1.15,
              spaceBetween: 20,
              autoHeight: true,
              navigation: {
                nextEl: ".service-content__slider .swiper-button-next",
                prevEl: ".service-content__slider .swiper-button-prev",
              },
              pagination: {
                el: ".service-content__slider .swiper-pagination",
              },
              breakpoints: {
                0: {
                  slidesPerView: 1.15,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 6,
                  spaceBetween: 0,
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
  }

  if ($(".step-work__slider").length > 0) {
    if ($(window).width() < 768) {
      const infoSwiper = new Swiper(".step-work__slider", {
        slidesPerView: 1.15,
        spaceBetween: 12,
        autoHeight: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          0: {
            slidesPerView: 1.15,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        },
      });
    }
  }

  // if ($(".example-section").length > 0) {
  //   $(".example-section").map(function () {
  //     let block = $(this);
  //     let paralax1 = block.find(".example--paralax1") || null;
  //     let paralax2 = block.find(".example--paralax2") || null;
  //     let paralax3 = block.find(".example--paralax3") || null;

  //     if ($(window).width() >= 768) {
  //       if (paralax1) {
  //         gsap.fromTo(
  //           paralax1,
  //           { y: 0 },
  //           {
  //             y: -300,
  //             scrollTrigger: {
  //               trigger: block,
  //               start: "-300",
  //               scrub: true,
  //             },
  //           }
  //         );
  //       }

  //       if (paralax2) {
  //         gsap.fromTo(
  //           paralax2,
  //           { x: 0, y: 0 },
  //           {
  //             x: 150,
  //             scrollTrigger: {
  //               trigger: block,
  //               start: "-200",
  //               scrub: true,
  //             },
  //           }
  //         );
  //       }

  //       if (paralax3) {
  //         gsap.fromTo(
  //           paralax3,
  //           { x: 0, y: 0 },
  //           {
  //             x: -100,
  //             y: 100,
  //             scrollTrigger: {
  //               trigger: block,
  //               start: "-100",
  //               scrub: true,
  //             },
  //           }
  //         );
  //       }
  //     } else {
  //       if (paralax1) {
  //         gsap.fromTo(
  //           paralax1,
  //           { y: 0 },
  //           {
  //             y: -100,
  //             scrollTrigger: {
  //               trigger: block,
  //               start: "-300",
  //               scrub: true,
  //             },
  //           }
  //         );
  //       }

  //       if (paralax2) {
  //         gsap.fromTo(
  //           paralax2,
  //           { x: 0, y: 0 },
  //           {
  //             x: 50,
  //             scrollTrigger: {
  //               trigger: block,
  //               start: "-200",
  //               scrub: true,
  //             },
  //           }
  //         );
  //       }

  //       if (paralax3) {
  //         gsap.fromTo(
  //           paralax3,
  //           { x: 0, y: 0 },
  //           {
  //             x: -50,
  //             y: 50,
  //             scrollTrigger: {
  //               trigger: block,
  //               start: "-100",
  //               scrub: true,
  //             },
  //           }
  //         );
  //       }
  //     }
  //   });
  // }

  if ($(".our-cases__list").length > 0) {
    $(".our-cases__item").on("click", function () {
      let blockID = $(this).attr("data-active");
      $(".our-cases__item").stop().removeClass("active");
      $(this).stop().addClass("active");

      $(".our-cases__graf").map(function () {
        if ($(this).attr("data-grafID") === blockID) {
          $(".our-cases__graf").stop().removeClass("active");
          $(this).stop().addClass("active");
        }
      });
    });

    if ($(window).width() < 768) {
      const ourCaseMobile = new Swiper(".our-cases__mobileSlider", {
        slidesPerView: 1,
        spaceBetween: 12,
        autoHeight: true,
        pagination: {
          el: ".our-cases__mobileSlider .swiper-pagination",
        },
      });
    }
  }

  if ($("[data-aos]").length > 0) {
    $("[data-aos]").each((i, el) => {
      AOS.init({
        offset: 0,
        duration: 1500,
        // once: true,
      });
    });
  }

  if ($(".fileLoad").length > 0) {
    $(".fileLoad input").on("change", function () {
      let parents = $(this).parents(".fileLoad");
      let text = parents.find(".fileLoad__text span");
      let input = $(this);

      let file = input[0].files[0];
      parents.addClass("load");
      text.text(file.name);
      // size.text(`${(file.size / 1024 / 1000).toFixed(2)}`);
    });

    $(".fileLoad__delete").on("click", function (event) {
      event.preventDefault()
      let parents = $(this).parents(".fileLoad");
      let input = parents.find("input");
      let text = parents.find(".fileLoad__text span");

      input[0].value = null;
      text.text("");
      parents.removeClass("load");
    });
  }
});

$(window).on("resize", function () {
  if ($(window).width() < 768) {
    initServ();
  } else {
    observer();
  }
});

function initialModal() {
  MicroModal.init({
    openTrigger: "data-modal",
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,

    onShow: () => {
      $("body").addClass("modal-open");
    },

    onClose: () => {
      $("body").removeClass("modal-open");
    },
  });

  $("[data-modal]").map(function () {
    $(this).click((e) => e.preventDefault());
  });
}

function openModal(modal) {
  MicroModal.show(modal);
  $(".modal__close").on("click", function () {
    closeModal(modal);
  });
  $("body").addClass("modal-open");
}

function closeModal(modal) {
  MicroModal.close(modal);
  $("body").removeClass("modal-open");
}

function setStylesHeader(window) {
  if (window > 0) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
}

function initServ() {
  if ($(".serv-slider").hasClass("init-serv")) return false;

  const swiper = new Swiper(".serv-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  let destroy = () => {
    $(".serv-slider").removeClass("init-serv");
  };

  let swiperElements = {
    slider: swiper,
    destroy,
  };

  swiperSliders.push(swiperElements);
}
