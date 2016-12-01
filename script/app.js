$(document).ready(function(){
	$('.nav-button').click(function() {
		$('#mySidenav').toggleClass('openSidenav');

		if ($('.nav-button').text() === '+') {
			$('.nav-button').text('-');

		}
		else {
			$('.nav-button').text('+');
		}
	})
})