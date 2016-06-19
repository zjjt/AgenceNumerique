import React,{Component} from 'react';
import {EntreeDansLapp} from '../../redux/actions/ui-nav-actions';
import {connect} from 'react-redux';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {$} from 'meteor/jquery';


export default class Bienvenue extends Component{
	componentWillMount() {
		$("body").addClass('skyBackground');

	}

	componentWillUnMount() {

	}
	render(){
		const style={
			justifyContent:"center"
		};
		return(
			/*header background=withback ou ''
			* logoinvisible soit true ou false*/
			<div className="masterContainer">
				<Header background="withback" logoInvisible={false}/>
				<section className="mainContent" style={style}>
					<span className="homespan">NSIA Vie Assurances<br/>Vous souhaite la bienvenue</span>
					<span className="homespan-child"><br/><br/> Appuyer sur le boutton pour commencer</span>


				</section>
				<Footer
					onClickRetour={()=>alert('vialin')}
					onClickNext={()=>this.props.dispatch(EntreeDansLapp('login'))}
					isVisiblePrev={false}
					isVisibleNext={true}
					textInfo={'www.groupesnsia.com'}
					textNext={'Entree'}
				/>


			</div>
		);
	}
}



export default connect()(Bienvenue);