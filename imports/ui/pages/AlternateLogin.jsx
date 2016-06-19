import React,{Component} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {NapaId,Retour} from '../../redux/actions/ui-nav-actions';
import AlIDinputForm from '../components/AlterLogin.jsx';
import {connect} from 'react-redux';
import {$} from 'meteor/jquery';

class AlternateLogin extends Component {
	componentWillMount() {
		$("body").addClass('skyBackground');

	}
	render() {
		const {navigation,dispatch}=this.props;
		return (

			<div className="masterContainer">
				<Header background="withback" logoInvisible={false}/>
				<section className="mainContent rm-justify">
					<span className="homespan">Identifiez vous !</span>
					<AlIDinputForm/>
				</section>
				<Footer
					onClickRetour={()=>dispatch(Retour('login'))}
					onClickNext={()=>dispatch(NapaId('alternate-identification'))}
					isVisiblePrev={true}
					isVisibleNext={true}
					textInfo={'www.groupesnsia.com'}
					textNext={'Valider '}
				/>
			</div>

		);

	}
}
export default connect()(AlternateLogin);