import {createStore,applyMiddleware,compose} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware=[thunk];
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

export default store;