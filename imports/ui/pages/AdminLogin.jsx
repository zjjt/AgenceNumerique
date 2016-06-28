import React,{Component} from 'react';
import AdminLoginCont from '../containers/AdminLoginCont.jsx';
import {$} from 'meteor/jquery';
import createDiv from '../../startup/client/animations';

export default class AdminLogin extends Component{
	componentWillMount() {
		$("body").removeClass('skyBackground').addClass('adminBackground');
		
	}

	componentDidMount() {
		if($('.decoration').length){
			break;
		}else{
			setInterval(createDiv,1000);
		}
		//setInterval(createDiv,1000);
	}
	componentWillUnMount() {
		//lance une animation quand on quite la page

	}
	render(){
		return(
			<div>
				<AdminLoginCont/>
			</div>
		);
	}
}
