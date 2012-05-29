jqxhr = $.ajax
	url: "/"

logMessages = ""

jqxhr.success -> logMessages += "Success!\n"
jqxhr.error -> logMessages += "Error!\n"
jqxhr.complete -> logMessages += "Completed!\n"