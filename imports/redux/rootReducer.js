import navigationReducer from './reducers/ui-nav-reducer';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';


const reducers={
	navigation:navigationReducer,
	form:formReducer
}
const rootReducer=combineReducers(reducers);
export default rootReducer;