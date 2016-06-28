import React,{Component} from 'react';
import {EntreeDansLapp} from '../../redux/actions/ui-nav-actions';
import {logoclicked} from '../../redux/actions/admin-actions';
import {connect} from 'react-redux';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';


export default class BienvenueCont extends Component{
	render(){
		const style={
			justifyContent:"center"
		};
		console.log(this.props.getState);
		return(
			<div className="masterContainer">
				<Header background="withback" logoInvisible={false} logoclicking={()=>this.props.dispatch(logoclicked(1,this.props.dispatch))}/>

				<section className="mainContent animated zoomIn" style={style}>
					<span className="homespan">NSIA Vie Assurances<br/>Vous souhaite la bienvenue</span>
					<span className="homespan-child"><br/><br/> Appuyer sur le boutton pour commencer</span>
				</section>
				<Footer
					onClickRetour={()=>alert('vialin')}
					onClickNext={()=>this.props.dispatch(EntreeDansLapp('login'))}
					onClickDeco={()=>{}}
					isVisiblePrev={false}
					isVisibleNext={true}
					isVisibleDeco={false}
					textInfo={'www.groupesnsia.com'}
					textNext={'Entree'}
				    textPrev={''}


				/>
			</div>

		);
	}
}



export default connect()(BienvenueCont);