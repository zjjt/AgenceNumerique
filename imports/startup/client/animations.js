import {$} from 'meteor/jquery';

export default function createDiv(){
	// vary size for fun
	var divsize = ((Math.random()*100) + 50).toFixed();
	var color = '#'+ Math.round((0xffffff * Math.random())).toString(16);
	$newdiv = $('<div/>').css({
		'width':divsize+'px',
		'height':divsize+'px',

	}).addClass('decoration');

	// make position sensitive to size and document's width
	var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
	//var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

	$newdiv.css({
		'left':posx+'px',
		'top':'50px',
		'display':'none',
		'opacity':Math.floor(Math.random()*0.5)+0.3
	}).prependTo( '.masterContainer' ).fadeIn(1000).addClass('anideco').delay(1500).fadeOut(500, function(){
		$(this).remove();
		console.log('dans create div');
		//createDiv();
	});
}