(function ($) {
  "use strict";

  var windowOn = $(window);
  ///////////////////////////////////////////////////
  // 01. PreLoader Js
  windowOn.on("load", function () {
    $("#loading").fadeOut(500);
  });

  ///////////////////////////////////////////////////
  // 02. SubMenu Dropdown Toggle
  if ($(".tp-main-menu nav > ul > li.has-dropdown > a").length) {
    $(".tp-main-menu nav > ul > li.has-dropdown > a").append(
      '<i class="fal fa-angle-down"></i>'
    );
  }

  ///////////////////////////////////////////////////
  // 03. scroll-to-target
  windowOn.on("scroll", function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 500) {
      $(".scroll-to-target").removeClass("open");
    } else {
      $(".scroll-to-target").addClass("open");
    }
  });

  ///////////////////////////////////////////////////
  // 04. Scroll Up Js
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  // 04. Scroll Up Js
  if ($(".scroll-to-target-2").length) {
    $(".scroll-to-target-2").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }
  function smoothSctollTop() {
    $(".smooth a").on("click", function (event) {
      var target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - 150,
            },
            1000
          );
      }
    });
  }
  smoothSctollTop();

  ///////////////////////////////////////////////////
  // 05. wow animation
  var wow = new WOW({
    mobile: true,
  });
  wow.init();
  var windowOn = $(window);

  ///////////////////////////////////////////////////
  // 06. PreLoader Js
  windowOn.on("load", function () {
    $("#loading").fadeOut(500);
  });

  ///////////////////////////////////////////////////
  // 07. Sticky Header Js
  windowOn.on("scroll", function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 400) {
      $("#header-sticky").removeClass("header-sticky");
    } else {
      $("#header-sticky").addClass("header-sticky");
    }
  });

  ////////////////////////////////////////////////////
  // 08. Mobile Menu Js
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "1199",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });
  ////////////////////////////////////////////////////
  // 08. Mobile Menu Js
  $("#mobile-menu-2").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "6000",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  $(window).on("load", function () {
    $("#preloader").delay(350).fadeOut("slow");

    $("body").delay(350).css({ overflow: "visible" });
  });

  ////////////////////////////////////////////////////
  // 09. Sidebar Js
  $(".tp-menu-bar").on("click", function () {
    $(".tpoffcanvas").addClass("opened");
    $(".body-overlay").addClass("apply");
  });
  $(".close-btn").on("click", function () {
    $(".tpoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });
  $(".body-overlay").on("click", function () {
    $(".tpoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });

  ///////////////////////////////////////////////////
  // 10. Magnific Js
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  ////////////////////////////////////////////////////
  // 11. Data CSS Js
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  $("[data-width]").each(function () {
    $(this).css("width", $(this).attr("data-width"));
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  ////////////////////////////////////////////////////
  // 12. Counter Js
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // 09. Home-1-Slider js
  $(".tp-slider-active").slick({
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // testimonial
  $(".test-slider-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: ".test-img-active",
  });

  $(".test-img-active").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".test-slider-active",
    dots: false,
    arrows: true,
    focusOnSelect: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // 09. Home-1-Slider js
  $(".brand-slider-active").slick({
    fade: false,
    autoplay: false,
    slidesToShow: 6,
    arrows: false,
    Infinity: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });
  // 09. Home-1-Slider js
  $(".blog-post-slider-active").slick({
    fade: false,
    autoplay: false,
    slidesToShow: 1,
    arrows: false,
    Infinity: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  // 09. Home-1-Slider js
  $(".tp-case-slider-active").slick({
    fade: false,
    autoplay: false,
    slidesToShow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {},
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // 09. Home-1-Slider js
  $(".testimonial-slider-active").slick({
    fade: false,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    dots: true,
    Infinity: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  // 09. Home-1-Slider js
  $(".tp-slider-three-active").slick({
    fade: false,
    autoplay: false,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    Infinity: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  // 09. Home-1-Slider js
  $(".tp-team-slider-active").slick({
    fade: false,
    autoplay: false,
    slidesToShow: 4,
    arrows: true,
    dots: false,
    Infinity: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  // 09. Home-1-Slider js
  $(".testimonial-slider-three").slick({
    fade: true,
    autoplay: false,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    Infinity: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // 09. Home-1-Slider js
  $(".tp-case-active").slick({
    fade: false,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {},
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // 09. Home-1-Slider js
  $(".testimonial-active-three").slick({
    fade: false,
    autoplay: false,
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // 09. Home-1-Slider js
  $(".marque-slider-active").slick({
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {},
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // 09. Home-1-Slider js
  $(".marque-slider-active-2").slick({
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {},
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //15. Shop-slider Js
  $(".tp-product-slider-active").slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: false,
    Infinity: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  ////////////////////////////////////////////////////
  // 14. magnificPopup Js
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // 20. Show Login Toggle Js
  $("#showlogin").on("click", function () {
    $("#checkout-login").slideToggle(900);
  });

  /*-------------------------

		showcoupon toggle function

	--------------------------*/

  $("#showcoupon").on("click", function () {
    $("#checkout_coupon").slideToggle(900);
  });

  /*-------------------------

	Create an account toggle function

--------------------------*/

  $("#cbox").on("click", function () {
    $("#cbox_info").slideToggle(900);
  });

  /*-------------------------

	Create an account toggle function

--------------------------*/

  $("#ship-box").on("click", function () {
    $("#ship-box-info").slideToggle(1000);
  });

  ////////////////////////////////////////////////////
  // 15. MagnificPopup video view Js
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  ////////////////////////////////////////////////////
  //26.isotope
  $(".grid").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      layoutMode: "fitRows",
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
      },
    });

    // filter items on button click
    $(".masonary-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
        animationOptions: {
          duration: 10000,
          easing: "linear",
          queue: true,
        },
      });
    });

    //for menu active class
    $(".masonary-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  // 05. Search Js
  $(".tp-search-box").on("click", function () {
    $(".search-wrapper").toggleClass("search-open");
  });
  $("body > *:not(header)").on("click", function () {
    $(".search-wrapper").removeClass("search-open");
  });

  ////////////////////////////////////////////////////
  // 16. Cart Quantity Js
  $(".cart-minus").on("click", function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $(".cart-plus").on("click", function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  /* Price filter active */

  if ($("#slider-range").length) {
    $("#slider-range").slider({
      range: true,

      min: 0,

      max: 500,

      values: [75, 300],

      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });

    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );

    $("#filter-btn").on("click", function () {
      $(".filter-widget").slideToggle(1000);
    });
  }

  // 08. Nice Select Js
  $("select").niceSelect();
})(jQuery);

//team rendering

$(document).ready(function () {
  $.getJSON("team.json", function (data) {
    let teamMembersHtml = "";
    $.each(data, function (index, member) {
      teamMembersHtml += `
        <div class="team-member col-xl-3 col-lg-3 col-md-6 mb-60 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="${
          0.3 + index * 0.2
        }s">
          <div class="tp-team team-inner text-center">
            <div class="tp-team-thumb p-relative">
              <img src="${member.image}" alt="">
              <div class="tp-team-thumb-icon">
                <i class="far fa-long-arrow-right"></i>
              </div>
            </div>
            <div class="tp-team-content">
              <h4 class="tp-team-title">${member.name}</h4>
              <span>${member.role}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Repeat the team members several times to simulate infinite scroll
    let repeatCount = 5;
    let repeatedHtml = "";
    for (let i = 0; i < repeatCount; i++) {
      repeatedHtml += teamMembersHtml;
    }

    $("#team-members").html(repeatedHtml);
  });
});

// <script src="https://web3forms.com/client/script.js" async defer></script>;

// const form = document.getElementById("contactForm");
// const result = document.getElementById("result");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const object = Object.fromEntries(formData);
//   const json = JSON.stringify(object);
//   result.innerHTML = "Please wait...";
//   // Send data to Web3Forms
//   fetch("https://api.web3forms.com/submit", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: json,
//   })
//     .then((response) => response.json())
//     .then((web3FormsResponse) => {
//       if (web3FormsResponse.success) {
//         result.innerHTML += "<br>Message Sent successfully ";
//       } else {
//         result.innerHTML += "<br>Error sending message ";
//       }
//     })
//     .catch((error) => {
//       console.error("Error sending message :", error);
//       result.innerHTML += "<br>Error sending message";
//     });
// });

//pop up
// document.addEventListener("DOMContentLoaded", function () {
//   const popup = document.getElementById("popup");
//   const closePopup = document.getElementById("close-popup");
//   const bookPackage = document.getElementById("book-package");

//   // Show popup on page load
//   popup.style.display = "flex";

//   // Close popup when clicking the close button
//   closePopup.addEventListener("click", function () {
//     popup.style.display = "none";
//   });

//   // Add event listener for the book package button
//   bookPackage.addEventListener("click", function () {
//     window.location.href = "price.html"; // Redirect to booking page
//   });
// });

// This script handles the popup and sticky banner functionality
// It includes showing/hiding the popup, countdown timers, and sticky banner behavior
document.addEventListener("DOMContentLoaded", function () {
  // Popup functionality
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("close-popup");

  // Show popup after 3 seconds
  setTimeout(() => {
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
  }, 3000);

  // Close popup function
  function closePopup() {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Close button event
  closeBtn.addEventListener("click", closePopup);

  // Close when clicking outside
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup();
    }
  });

  // Close with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popup.style.display === "block") {
      closePopup();
    }
  });

  // Countdown timers
  function updateCountdowns() {
    const targetDate = new Date("2025-08-25T00:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Update popup countdown
    const popupDays = document.getElementById("popup-days");
    const popupHours = document.getElementById("popup-hours");
    const popupMinutes = document.getElementById("popup-minutes");

    if (popupDays) popupDays.textContent = days.toString().padStart(2, "0");
    if (popupHours) popupHours.textContent = hours.toString().padStart(2, "0");
    if (popupMinutes)
      popupMinutes.textContent = minutes.toString().padStart(2, "0");

    // Update banner countdown
    const bannerDays = document.getElementById("banner-days");
    const bannerHours = document.getElementById("banner-hours");
    const bannerMinutes = document.getElementById("banner-minutes");

    if (bannerDays) bannerDays.textContent = days.toString().padStart(2, "0");
    if (bannerHours)
      bannerHours.textContent = hours.toString().padStart(2, "0");
    if (bannerMinutes)
      bannerMinutes.textContent = minutes.toString().padStart(2, "0");

    if (distance < 0) {
      // Handle expired countdown
      const popupCountdown = document.querySelector(".popup-countdown");
      const bannerTimer = document.querySelector(".banner-timer");

      if (popupCountdown) {
        popupCountdown.innerHTML =
          '<h6 style="color: #ff4757;">Offer Expired</h6>';
      }
      if (bannerTimer) {
        bannerTimer.innerHTML =
          '<span style="color: #ff4757; font-size: 0.8rem;">Offer Expired</span>';
      }
    }
  }

  // Update countdowns every second
  updateCountdowns();
  setInterval(updateCountdowns, 1000);
});

// Close sticky banner function
function closeStickyBanner() {
  const banner = document.getElementById("sticky-course-banner");
  banner.style.transform = "translateY(100%)";
  setTimeout(() => {
    banner.style.display = "none";
  }, 300);
}
