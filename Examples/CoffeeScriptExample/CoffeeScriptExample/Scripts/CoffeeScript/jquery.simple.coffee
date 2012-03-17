
# This forces $ to equal jQuery. No need to wrap as you normally
#     would, since CoffeeScript does this for you.

$ = jQuery
$ -> 
    methods =   
        init: (options) -> 
            options = $.extend 
                dialogSelector:'.dialog'
                inputSelector:'.input'
                options
            dialogElement = $(options.dialogSelector)  
            dialog = dialogElement.dialog 
                autoOpen: false
                modal: true
                resizable: false   
            $(options.inputSelector).click -> dialog.dialog 'open'  

        test: -> console.log "test"
      
    $.fn.simple = (method) ->  
        # Destructuring Assignment lets you easily extract values 
        #     from arrays and objects and assign to variables
        # We don't care about the first argument in arguments because 
        #     its either the method name or not applicable in the 
        #     specific scenario  
        # A splat puts the rest of the arguments into the args 
        #     variable

        [_, args...] = arguments

        # If the method exists use the Splat to call the method and pass the args
        # The JS comes out as methods[method].apply(method, args);

        if methods[method] then methods[method] args... 
        else if typeof method is 'object' or not method

            # The JS comes out as methods.init.apply(methods, arguments);
            methods.init arguments... 

        # string interpolation example
        else $.error("Method #{method} does not exist in jQuery simple") 
