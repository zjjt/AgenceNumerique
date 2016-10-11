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
					conexiontime:'',
					deconexiontime:'',
					countclick:0,
					connected:false,
					nomoclicks:false,
					timerStatus:'Stopped',
					loginTimer:0
			};
		case actions.LOGO_CLICKED:
			return{
				...state,
				countclick:state.countclick+1
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
				timerStatus:'Stopped',
				countclick:0,
				loginTimer:0
			};
			case actions.TICK:
			return{
				...state,
				loginTimer:state.loginTimer+1	
			};
			case actions.RESETTIMER:
			return{
				...state,
				loginTimer:0,
				countclick:0
			}
		case actions.ADMIN_LAUNCH_FAILED:
		default:
			return state;
	}

}