$(document).ready(function() {
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i))) {
		//target only visitors using iOS
		$('nav[role=navigation] li').bind('touchstart', function(){
			//capture touch input on the nav list element
			$('nav[role=navigation] li ul').toggle('slow');
			//toggle the sub-nav slow enough for accessibility
		});
	}
});