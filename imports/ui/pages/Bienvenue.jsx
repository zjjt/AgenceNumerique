import React,{Component} from 'react';
import {$} from 'meteor/jquery';
import BienvenueCont from '../containers/BienvenueCont.jsx';

export default class Bienvenue extends Component{
	componentWillMount() {
		if($("body").hasClass('adminBackground')){
			$("body").removeClass('adminBackground').addClass('skyBackground');
		}
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



