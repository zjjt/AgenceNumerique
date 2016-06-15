import * as actions from '../actions/ui-nav-actions';


const initialState = {
	navigation:'DEBUT'

};
export default function navigationReducer(state=initialState,actions){
	switch (actions.type){
		case actions.ENTREE_DANS_LAPP:
			return{
				...state,
				navigation:actions.navigation
				};
		case actions.NA_PAS_ID:
			return{
				...state,
				navigation:actions.navigation
			};
		case actions.RETOUR_AU_DEBUT:
			return{
				...state,
				navigation:actions.navigation
			};
		default:
		return state;
	}

}