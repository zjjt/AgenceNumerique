import React,{Component} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {NapaId,Retour} from '../../redux/actions/ui-nav-actions';
import AlIDinputForm from '../components/AlterLogin.jsx';
import {Translate,Localize,I18n} from 'react-redux-i18n';
import {connect} from 'react-redux';


class AlternateLoginCont extends Component {

	render() {
		const {navigation,dispatch}=this.props;
		return (

			<div className="masterContainer">
				<Header background="withback" logoInvisible={false} currentLang={()=>this.props.getState().i18n.locale}/>
				<section className="mainContent rm-justify">
					<span className="homespan animated zoomIn"><Translate value="application.AltLogin.title"/></span>
					<AlIDinputForm/>

				</section>
				<Footer
					onClickRetour={()=>dispatch(Retour('login'))}
					onClickNext={()=>dispatch(NapaId('alternate-identification'))}
					onClickDeco={()=>{}}
					isVisiblePrev={true}
					isVisibleNext={true}
					isVisibleDeco={false}
					textInfo={'www.groupensia.com'}
					textNext={'Valider '}
					textPrev={' Retour'}
				/>
			</div>

		);

	}
}
export default connect()(AlternateLoginCont);