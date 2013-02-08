$(document).ready(function() {
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i))) {
		// Target only visitors using iOS and Android
		$('nav[role=navigation] li').bind('touchstart', function(){
			// Capture touch input on the nav list element
			$('nav[role=navigation] li ul').toggle('slow');
			// Toggle the sub-nav slow enough for accessibility
		});
	}
});