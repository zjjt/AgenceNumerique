import React,{Component} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {NapaId} from '../../redux/actions/ui-nav-actions';
import IDinputForm from '../components/IDinput.jsx';
import {connect} from 'react-redux';


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
				<Header background="withback" logoInvisible={false}/>
				<section className="mainContent" style={style}>
					<span className="homespan animated zoomIn">Connectez vous !</span>
					<IDinputForm/>
				</section>
				<Footer
					onClickRetour={()=>{}}
					onClickNext={()=>dispatch(NapaId('alt-login'))}
					onClickDeco={()=>{}}
					isVisiblePrev={false}
					isVisibleNext={true}
					isVisibleDeco={false}
					textInfo={'www.groupesnsia.com'}
					textNext={'Des soucis ? Cliquez ici '}
				    textPrev={''}
				/>
			</div>

		);

	}
}
export default connect()(LoginPageCont);