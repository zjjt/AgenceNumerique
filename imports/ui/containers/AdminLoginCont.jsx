import React,{Component} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {settings,rapport,menuAdmin,RetourDebut} from '../../redux/actions/ui-nav-actions';
import AdminInputForm from '../components/AdminInputForm.jsx';
import {connect} from 'react-redux';
import {Admins} from '../../api/collections';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {connection} from '../../redux/actions/admin-actions';
import {Translate,Localize,I18n} from 'react-redux-i18n';
import {$} from 'meteor/jquery';

class AdminLoginCont extends Component {
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

	render() {
		const {navigation,dispatch,currentLang}=this.props;
		const listadmins=this.props.alladmins;
		let warning=true;//flag pour permettre de differencier entre une erreur client et une erreur server

		console.log(listadmins);
		return (

			<div className="masterContainer">
				<Header background="withback" logoInvisible={false} currentLang={currentLang}/>
				<section className="mainContent rm-justify">
					<span className="homespan animated zoomIn"><Translate value="application.AdminLogin.title"/></span>
					<AdminInputForm listadmins={listadmins} warning={warning}/>
						<div>{listadmins.map(T=><p key={T._id}>{T.nom}<br/>{T.password}</p>)}</div>
				</section>
				<Footer
					onClickRetour={()=>dispatch(RetourDebut('home'))}
					onClickNext={()=>{}}
					onClickDeco={()=>{}}
					isVisiblePrev={true}
					isVisibleNext={true}
					isVisibleDeco={false}
					textInfo={'www.groupensia.com'}
					textNext={I18n.t('application.AdminLogin.naviBtnR')}
				    textPrev={I18n.t('application.AdminLogin.naviBtnL')}
				/>
			</div>

		);

	}
}
const AdminLoginContnair=createContainer(({dispatch,navigation})=>{
	const adminsub=Meteor.subscribe('alladmins');
	return{
		adminsubready:adminsub.ready(),
		alladmins:Admins.find({}).fetch()
	}
},AdminLoginCont);

function mapStateToProps(state){
	return{
		currentLang: state.i18n.locale
	};
}
export default connect(mapStateToProps)(AdminLoginContnair);
