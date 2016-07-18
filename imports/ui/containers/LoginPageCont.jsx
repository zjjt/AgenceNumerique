import React,{Component} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import IDinputForm from '../components/IDinputForm.jsx';
import {RetourDebut} from '../../redux/actions/ui-nav-actions';
import {connect} from 'react-redux';
import {Translate,Localize,I18n} from 'react-redux-i18n';

class LoginPageCont extends Component {

	componentDidMount() {
	$('.button').click((e)=>{
			let $this=$(e.target);
			//navigation btn
			if($this.hasClass('nextbtn')){
				$this.removeClass().addClass('button nextbtn navBtn animated pulse');
				$('.submitBtn').click();
			}
			else if($this.hasClass('prevbtn')){
				$this.removeClass().addClass('button prevbtn navBtn animated pulse');
			}
		});
	}
	componentWillMount() {


	}
	componentWillUnMount() {

	}

	render() {
		const {navigation,dispatch,currentLang}=this.props;
		const style={
			justifyContent:"center"
		};

		return (

			<div className="masterContainer">
				<Header background="withback" logoInvisible={false} currentLang={currentLang}/>
				<section className="mainContent" style={style}>
					<span className="homespan animated zoomIn"><Translate value="application.Login.title"/></span>
					<IDinputForm/>
				</section>
				<Footer
					onClickRetour={()=>dispatch(RetourDebut('home'))}
					onClickNext={()=>{}}
					onClickDeco={()=>{}}
					isVisiblePrev={true}
					isVisibleNext={true}
					isVisibleDeco={false}
					textInfo={'www.groupensia.com'}
					textNext={I18n.t('application.Login.naviBtnR')}
				    textPrev={I18n.t('application.Login.naviBtnL')}
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
export default connect(mapStateToProps)(LoginPageCont);