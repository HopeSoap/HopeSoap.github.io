$( document ).ready(function() {
	var images = ['https://33.media.tumblr.com/7c944c0cd6f581a2ba9297f983e00ff3/tumblr_nfjvcxx9kA1tdhimpo1_500.gif', 
	'https://38.media.tumblr.com/236792b97d8cb31e844309112780ca71/tumblr_mh41vtAppl1qkb77oo1_500.gif', 
	'https://33.media.tumblr.com/2ad37f8c7bac612eaa86db555e8c6b82/tumblr_ni15iqITAy1u5zpn5o1_500.gif', 
	'http://24.media.tumblr.com/cbe251c6674e8a9f566c4c8b2bd8ea3b/tumblr_mgaijpl4Rp1s1lymso1_500.gif'];
	$('.sec-main').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')', 'background-size':'cover', 'background-repeat': 'no-repeat','background-position': 'center center'});
});