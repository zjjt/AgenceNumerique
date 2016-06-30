import React,{Component} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {connect} from 'react-redux';


class MenuAdminCont extends Component {

	render() {
		const {navigation,dispatch}=this.props;
		return (

			<div className="masterContainer">
				<Header background="withback" logoInvisible={false} currentLang={()=>this.props.getState().i18n.locale}/>
				<section className="mainContent rm-justify">
					<span className="homespan animated zoomIn">Choix du menu</span>
				</section>
				<Footer
					onClickRetour={()=>{}}
					onClickNext={()=>{}}
					onClickDeco={()=>{}}
					isVisiblePrev={false}
					isVisibleNext={false}
					isVisibleDeco={true}
					textInfo={'www.groupesnsia.com'}
					textNext={' '}
					textPrev={''}
				/>
			</div>

		);

	}
}
export default connect()(MenuAdminCont);