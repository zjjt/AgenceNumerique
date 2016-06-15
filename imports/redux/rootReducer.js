import navigationReducer from './reducers/ui-nav-reducer';
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
	navigationReducer
});
export default rootReducer;