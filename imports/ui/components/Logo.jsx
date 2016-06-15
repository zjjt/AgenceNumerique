import React from 'react';
//on doit etre capable de lui assigner la classe visible quand on change de page
export default function Logo({invisible,width,height}){

	let classes=invisible?`logo invisible`:'logo';
	return(
		<img src="/img/logoTransparent.png" title="Logo NSIA" alt="Logo NSIA" width={width} height={height} className={classes}/>

	);
}