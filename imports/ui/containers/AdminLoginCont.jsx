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
import {$} from 'meteor/jquery';

class AdminLoginCont extends Component {
	componentDidMount() {
		$('.nextbtn').click(()=>{
			$('.submitBtn').click();
		});
	}

	render() {
		const {navigation,dispatch}=this.props;
		const listadmins=this.props.alladmins;
		let warning=true;//flag pour permettre de differencier entre une erreur client et une erreur server

		console.log(listadmins);
		return (

			<div className="masterContainer">
				<Header background="withback" logoInvisible={false} currentLang={()=>this.props.getState().i18n.locale}/>
				<section className="mainContent rm-justify">
					<span className="homespan animated zoomIn">Bienvenue administrateur</span>
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
					textNext={'Valider '}
				    textPrev={' Quitter'}
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
export default connect()(AdminLoginContnair);
