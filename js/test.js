$( document ).ready(function() {
	var images = ['https://33.media.tumblr.com/7c944c0cd6f581a2ba9297f983e00ff3/tumblr_nfjvcxx9kA1tdhimpo1_500.gif', 
	'https://38.media.tumblr.com/236792b97d8cb31e844309112780ca71/tumblr_mh41vtAppl1qkb77oo1_500.gif', 
	'https://33.media.tumblr.com/2ad37f8c7bac612eaa86db555e8c6b82/tumblr_ni15iqITAy1u5zpn5o1_500.gif',
	'https://31.media.tumblr.com/b3f5579810d002b936178d1c58775245/tumblr_n659g8Wer11t5oim1o1_1280.gif',
	'http://media3.giphy.com/media/Wef6Ca3y7KAAU/200.gif', 
	'http://media1.giphy.com/media/Thosb7jsFUTiU/200.gif',
	'http://media2.giphy.com/media/MvZKiDJmB1XEs/200.gif',
	'http://media0.giphy.com/media/mHkmwEhT6zZGU/200.gif',
	'http://media1.giphy.com/media/iIGff4t7NHoLC/200.gif',
	'http://media2.giphy.com/media/vepv7jeJbwW08/200.gif',
	'http://24.media.tumblr.com/cbe251c6674e8a9f566c4c8b2bd8ea3b/tumblr_mgaijpl4Rp1s1lymso1_500.gif'];
	$('.sec-main').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')', 'background-size':'cover', 'background-repeat': 'no-repeat','background-position': 'center center'});
});