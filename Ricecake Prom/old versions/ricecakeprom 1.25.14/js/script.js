
$(document).ready(function() {


	$('#video').videoBG({
		mp4:'images/bgintro.mp4',
		ogv:'images/bgintro.ogv',
		webm:'images/bgintro.webm',
		opacity:1,
	});
	
		
})

$(function() {
    var BV = new $.BigVideo({useFlashForFirefox:false});
    BV.init();
    BV.show('images/bgintro.mp4', {altSource:'images/bgintro.ogv'});
});

$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('http://martin.kooka.be/wp/WHITE_EDITION/images/bgintro.mp4',{ambient:true});
});