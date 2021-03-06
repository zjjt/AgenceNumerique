import {createStore,applyMiddleware,compose} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {client,rootReducer} from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import {runTimer} from './sagas/adminTimerSaga';
import {loadTranslations,setLocale,syncTranslationWithStore} from 'react-redux-i18n';
import {moment} from 'meteor/momentjs:moment';
import Langues from '../api/languages';
import frenchLocale from '../api/momentjsConfig';

const sagaMiddleware=createSagaMiddleware();
const middleware=[thunk,sagaMiddleware,client.middleware()];
let devtools;

if(process.env.NODE_ENV==='development'){
	if(window.devToolsExtension){
		devtools=window.devToolsExtension();
	}else{
		const logger=createLogger();
		middleware.push(logger);
		devtools=f=>f;
	}
}else{
	devtools=f=>f;
}

const store=createStore(rootReducer,compose(applyMiddleware(...middleware),devtools));
sagaMiddleware.run(runTimer);


//i18n chargement des middleware 
syncTranslationWithStore(store);
store.dispatch(loadTranslations(Langues));
store.dispatch(setLocale('fr'));
//moment.locale('en',frenchLocale);//dispatch une action pour changer les langues et regler la locale

export default store;