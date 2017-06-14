$(document).ready(function() {
	// Detect button click
	$('input[type="submit"]').click(function() {
		var i = 0;

		// Check if all answers have been selected
		$('.well input[type="radio"]').each(function() {
			if($(this).is(':checked'))
				i++;
		});

		// Check if at least one radio button, per question, is selected
		if (i != $('.well').length) {
			// Inform user that all answers must be selected
		} else {
			// Check if answers are correct
			
		}
	});
});