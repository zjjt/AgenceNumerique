import React,{Component} from 'react';
import {$} from 'meteor/jquery';
import createDiv from '../../startup/client/animations';
import BienvenueCont from '../containers/BienvenueCont.jsx';

export default class Bienvenue extends Component{
	componentWillMount() {
		$("body").removeClass('adminBackground').addClass('skyBackground');

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
				<BienvenueCont/>
			</div>
		);
	}
}



