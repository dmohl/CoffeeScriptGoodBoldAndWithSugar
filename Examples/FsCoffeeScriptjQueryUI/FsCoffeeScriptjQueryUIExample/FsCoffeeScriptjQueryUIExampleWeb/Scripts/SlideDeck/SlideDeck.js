(function() {
  var $;
  $ = jQuery;
  $(function() {
    $(".code-example").fancybox({
      'titlePosition': 'outside',
      'overlayColor': '#000',
      'overlayOpacity': 0.4
    });
    $.deck('.slide');
    $('#style-themes').change(function() {
      return $('#style-theme-link').attr('href', $(this).val());
    });
    return $('#transition-themes').change(function() {
      return $('#transition-theme-link').attr('href', $(this).val());
    });
  });
}).call(this);
