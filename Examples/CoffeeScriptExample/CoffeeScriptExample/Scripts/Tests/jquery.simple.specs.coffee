pavlov.specify "Simple Plugin", ->
  cleanup = ->
    $('.customDialog').dialog('close')
    $('.dialog').dialog('close')

  describe "Given default options", -> 
    before -> 
      $(this).simple()
      do cleanup

    describe "when executing a click event", ->
      before -> $('.input').click()
      it "it should open the dialog", ->
        assert($('.dialog').parents('.ui-dialog:visible').length).isTrue()
      after ->
        do cleanup

    describe "When the click event has not been executed", ->
      it "it should not have an open dialog", ->
        assert($('.dialog').parents('.ui-dialog:visible').length).isFalse()
      after -> 
        do cleanup

  describe "Given all custom options", -> 
    before -> 
      $(this).simple dialogSelector:'.customDialog', inputSelector:'.customInput' 
      do cleanup

    describe "when executing a click event", ->
      before -> $('.customInput').click()
      it "it should open the custom dialog", ->
        assert($('.customDialog').parents('.ui-dialog:visible').length).isTrue()
      after ->
        do cleanup

  describe "Given only a custom dialogSelector", -> 
    before -> 
      $(this).simple dialogSelector:'.customDialog'
      do cleanup

    describe "when executing a click event", ->
      before -> $('.input').click()
      it "it should open the custom dialog", ->
        assert($('.customDialog').parents('.ui-dialog:visible').length).isTrue()
      after ->
        do cleanup

  describe "Given only a custom inputSelector", -> 
    before ->  
      $(this).simple inputSelector:'.customInput' 
      do cleanup

    describe "when executing a click event", ->
      before -> $('.customInput').click()
      it "it should open the dialog", ->
        assert($('.dialog').parents('.ui-dialog:visible').length).isTrue()
      after ->
        do cleanup

  describe "Given a custom inputSelector and a init method", -> 
    before -> 
      $(this).simple 'init', inputSelector:'.customInput' 
      do cleanup

    describe "when executing a click event", ->
      before -> $('.customInput').click()
      it "it should open the dialog", ->
        assert($('.dialog').parents('.ui-dialog:visible').length).isTrue()
      after ->
        do cleanup
 
  describe "Given a init and a custom input selector", -> 
    before -> 
      $(this).simple 'init', inputSelector:'.customInput', dialogSelector:'.customDialog'
      do cleanup
      $('.customInput').click()

    describe "when executing a click event", ->
      it "it should open the dialog", ->
        assert($('.customDialog').parents('.ui-dialog:visible').length).isTrue()
      after ->
        do cleanup

  describe "Given 3 arguments", -> 
    before -> 
      $(this).simple 'init', inputSelector:'.customInput', dialogSelector:'.customDialog', 'something'
      do cleanup
      $('.customInput').click()

    describe "when executing a click event", ->
      it "it should open the dialog", ->
        assert($('.customDialog').parents('.ui-dialog:visible').length).isTrue()
      after ->
        do cleanup

