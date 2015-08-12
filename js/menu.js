$("[data-expand]").on("click", function() {
  $("[data-menu]").toggleClass("open");
  $(".floating-button").toggleClass("open");
});

$("body").on("click", function(e) {
  if(!$(e.target).is(".floating-button")) {
    $("[data-menu]").removeClass("open");
    $(".floating-button").removeClass("open");
  }
});

$("[data-nav]").on("click", function() {
  if($("[data-menu]").hasClass("open")){
    if(!$(this).hasClass("active")) {
      $("[data-nav]").removeClass("active");
      $(this).addClass("active");
      $("[data-menu]").addClass("drop").removeClass("open").removeClass("nodrop");
      $("[data-expand]").addClass("drop");
      var index = $(this).attr("data-index");
      $(".overlay.active").addClass("hold");
      $("[data-overlay='" + index + "']").addClass("active");
      $(".page-content").removeClass("active");
      setTimeout(function() {
        $(".overlay.hold").removeClass("active").removeClass("hold").removeClass("init");
        $("[data-menu]").removeClass("drop").addClass("nodrop");
        $("[data-expand]").removeClass("drop");
        $("[data-content='" + index + "']").addClass("active");
      }, 800);
    }
  }
});
