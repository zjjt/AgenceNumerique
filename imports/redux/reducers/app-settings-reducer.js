import * as actions from '../actions/app-settings-actions';
import Langues from '../../api/languages';

const initialState = {
    terminalID:'AN'+Random.id(8),//ne change jamais durant la duree de vie de la session
    language:'en',
    volume:100,//100 par defaut peux etre reduit a zero grace a un slider component...
    imprimante:'',//a changer avec internationalisation et utiliser une saga pour la promise de detection
    agence:'',
    pays:'Côte d\'ivoire'
};

export default function appSettingsReducer(state=initialState,action){
	switch (action.type){
		/*case actions.CHANGE_LANG:
			return{
				...state,
                language:action.lang
			};*/
        case actions.DIMINUE_VOL:
            return{
                ...state,
                volume:state.volume-1
            };
        case actions.AUGMENTE_VOL:
            if(state.volume<100){
                return{
                    ...state,
                    volume:state.volume+1
                }
            }else{
                return{...state};
            }
        case actions.CHANGE_PAYS:
            return{
                ...state,
                pays:action.pays
            };
            default:
            return{...state};
    }
}