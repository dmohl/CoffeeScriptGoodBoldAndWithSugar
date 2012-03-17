(function() {
  var $;
  var __slice = Array.prototype.slice;
  $ = jQuery;
  $(function() {
    var methods;
    methods = {
      init: function(options) {
        var dialog, dialogElement;
        options = $.extend({
          dialogSelector: '.dialog',
          inputSelector: '.input'
        }, options);
        dialogElement = $(options.dialogSelector);
        dialog = dialogElement.dialog({
          autoOpen: false,
          modal: true,
          resizable: false
        });
        return $(options.inputSelector).click(function() {
          return dialog.dialog('open');
        });
      },
      test: function() {
        return console.log("test");
      }
    };
    return $.fn.simple = function(method) {
      var args, _;
      _ = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (methods[method]) {
        return methods[method].apply(methods, args);
      } else if (typeof method === 'object' || !method) {
        return methods.init.apply(methods, arguments);
      } else {
        return $.error("Method " + method + " does not exist in jQuery simple");
      }
    };
  });
}).call(this);
