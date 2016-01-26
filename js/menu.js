$( document ).ready(function() {
    $(".mainnav-link a").click(function(event)
    {
      event.preventDefault();
      $(".mainnav-link").removeClass("current");
      $(this).parent().addClass("current");

      $(".mainnav-link a").css('background-color', "#fff");

      $(".mainnav-link.current a, .mainnav-link a:hover, .mainheader").css('background-color', $(this).data("color"));
    });
});
