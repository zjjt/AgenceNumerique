import React from 'react';
import WifiStatus from './WifiStatus.jsx';
import Logo from './Logo.jsx';
import moment from 'meteor/momentjs:moment';


export default function Header({background,logoInvisible,logoclicking}){
	let classes=background==='withback'?'headerContainer':'headerContainer bnone';
	return(
		<header>
			<div className={classes}>
				<Logo width={'100'} height={'50'} invisible={logoInvisible} handleDoubleClick={logoclicking}/>
				/*<p className='headerDate'>{}</p>
				<WifiStatus/>
			</div>
		</header>
	);
}