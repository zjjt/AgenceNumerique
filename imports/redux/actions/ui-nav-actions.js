//simples actions de navigation
import {FlowRouter} from 'meteor/kadira:flow-router';


export const VA_AU_DEBUT='VA_AU_DEBUT';
export function  EcranTitre(navigation){
	FlowRouter.go(navigation);
	return{
		type:VA_AU_DEBUT,
		navigation
	}
}

export const MENU_ADMIN='MENU_ADMIN';
export function  menuAdmin(navigation){
	FlowRouter.go(navigation);
	return{
		type:MENU_ADMIN,
		navigation
	}
}
export const ADMIN_LOGIN='ADMIN_LOGIN';
export function adminLogin(navigation){
	FlowRouter.go(navigation);
	return{
		type:MENU_ADMIN,
		navigation
	}
}

export const SETTINGS='SETTINGS';
export function  settings(navigation){
	FlowRouter.go(navigation);
	return{
		type:SETTINGS,
		navigation
	}
}

export const RAPPORT='MENU_ADMIN';
export function  rapport(navigation){
	FlowRouter.go(navigation);
	return{
		type:RAPPORT,
		navigation
	}
}

export const ENTREE_DANS_LAPP='ENTREE_DANS_LAPP';
export function EntreeDansLapp(navigation){
	FlowRouter.go(navigation);
	return{
		type:ENTREE_DANS_LAPP,
		navigation
	}
}
//asynchronous ne va pas dans le reducer
export const NA_PAS_ID='NA_PAS_ID';
export function NapaId(navigation){
	FlowRouter.go(navigation);
	return{
		type:NA_PAS_ID,
		navigation
	}
}

export const RETOUR_AU_DEBUT='RETOUR_AU_DEBUT';
export function RetourDebut(navigation){
	FlowRouter.go(navigation);
	return{
		type:RETOUR_AU_DEBUT,
		navigation
	}
}
export const RETOUR='RETOUR';
export function Retour(navigation){
	FlowRouter.go(navigation);
	return{
		type:RETOUR,
		navigation
	}
}