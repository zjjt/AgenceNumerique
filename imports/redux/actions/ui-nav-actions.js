//simples actions de navigation
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Meteor} from 'meteor/meteor';
import {clickOnMenu} from './buttonMenu-actions';


export const VA_AU_DEBUT='VA_AU_DEBUT';
export function  EcranTitre(navigation){
	setTimeout(()=>{
		FlowRouter.go(navigation)
	},1000);
	//FlowRouter.go(navigation);
	return{
		type:VA_AU_DEBUT,
		navigation
	}
}

export const MENU_ADMIN='MENU_ADMIN';
export function  menuAdmin(navigation){
	setTimeout(()=>{
		FlowRouter.go(navigation)
	},1000);
	//FlowRouter.go(navigation);
	return{
		type:MENU_ADMIN,
		navigation
	}
}
export const ADMIN_LOGIN='ADMIN_LOGIN';
export function adminLogin(navigation){
	setTimeout(()=>{
		FlowRouter.go(navigation)
	},1000);
	//FlowRouter.go(navigation);
	return{
		type:MENU_ADMIN,
		navigation
	}
}

export const SETTINGS='SETTINGS';
export function  settings(navigation){
	setTimeout(()=>{
		FlowRouter.go(navigation)
	},1000);
	//FlowRouter.go(navigation);
	return{
		type:SETTINGS,
		navigation
	}
}

export const RAPPORT='MENU_ADMIN';
export function  rapport(navigation){
	setTimeout(()=>{
		FlowRouter.go(navigation)
	},1000);
	//FlowRouter.go(navigation);
	return{
		type:RAPPORT,
		navigation
	}
}

export const ENTREE_DANS_LAPP='ENTREE_DANS_LAPP';
export function EntreeDansLapp(navigation){
	setTimeout(()=>{
		FlowRouter.go(navigation)
	},1000);
	//FlowRouter.go(navigation);
	return{
		type:ENTREE_DANS_LAPP,
		navigation
	}
}


export const RETOUR_AU_DEBUT='RETOUR_AU_DEBUT';
export function RetourDebut(navigation){
	setTimeout(()=>{
		FlowRouter.go(navigation)
	},1000);
	//FlowRouter.go(navigation);
	return{
		type:RETOUR_AU_DEBUT,
		navigation
	}
}
export const RETOUR='RETOUR';
export function Retour(navigation){
	setTimeout(()=>{
		FlowRouter.go(navigation)
	},1000);
	//FlowRouter.go(navigation);
	return(dispatch,getState)=>{
		let chosenMenu=getState().buttonsMenu.chosenMenu;
		if(chosenMenu!=='none')
			dispatch(clickOnMenu('','Deco'));
		dispatch({type:RETOUR,navigation});	
	}
}

export const CHOIX_DE_VISITE='CHOIX_DE_VISITE';
export function choixVisite(navigation){
	setTimeout(()=>{
		FlowRouter.go(navigation)
	},1000);
	//FlowRouter.go(navigation);
	return{
		type:CHOIX_DE_VISITE,
		navigation
	}
}

export const DECONNECTION='DECONNECTION';
export function deconnection(navigation){
	
	setTimeout(()=>{
		FlowRouter.go(navigation)
	},1000);
	Meteor.logout();
	//FlowRouter.go(navigation);
	return(dispatch,getState)=>{
		dispatch(clickOnMenu('','Deco'));
		dispatch({type:DECONNECTION,navigation});
	}

}
export const CHOIX_POLICE='CHOIX_POLICE';
export function choixPolice(navigation){
	setTimeout(()=>{
		FlowRouter.go(navigation)
	},1000);
	//FlowRouter.go(navigation);
	return{
		type:CHOIX_POLICE,
		navigation
	}
	

}
