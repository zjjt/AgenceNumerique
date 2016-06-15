import React from 'react';
import Header from '../components/Header.jsx';
import {NapaId} from '../../redux/actions/ui-nav-actions';
import {connect} from 'react-redux';

export default LoginPage=({navigation,dispatch})=>{
	return(

		<div>
			<Header/>
			<div className="contentWrapper">
			<p>container pour login page:</p>
			<p>d'abord l'utilisateur se connecte en entrant <br/> son identifiant si il n'en a pas on lui donne la possibilite d'aller sur une autre page
				<br/><label for="">Entrez votre identifiant</label><input type="text" placeholder="Identifiant"/>
				<button onClick={''}>OK</button></p>
			</div>
			<div>
				<button onClick={()=>dispatch(NapaId('2ndlogin'))}>Vous avez des soucis ? Cliquez ici</button>
			</div>
		</div>
	);
}
export default connect()(LoginPage);