(function ($) {
    var methods = {
        init: function (options) {
            var defaults = {
                dialogSelector: '.dialog',
                inputSelector: '.input'
            };
            options = $.extend(defaults, options);
            var dialog, dialogElement;
            dialogElement = $(options.dialogSelector);
            dialog = dialogElement.dialog({
                autoOpen: false,
                modal: true,
                resizable: false
            });
            return $(options.inputSelector).click(function () {
                dialog.dialog('open');
            });
        },
        close: function (options) {
            $(this).dialog('close');
        }
    };

    $.fn.simple = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.tooltip');
        }
    };
})(jQuery);