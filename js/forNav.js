$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav1").addClass("affix");
    console.log("OK");
  } else {
    $(".nav1").removeClass("affix");
  }
});

$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

// MODAL POP UP
// window.jQuery ||
document.write('<script src="./bootstrap_starter/bootstrap.min.js"></script>');

$(window).on("load", function () {
  $("#myModal").modal("show");
});
