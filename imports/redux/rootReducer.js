import navigationReducer from './reducers/ui-nav-reducer';
import adminReducer from './reducers/admin-reducer';
import appSettingsReducer from './reducers/app-settings-reducer';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {i18nReducer} from 'react-redux-i18n';


const reducers={
	navigation:navigationReducer,
	form:formReducer,
	admin:adminReducer,
	settings:appSettingsReducer,
	i18n:i18nReducer
}
const rootReducer=combineReducers(reducers);
export default rootReducer;