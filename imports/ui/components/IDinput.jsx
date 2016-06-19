import React,{PropTypes,Component} from 'react';
import {reduxForm} from 'redux-form';
/*<button type="submit">OK</button>*/
/* prevoit d'animer les pages ou il ya le formulaire pour cacher les champs qui ne sont pas
 * selectionner(focused) pour laisser apparaitre le clavier android
 *
 * */
class IDinput extends Component{
	render(){
		const {handleSubmit,fields:{identifiant}}=this.props;
		return(
			<form onSubmit={handleSubmit} className="inputsForm">
				<input type="text"  placeholder="Veuillez entrer votre identifiant" {...identifiant}/>
			</form>
		);
	}
}
const IDinputForm=reduxForm({
	form:'identification',
	fields:['identifiant']
})(IDinput);

export default IDinputForm;

