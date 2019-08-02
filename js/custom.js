$(document).ready(function() {

  /* source: Udemy Course (2018-2019) -- > Drew Ryan "Learn Bootstrap by creating an advanced Bootstrap 4 Responsive Website" */

  $(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
      $(".navbar").addClass("solid");
    } else {
      $(".navbar").removeClass("solid");
    }
  });

  $(document).click(function(event) {
    const click = $(event.target);
    const opend = $(".navbar-collapse").hasClass("show");
    if (opend === true && !click.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  });

  $("a").click(function(event) {
    const hash = this.hash;
    if (hash !== "") {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800
      );
    }
  });

  //My own code

  function seeMore() {
    const button = $(".flex").find("button");
    button.click(function() {
      const div_hidden = $(this).parent().next(".hidden");
      div_hidden.toggleClass("show-more");
      if (div_hidden.hasClass("show-more")) {
        $(this).text("Ukryj >");
      } else {
        $(this).text("Zobacz więcej >");
      }
    });
  }
  seeMore();

  function clickArrow() {
    const arrow = $(".green-arrow");
    arrow.click(function() {
      const pricing_hidden = $(this)
        .prev()
        .prev()
        .children(".pricing_hidden");
      pricing_hidden.toggleClass("show-more");
      const font_arrow = $(this).find(".green");
      if (pricing_hidden.hasClass("show-more")) {
        font_arrow.replaceWith(" <i class='fas fa-angle-up green'></i>");
      } else {
        font_arrow.replaceWith(" <i class='fas fa-angle-down green'></i>");
      }
    });
  }

  clickArrow();

  function changeLogoPosition() {
    const media = window.matchMedia("(max-width: 992px)");
    const second_brand = $(".second-brand");
    const first_brand = $(".first-brand");
    const navbar_collapse = $(".navbar-collapse");

    if (media.matches) {
      first_brand.after(second_brand);
    } else {
      navbar_collapse.after(second_brand);
    }
  }

  changeLogoPosition();

  function changeImage() {
    const home_inner = $(".home-inner");
    const actual_date = new Date();
    const actual_year = actual_date.getFullYear();

    const springStarts = new Date(actual_year, 2, 21);
    const springEnds = new Date(actual_year, 5, 20);

    const summerStarts = new Date(actual_year, 5, 21);
    const summerEnds = new Date(actual_year, 8, 22);

    const autumnStarts = new Date(actual_year, 8, 23);
    const autumnEnds = new Date(actual_year, 11, 20);

    if (actual_date >= springStarts && actual_date <= springEnds) {
      home_inner.removeClass("winter");
      home_inner.addClass("spring");
    } else if (actual_date >= summerStarts && actual_date <= summerEnds) {
      home_inner.removeClass("spring");
      home_inner.addClass("summer");
    } else if (actual_date >= autumnStarts && actual_date <= autumnEnds) {
      home_inner.removeClass("summer");
      home_inner.addClass("autumn");
    } else {
      home_inner.removeClass("autumn");
      home_inner.addClass("winter");
    }
  }

  changeImage();

  //source: http://blog.compsoul.pl/liseblog/komunikat-o-plikach-cookies/57.html
  (function($) {
    $("#compsoul-cookies").storage({
      name: "cookies",
      element: "#compsoul-cookies button",
      event: "click"
    });
  })(Comp);
});
