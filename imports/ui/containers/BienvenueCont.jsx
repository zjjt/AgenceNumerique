import React,{Component} from 'react';
import {EntreeDansLapp} from '../../redux/actions/ui-nav-actions';
import {logoclicked} from '../../redux/actions/admin-actions';
import {connect} from 'react-redux';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {Translate,Localize,I18n} from 'react-redux-i18n';



export default class BienvenueCont extends Component{
	render(){
		const style={
			justifyContent:"center"
		};
		console.log(this.props.getState);
		return(
			<div className="masterContainer">
				<Header background="withback" logoInvisible={false} logoclicking={()=>this.props.dispatch(logoclicked())}/>

				<section className="mainContent animated zoomIn" style={style}>
					<span className="homespan">NSIA Vie Assurances<br/><Translate value="application.Bienvenue.welcome"/></span>
					<span className="homespan-child"><br/><br/><Translate value="application.Bienvenue.clignotext"/></span>
				</section>
				<Footer
					onClickRetour={()=>alert('vialin')}
					onClickNext={()=>this.props.dispatch(EntreeDansLapp('login'))}
					onClickDeco={()=>{}}
					isVisiblePrev={false}
					isVisibleNext={true}
					isVisibleDeco={false}
					textInfo={'www.groupensia.com'}
					textNext={I18n.t('application.Bienvenue.naviBtnR')}
				    textPrev={''}


				/>
			</div>

		);
	}
}



export default connect()(BienvenueCont);