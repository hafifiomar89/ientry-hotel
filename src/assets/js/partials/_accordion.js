$(".accordion__toggle").click(function (e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass("show")) {
    $this.next().removeClass("show");
    $this.next().slideUp(350);
    $this.removeClass("expand");
  } else {
    // $this.parent().parent().find('.accordion__block .accordion__content').removeClass('show');
    // $this.parent().parent().find('.accordion__block .accordion__content').slideUp(350);
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
    $this.addClass("expand");
  }
});
