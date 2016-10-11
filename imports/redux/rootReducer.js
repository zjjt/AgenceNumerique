import navigationReducer from './reducers/ui-nav-reducer';
import adminReducer from './reducers/admin-reducer';
import appSettingsReducer from './reducers/app-settings-reducer';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {i18nReducer} from 'react-redux-i18n';
import menuchosenReducer from './reducers/chosenMenu-reducer';
import ApolloClient ,{createNetworkInterface} from 'apollo-client';
import {meteorClientConfig} from 'meteor/apollo';


const client= new ApolloClient(meteorClientConfig());

const reducers={
	navigation:navigationReducer,
	form:formReducer,
	admin:adminReducer,
	settings:appSettingsReducer,
	i18n:i18nReducer,
	buttonsMenu:menuchosenReducer,
	apollo:client.reducer()
}
const rootReducer=combineReducers(reducers);
export {client,rootReducer};