$(document).ready(function() {
	$(".menu li").hover(function() {
		$(this).find("ul:first").slideDown(100);
	}, function(){
		$(this).find("ul:first").hide(300);
	});
});

function changeImg(x){
        x.src = "../images/AoSoMi/mslandslimfit14155.jpg";
        x.style.height ='250px';
        x.style.width = '230px';
}
function backImg(x){
    x.src = "../images/AoSoMi/mslandslimfit1415.jpg";
    x.style.height ='250px';
    x.style.width = '230px';
}