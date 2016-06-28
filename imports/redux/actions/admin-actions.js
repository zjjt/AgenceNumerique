import {menuAdmin,adminLogin} from './ui-nav-actions';
import {timeofadmin} from '../reducers/admin-reducer';

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
	return{
		type:DECONNECTION,
		decotime
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
export function nomoclick(nomoclick){
	return{
		type:NO_MORE_CLICKS,
		nomoclick
	};
}
export function nomoreclicks(){
	return (dispatch,getState)=>{
		console.log(getState().admin);
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
	 console.log(timerofadmin);
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