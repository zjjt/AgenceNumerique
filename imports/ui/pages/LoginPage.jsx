import React,{Component} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {NapaId} from '../../redux/actions/ui-nav-actions';
import IDinputForm from '../components/IDinput.jsx';
import {connect} from 'react-redux';
import {$} from 'meteor/jquery';

class LoginPage extends Component {
	componentWillMount() {
		$("body").addClass('skyBackground');

	}
	render() {
		const {navigation,dispatch}=this.props;
		const style={
			justifyContent:"center"
		};
		return (

			<div className="masterContainer">
				<Header background="withback" logoInvisible={false}/>
				<section className="mainContent" style={style}>
					<span className="homespan">Connectez vous !</span>
					<IDinputForm/>
				</section>
				<Footer
					onClickRetour={()=>alert('vialin')}
					onClickNext={()=>dispatch(NapaId('alt-login'))}
					isVisiblePrev={false}
					isVisibleNext={true}
					textInfo={'www.groupesnsia.com'}
					textNext={'Des soucis ? Cliquez ici '}
				/>
			</div>

		);

	}
}
export default connect()(LoginPage);