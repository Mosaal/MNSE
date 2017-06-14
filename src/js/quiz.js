$(document).ready(function() {
	// Detect button click
	$('input[type="submit"]').click(function() {
		// Reset selections
		$('.well .radio').each(function() { $(this).css('background-color', 'rgba(0, 0, 0, 0)'); });

		// Check how many answers are correct
		$('.well input[type="radio"]:checked').each(function() {
			if($(this).attr('class') === 'correct') {
				var radioClass = $(this).parent().parent();
				radioClass.css('background-color', 'rgba(0, 255, 0, 0.5)');
			} else {
				var radioClass = $(this).parent().parent();
				radioClass.css('background-color', 'rgba(255, 0, 0, 0.5)');
			}
		});
	});
});