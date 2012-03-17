(function() {
  pavlov.specify("Simple Plugin", function() {
    var cleanup;
    cleanup = function() {
      $('.customDialog').dialog('close');
      return $('.dialog').dialog('close');
    };
    describe("Given default options", function() {
      before(function() {
        $(this).simple();
        return cleanup();
      });
      describe("when executing a click event", function() {
        before(function() {
          return $('.input').click();
        });
        it("it should open the dialog", function() {
          return assert($('.dialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return cleanup();
        });
      });
      return describe("When the click event has not been executed", function() {
        it("it should not have an open dialog", function() {
          return assert($('.dialog').parents('.ui-dialog:visible').length).isFalse();
        });
        return after(function() {
          return cleanup();
        });
      });
    });
    describe("Given all custom options", function() {
      before(function() {
        $(this).simple({
          dialogSelector: '.customDialog',
          inputSelector: '.customInput'
        });
        return cleanup();
      });
      return describe("when executing a click event", function() {
        before(function() {
          return $('.customInput').click();
        });
        it("it should open the custom dialog", function() {
          return assert($('.customDialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return cleanup();
        });
      });
    });
    describe("Given only a custom dialogSelector", function() {
      before(function() {
        $(this).simple({
          dialogSelector: '.customDialog'
        });
        return cleanup();
      });
      return describe("when executing a click event", function() {
        before(function() {
          return $('.input').click();
        });
        it("it should open the custom dialog", function() {
          return assert($('.customDialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return cleanup();
        });
      });
    });
    describe("Given only a custom inputSelector", function() {
      before(function() {
        $(this).simple({
          inputSelector: '.customInput'
        });
        return cleanup();
      });
      return describe("when executing a click event", function() {
        before(function() {
          return $('.customInput').click();
        });
        it("it should open the dialog", function() {
          return assert($('.dialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return cleanup();
        });
      });
    });
    describe("Given a custom inputSelector and a init method", function() {
      before(function() {
        $(this).simple('init', {
          inputSelector: '.customInput'
        });
        return cleanup();
      });
      return describe("when executing a click event", function() {
        before(function() {
          return $('.customInput').click();
        });
        it("it should open the dialog", function() {
          return assert($('.dialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return cleanup();
        });
      });
    });
    describe("Given a init and a custom input selector", function() {
      before(function() {
        $(this).simple('init', {
          inputSelector: '.customInput',
          dialogSelector: '.customDialog'
        });
        cleanup();
        return $('.customInput').click();
      });
      return describe("when executing a click event", function() {
        it("it should open the dialog", function() {
          return assert($('.customDialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return cleanup();
        });
      });
    });
    return describe("Given 3 arguments", function() {
      before(function() {
        $(this).simple('init', {
          inputSelector: '.customInput',
          dialogSelector: '.customDialog'
        }, 'something');
        cleanup();
        return $('.customInput').click();
      });
      return describe("when executing a click event", function() {
        it("it should open the dialog", function() {
          return assert($('.customDialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return cleanup();
        });
      });
    });
  });
}).call(this);
