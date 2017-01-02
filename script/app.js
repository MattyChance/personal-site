$(document).ready(function(){

	$('.nav-button').click(function(e) {
		e.stopPropagation();

		$('#mySidenav').toggleClass('openSidenav');

		$('#mySidenav').click(function(e) {
			e.stopPropagation();
		});

		$('#main').toggleClass('pushContent');

		$('#main').click(function(e) {
			e.stopPropagation();
		});

		$('body').toggleClass('overlay');

		$('body, html').click(function(e) {

			$('#mySidenav').removeClass('openSidenav');
			$('#main').removeClass('pushContent');
			$('body').removeClass('overlay');

		});

	});


})