import * as actions from '../actions/buttonMenu-actions';

const initialState={
    chosenMenu:'none'
};

export default function menuchosenReducer(state=initialState,action){
    switch(action.type){
        case actions.CHOSEN_MENU:
            return{
                    ...state,
                    chosenMenu:action.endmenu
                };
        default:
        return{
            ...state
        };
    }
}