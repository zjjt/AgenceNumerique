import * as actions from '../actions/ui-nav-actions';


const initialState = {
	navigation:'DEBUT'

};
export default function navigationReducer(state=initialState,actions){
	switch (actions.type){
		case actions.ENTREE_DANS_LAPP:
		case actions.NA_PAS_ID:
		case actions.RETOUR_AU_DEBUT:
		case actions.RETOUR:
			return{
				...state,
				navigation:actions.navigation
			};
		default:
		return state;
	}

}