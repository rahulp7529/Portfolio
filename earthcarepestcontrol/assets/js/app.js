
$(window).on('load', function () {
  setTimeout(function() {
      $("body").removeClass("hidden");
      $("body").addClass("loaded");
      $(".preloader").fadeOut("slow");
  }, 1500)
});
//Once time popup model
$(document).ready(function () {
  if (document.cookie.indexOf('visited=true') == -1) {
    $('#myModal').modal('show');
  }
  $("#myModal .my-button").click(function () {
    if (document.cookie.indexOf('visited=true') == -1) {
      $('#myModal').modal('show');
      var year = 1000 * 60 * 60 * 24 * 365;
      var expires = new Date((new Date()).valueOf() + year);
      document.cookie = "visited=true;expires=" + expires.toUTCString();
    }
  });
});

$(document).ready(function () {
  $('.input-disabled-form input, .input-disabled-form textarea').on("cut copy paste", function (e) {
    e.preventDefault();
  });
});
//Wow Animation
new WOW().init();

// Active class
$(document).ready(function () {
  $(".tabActive a").click(function () {
      $(".tabActive a").removeClass("active");
      $(this).addClass("active");
  });
  $(function () {
  var path = window.location.href;
      var pop = [];
      $('.tabActive a').each(function () {
          var anchor = $(this).prop('href').split("/").pop();
          pop.push(anchor);
          var href = this.href.replace(".html","").replace(".php","");
          var navPath = path.replace(".html","").replace(".php","");
          if (href === navPath) {
              $(this).addClass('active');
          }
      });
      var anchor = $('.tabActive a[href*="' + pop[0] + '"]');
      if (path.split('/').pop() == "") {
          $(anchor).addClass("active")
      }
  });
});
//menu fixed on scroll

$(document).ready(function () {
  headerFixed();
});
$(document).on('scroll', function () {
  headerFixed();
});
function headerFixed() {
  if ($(window).scrollTop() >= 40) {
    $('header').addClass('fixed-menu');
  } else {
    $('header').removeClass('fixed-menu');
  }
}

// function fixedMenu() {
//   $(window).scroll(function () {
//     var height = $(window).scrollTop();
//     if (height >= 40) {
//       $('header').addClass('fixed-menu');
//     } else {
//       $('header').removeClass('fixed-menu');
//     }
//   });
// }

// $(document).ready(function () {
//   fixedMenu();
// });

// $(window).resize(function () {
//   fixedMenu();
// });
// 	Reset form data
$(document).ready(function () {
  if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }
});

$(window).bind("resize", function () {
  if ($(this).width() > 992) {
    $(".footer-links .footer-title").removeAttr("data-bs-toggle");
  } else {
    $('.footer-links .footer-title').attr('data-bs-toggle', 'collapse');
  }
}).trigger('resize');

/* ------------------ Scroll to top -----------------*/
var btn = $('#button');
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

/* ------------------ CLOSE MENU -----------------*/
var button = document.getElementById('mobile-button');
$('#mobile-button').on('click', toggleOnClass);
function toggleOnClass(event) {
  var toggleElementId = '#' + $(this).data('toggle'),
    element = $(toggleElementId);
  element.toggleClass('on');
}
// close hamburger menu after click a
$('.navbar-nav li a').on("click", function () {
  $('#mobile-button').click();
});
$(window).bind("resize", function () {
  if ($(this).width() >= 1199) {
    $(".navbar-toggler").removeAttr("id");
  } else {
    $('.navbar-toggler').attr('id', 'mobile-button');
  }
}).trigger('resize');
/* Download Terms Page Print*/
$("body").on("click", ".print", function () {
  printDiv('condition-block')
});
function printDiv(elementId) {
  var a = document.getElementById('printing-css').value;
  var b = document.getElementById(elementId).innerHTML;
  window.frames["print_frame"].document.title = document.title;
  window.frames["print_frame"].document.body.innerHTML = '<style>' + a + '</style>' + b;
  window.frames["print_frame"].window.focus();
  window.frames["print_frame"].window.print();
}

$("body").on("click", ".navbar-nav a", function () {
  $('body').removeClass('blur-body');
});
$("body").on("click", ".navbar-toggler", function () {
  if (window.innerWidth <= 1199) {
      $('body').toggleClass('blur-body');
  }
});

$(document).ready(function(){

  $(".pricing-box").hover(function(){
      $(".pricing-box").removeClass("active");
      $(this).toggleClass("active"); 
  });

});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.5,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  loop:true,
  preloadImages: false,
  breakpoints: {
  320: {
      slidesPerView: 1.5,
  },
  481: {
      slidesPerView: 3,
  },
  992: {
      slidesPerView: 4,
  },
  1400: {
      slidesPerView: 4.5,
  },
},
  navigation: {
  nextEl: ".swiper_btn .swiper-button-next",
  prevEl: ".swiper_btn .swiper-button-prev",
},
});
if($("#animated-thumbnails-gallery").length > 0){ 
  jQuery("#animated-thumbnails-gallery")
  .justifiedGallery({
  captions: false,
  lastRow: "hide",
  rowHeight: 300,
  maxRowsCount: 10,
  margins: 5    
  })
  .on("jg.complete", function () {
      window.lightGallery(
          document.getElementById("animated-thumbnails-gallery"),
          {
          autoplayFirstVideo: false,
          pager: false,
          galleryId: "nature",
          plugins: [lgZoom],
          mobileSettings: {
              controls: true,
              maxRowsCount: 2,
              showCloseIcon: true,
              download: false,
              rotate: false,
              rowHeight: 100,
              maxRowsCount: 100                
          }
      }
      );
  });
}else{}

