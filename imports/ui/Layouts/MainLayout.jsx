import React,{PropTypes,Component} from 'react';
import store from '../../redux/store';
import {Provider} from 'react-redux';
import FlowRouter from 'meteor/kadira:flow-router';
import createDiv from '../../startup/client/animations';
import {setLocale} from 'react-redux-i18n';


export default class MainLayout extends Component{
	componentWillMount() {
		$("body").removeClass('adminBackground').addClass('skyBackground');

	}

	componentDidMount() {	
		if(!$('.decoration').length){
			setInterval(createDiv,1000);
		}
		
		//setInterval(createDiv,1000);
	}
	render(){
		const {content}=this.props;
			return(
			<Provider store={store}>
			{content()}
			</Provider>
		);
	}
	

}
MainLayout.propTypes={
	content:PropTypes.func.isRequired
};
