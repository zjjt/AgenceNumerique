import React from 'react';
import WifiStatus from './WifiStatus.jsx';
import Logo from './Logo.jsx';


export default function Header({background,logoInvisible,logoclicking}){
	let classes=background==='withback'?'headerContainer':'headerContainer bnone';
	return(
		<header>
			<div className={classes}>
				<Logo width={'100'} height={'50'} invisible={logoInvisible} handleDoubleClick={logoclicking}/>
				<WifiStatus/>
			</div>
		</header>
	);
}