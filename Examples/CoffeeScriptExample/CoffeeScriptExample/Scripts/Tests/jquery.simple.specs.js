(function() {
  pavlov.specify("Simple Plugin", function() {
    describe("Given default options", function() {
      before(function() {
        $(this).simple();
        $('customDialog').dialog('close');
        return $('dialog').dialog('close');
      });
      describe("when executing a click event", function() {
        before(function() {
          return $('.input').click();
        });
        it("it should open the dialog", function() {
          return assert($('.dialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return $('.dialog').dialog('close');
        });
      });
      return describe("When the click event has not been executed", function() {
        it("it should not have an open dialog", function() {
          return assert($('.dialog').parents('.ui-dialog:visible').length).isFalse();
        });
        return after(function() {
          return $('.dialog').dialog('close');
        });
      });
    });
    describe("Given all custom options", function() {
      before(function() {
        return $(this).simple({
          dialogSelector: '.customDialog',
          inputSelector: '.customInput'
        });
      });
      return describe("when executing a click event", function() {
        before(function() {
          return $('.customInput').click();
        });
        it("it should open the custom dialog", function() {
          return assert($('.customDialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return $('.customDialog').dialog('close');
        });
      });
    });
    describe("Given only a custom dialogSelector", function() {
      before(function() {
        return $(this).simple({
          dialogSelector: '.customDialog'
        });
      });
      return describe("when executing a click event", function() {
        before(function() {
          return $('.input').click();
        });
        it("it should open the custom dialog", function() {
          return assert($('.customDialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return $('.customDialog').dialog('close');
        });
      });
    });
    describe("Given only a custom inputSelector", function() {
      before(function() {
        return $(this).simple({
          inputSelector: '.customInput'
        });
      });
      return describe("when executing a click event", function() {
        before(function() {
          return $('.customInput').click();
        });
        it("it should open the dialog", function() {
          return assert($('.dialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return $('.dialog').dialog('close');
        });
      });
    });
    describe("Given a custom inputSelector and a init method", function() {
      before(function() {
        return $(this).simple('init', {
          inputSelector: '.customInput'
        });
      });
      return describe("when executing a click event", function() {
        before(function() {
          return $('.customInput').click();
        });
        it("it should open the dialog", function() {
          return assert($('.dialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return $('.dialog').dialog('close');
        });
      });
    });
    return describe("Given a custom inputSelector and init method, then close method", function() {
      before(function() {
        return $(this).simple('init', {
          inputSelector: '.customInput'
        });
      });
      return describe("when executing a click event", function() {
        before(function() {
          return $('.customInput').click();
        });
        it("it should open the dialog", function() {
          return assert($('.dialog').parents('.ui-dialog:visible').length).isTrue();
        });
        return after(function() {
          return $('.dialog').dialog('close');
        });
      });
    });
  });
}).call(this);
