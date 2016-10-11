import {menuAdmin,adminLogin} from './ui-nav-actions';
import {timerofadmin} from '../reducers/admin-reducer';
import {deconnection as decouser} from './ui-nav-actions';

/*
Se rappeler de stocker dans la base le temps de connection de chaque administrateur 
*/
export const CONNECTION='CONNECTION';
export function connection(nom,password,time){
	return{
		type:CONNECTION,
		nom,
		password,
		time
	}
}

export const DECONNECTION='DECONNECTION';
export function deconnection(decotime){
	let admin=getState().admin;
	console.log(admin);
	//dispatch une ecriture sur mongodb
	return(dispatch,getState)=>{
		dispatch({type:DECONNECTION,decotime});
		dispatch(decouser('home'));
		
	}
}
function storeAdmin(nom,debutConect,endConect){
	
}
export const LOGO_CLICKED='LOGO_CLICKED';
export function logoclicked(){
	return(dispatch,getState)=>{
		console.log(getState().admin.countclick);
		dispatch(nomoreclicks());
		dispatch({type:LOGO_CLICKED});
	}
	
}
export const NO_MORE_CLICKS='NO_MORE_CLICKS';
export function nomoclick(nomoclick){
	return{
		type:NO_MORE_CLICKS,
		nomoclick
	};
}
export function nomoreclicks(){
	return (dispatch,getState)=>{
		
		const {countclick,timerStatus}=getState().admin;
		if(countclick===4)
		{
			if(timerStatus==='Stopped'){
				dispatch(startTimer());
			}
			dispatch(launchadmin());
			dispatch(nomoclick(true));
		}
		else{
			if(timerStatus==='Stopped'){
				dispatch(startTimer());
			}
			dispatch(launchadmin());
			dispatch(nomoclick(false));
		}
	}

}

export function launchadmin(){
//besoin du state du store pour voir si il y a eu 5 doubleclick
// si oui on lance l'admin et on remet le compteur a zero et on set un flag
// pour empecher l'utilisateur de clicker encore tant ke le flag est true
	return(dispatch,getState)=>{
		const {countclick,loginTimer}=getState().admin;
		if(countclick===4){
			//si le timer est RUNNING le desactiver a STOPPED
			dispatch(stopTimer());
			dispatch(adminLogin('adminlogin'));
		}else {
			if(loginTimer>20){
				dispatch(resetTimer());
			}
			dispatch(adminlaunchFailed());
		}

	};
}

export const TIMER_START='TIMER_START';
export function startTimer(){
	return{
		type:TIMER_START,
	};
}
export const TIMER_STOP='TIMER_STOP';
export function stopTimer(){
	return{
		type:TIMER_STOP,
	};
}
export const TICK='TICK';
export function tick(){
	
	return{
	type:TICK	
	};
}
export const RESETTIMER='RESETTIMER';
export function resetTimer(){
	return{
		type:RESETTIMER
	};
}
export const ADMIN_LAUNCH_FAILED='ADMIN_LAUNCH_FAILED';
export function adminlaunchFailed(){
	return{
			type:ADMIN_LAUNCH_FAILED,
			
	};
}