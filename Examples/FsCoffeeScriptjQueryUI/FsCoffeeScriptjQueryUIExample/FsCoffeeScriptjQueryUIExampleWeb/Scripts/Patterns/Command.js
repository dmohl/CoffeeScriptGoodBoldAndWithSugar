(function() {
  var jqxhr, logMessages;
  jqxhr = $.ajax({
    url: "/"
  });
  logMessages = "";
  jqxhr.success(function() {
    return logMessages += "Success!\n";
  });
  jqxhr.error(function() {
    return logMessages += "Error!\n";
  });
  jqxhr.complete(function() {
    return logMessages += "Completed!\n";
  });
}).call(this);
