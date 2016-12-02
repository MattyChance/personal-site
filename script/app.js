$(document).ready(function(){
	$('.nav-button').click(function() {
		$('#mySidenav').toggleClass('openSidenav');
		$('#main').toggleClass('pushContent');
		// $('body').toggleClass('overlay');
		if ($('.nav-button').text() === '+') {
			$('.nav-button').text('-');

		}
		else {
			$('.nav-button').text('+');
		}
	})
})