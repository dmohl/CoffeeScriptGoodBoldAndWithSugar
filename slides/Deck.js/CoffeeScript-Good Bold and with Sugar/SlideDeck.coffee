$ = jQuery
$ -> 
	$(".code-example").fancybox
		'titlePosition'	: 'outside'
		'overlayColor' : '#000'
		'overlayOpacity'	: 0.4

	$.deck '.slide'
	
	$('#style-themes').change ->
		$('#style-theme-link').attr 'href', $(@).val()

	$('#transition-themes').change ->
		$('#transition-theme-link').attr 'href', $(@).val()
