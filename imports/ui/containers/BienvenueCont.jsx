import React,{Component} from 'react';
import {EntreeDansLapp} from '../../redux/actions/ui-nav-actions';
import {logoclicked} from '../../redux/actions/admin-actions';
import {changeLangue} from '../../redux/actions/app-settings-actions';
import {connect} from 'react-redux';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import LanguageBox from '../components/LanguageBox.jsx';
import {Translate,Localize,I18n} from 'react-redux-i18n';



export  class BienvenueCont extends Component{
	
	render(){
		const{currentLang}=this.props;
		const style={
			justifyContent:"center"
		};
		console.log(this.props.getState);
		return(
			<div className="masterContainer">
				<Header background="withback" logoInvisible={false} logoclicking={()=>this.props.dispatch(logoclicked())} currentLang={currentLang}/>

				<section className="mainContent animated zoomIn" style={style}>
					<span className="homespan">NSIA Vie Assurances<br/><Translate value="application.Bienvenue.welcome"/></span>
					<span className="homespan-child"><br/><br/><Translate value="application.Bienvenue.clignotext"/></span>
					<div className="languageBox">
						<LanguageBox handleclik={()=>this.props.dispatch(changeLangue('fr'))} language="fr" classes=" fadeInLeft" image="/img/fr.png"/>
						<LanguageBox handleclik={()=>this.props.dispatch(changeLangue('en'))} language="en" classes=" fadeInRight" image="/img/en.png"/>
					</div>
					
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

function mapStateToProps(state){
	return{
		currentLang: state.i18n.locale
	};
}

export default connect(mapStateToProps)(BienvenueCont);