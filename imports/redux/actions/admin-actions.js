import {menuAdmin,adminLogin} from './ui-nav-actions';

export const CONNECTION='CONNECTION';
export function connection(nom,password){
	return{
		type:CONNECTION,
		nom,
		password
	}
}

export const DECONNECTION='DECONNECTION';
export function deconnection(){
	return{
		type:DECONNECTION
	}
}

export const LOGO_CLICKED='LOGO_CLICKED';
export function logoclicked(changeBy,dispatch){
	dispatch(nomoreclicks());
	return{
		type:LOGO_CLICKED,
		changeBy
	}
}
export const NO_MORE_CLICKS='NO_MORE_CLICKS';
export function nomoreclicks(dispatch,getState){
	const state=getState();
	if(state.countclick===5)
	{
		dispatch(launchadmin());
		return{
			type:NO_MORE_CLICKS,
			nomoclicks:true
		};
	}
	else{
		return{
			type:NO_MORE_CLICKS,
			nomoclicks:false
		};
	}
}
export function launchadmin(){
//besoin du state du store pour voir si il y a eu 5 doubleclick
// si oui on lance l'admin et on remet le compteur a zero et on set un flag
// pour empecher l'utilisateur de clicker encore tant ke le flag est true
	return(dispatch,getState)=>{
		const state=getState();
		if(state.countclick===5){
			dispatch(adminLogin('adminlogin'));
		}else {
			const ADMIN_LAUNCH_FAILED='ADMIN_LAUNCH_FAILED';
			return{
				type:ADMIN_LAUNCH_FAILED
			};
		}

	};
}