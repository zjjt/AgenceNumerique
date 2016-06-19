//simples actions de navigation
import {FlowRouter} from 'meteor/kadira:flow-router';

export const ENTREE_DANS_LAPP='ENTREE_DANS_LAPP';
export function EntreeDansLapp(navigation){
	FlowRouter.go(navigation);
	console.log("FlowRouter.go(navigation)");
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