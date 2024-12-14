$(document).ready(function () {
  // Smooth scrolling for navigation links
  $("nav ul li a").on("click", function (event) {
    event.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top }, 1000);
  });
});
