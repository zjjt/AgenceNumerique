import * as actions from '../actions/admin-actions';

const initialState = {
	nom:'',
	password:'',
	conexiontime:'',
	deconexiontime:'',
	countclick:0,
	connected:false,
	nomoclicks:false,
	timerStatus:'Stopped',
	loginTimer:0

};
export const timerforadmin=initialState.loginTimer;
export default function adminReducer(state=initialState,action){
	switch (action.type){
		case actions.CONNECTION:
			return{
				...state,
				nom:action.nom,
				password:action.password,
				conexiontime:action.time,
				connected:true
			};
		case actions.DECONNECTION:
			return{
				...state,
				nom:'',
				password:'',
				deconexiontime:action.decotime,
				connected:false
			};
		case actions.LOGO_CLICKED:
			return{
				...state,
				countclick:state.countclick+action.changeBy
			};
		case actions.NO_MORE_CLICKS:
			return{
				...state,
				nomoclicks:action.nomoclicks
			};
			case actions.TIMER_START:
			return{
				...state,
				timerStatus:'Started'	
			};
			case actions.TIMER_STOP:
			return{
				...state,
				timerStatus:'Stopped'	
			};
			case actions.TICK:
			return{
				...state,
				loginTimer:state.loginTimer+1	
			};
			case actions.RESETTIMER:
			return{
				...state,
				loginTimer:0
			}
		case actions.ADMIN_LAUNCH_FAILED:
			return{
				...state,
				countclick:0
			};
		default:
			return state;
	}

}