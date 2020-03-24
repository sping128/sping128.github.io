// Dean Attali / Beautiful Jekyll 2016

var main = {
  init : function() {
    // Shorten the navbar after scrolling a little bit down
    $(window).scroll(function() {
        if ($(".navbar-main").offset().top > 50) {
          $(".navbar-main").addClass("top-nav-short");
          $(".navbar-main").removeClass("top-nav-long");
          $(".navbar-main .avatar-container").fadeOut(500);
        } else {
          $(".navbar-main").removeClass("top-nav-short");
          $(".navbar-main").addClass("top-nav-long");
          $(".navbar-main .avatar-container").fadeIn(500);
        }
    });
  },
};

document.addEventListener('DOMContentLoaded', main.init);
