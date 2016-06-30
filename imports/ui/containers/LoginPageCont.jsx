import React,{Component} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {NapaId} from '../../redux/actions/ui-nav-actions';
import IDinputForm from '../components/IDinput.jsx';
import {connect} from 'react-redux';
import {Translate,Localize,I18n} from 'react-redux-i18n';

class LoginPageCont extends Component {
	componentWillMount() {


	}
	componentWillUnMount() {

	}

	render() {
		const {navigation,dispatch}=this.props;
		const style={
			justifyContent:"center"
		};

		return (

			<div className="masterContainer">
				<Header background="withback" logoInvisible={false} currentLang={()=>this.props.getState().i18n.locale}/>
				<section className="mainContent" style={style}>
					<span className="homespan animated zoomIn"><Translate value="application.Login.title"/></span>
					<IDinputForm/>
				</section>
				<Footer
					onClickRetour={()=>{}}
					onClickNext={()=>dispatch(NapaId('alt-login'))}
					onClickDeco={()=>{}}
					isVisiblePrev={false}
					isVisibleNext={true}
					isVisibleDeco={false}
					textInfo={'www.groupensia.com'}
					textNext={I18n.t('application.Login.naviBtnR')}
				    textPrev={''}
				/>
			</div>

		);

	}
}
export default connect()(LoginPageCont);