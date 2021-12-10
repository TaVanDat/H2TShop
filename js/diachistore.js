$(document).ready(function() {
	$(".menu li").hover(function() {
		$(this).find("ul:first").slideDown(100);
	}, function(){
		$(this).find("ul:first").hide(300);
	});
});