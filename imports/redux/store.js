import {createStore,applyMiddleware,compose} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import {runTimer} from './sagas/adminTimerSaga';
import {loadTranslations,setLocale,syncTranslationWithStore} from 'react-redux-i18n';
import Langues from '../api/languages';

const sagaMiddleware=createSagaMiddleware();
const middleware=[thunk,sagaMiddleware];
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
store.dispatch(setLocale('en'));

export default store;