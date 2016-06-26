import * as actions from '../actions/admin-actions';

const initialState = {
	nom:'',
	password:'',
	countclick:0,
	connected:false,
	nomoclicks:false

};
export default function adminReducer(state=initialState,actions){
	switch (actions.type){
		case actions.CONNECTION:
			return{
				...state,
				nom:actions.nom,
				password:actions.password,
				connected:true
			};
		case actions.DECONNECTION:
			return{
				...state,
				nom:'',
				password:'',
				connected:false
			};
		case actions.LOGO_CLICKED:
			return{
				...state,
				countclick:state.countclick+actions.changeBy
			};
		case actions.NO_MORE_CLICKS:
			return{
				...state,
				nomoclicks:actions.nomoclicks
			}
		case actions.ADMIN_LAUNCH_FAILED:
		default:
			return state;
	}

}