import React,{PropTypes} from 'react';
import store from '../../redux/store';
import {Provider} from 'react-redux';
import FlowRouter from 'meteor/kadira:flow-router';


export default function MainLayout({content}){

	return(
		<Provider store={store}>
		{content()}
		</Provider>
	);

}
MainLayout.propTypes={
	content:PropTypes.func.isRequired
};