$(document).ready(function () {
  $("#toggle").click(function () {
    $("#nav-panel").slideToggle("slow");
  });
});

$(document).ready(function () {
  $(".button").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("1000");
      $(".filter")
        .filter("." + value)
        .show("1000");
    }
    $(".pricing__btn-container .button").click(function () {
      $(this).addClass("active");
    });
  });
});
