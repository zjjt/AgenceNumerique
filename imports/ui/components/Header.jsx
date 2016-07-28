import React from 'react';
import WifiStatus from './WifiStatus.jsx';
import Logo from './Logo.jsx';
import {moment} from 'meteor/momentjs:moment';
import {Localize} from 'react-redux-i18n';


export default function Header({background,logoInvisible,logoclicking,currentLang}){
	//verifier si on peut acceder a redux pour voir si la locale est en ou fr pour changer la date
	 
	let DateduJour='';
	if(currentLang==='fr')
	{
		DateduJour=moment().format("dddd DD MMMM YYYY");
	}
	else if(currentLang==='en')
	{
		DateduJour=moment().format("dddd Do MMMM YYYY");
	}
	
	let classes=background==='withback'?'headerContainer':'headerContainer bnone';
	
	return(
		<header>
			<div className={classes}>
				<Logo invisible={logoInvisible} handleDoubleClick={logoclicking}/>
				<p className='headerDate'>{DateduJour}</p>
				<WifiStatus/>
			</div>
		</header>
	);
}