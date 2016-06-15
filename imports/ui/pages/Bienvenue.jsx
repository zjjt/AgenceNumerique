import React from 'react';
import {EntreeDansLapp} from '../../redux/actions/ui-nav-actions';
import {connect} from 'react-redux';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';





export default function Bienvenue({navigation,dispatch}){
	return(
		<div className="masterContainer">
			<Header background="" logoInvisible={false}/>
			<section className="mainContent">
				<span>L'Agence Num&eacute;rique NSIA<br/>Vous souhaite la bienvenue</span>
			</section>
			<Footer
				onClickRetour={()=>''}
				onClickNext={()=>dispatch(EntreeDansLapp('login'))}
				isVisiblePrev={true}
			    isVisibleNext={true}
			    textInfo={'www.groupesnsia.com'}
			    textNext={'ENTREE'}
			/>


		</div>
	);
}
export default connect()(Bienvenue);