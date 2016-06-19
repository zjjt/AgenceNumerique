import React,{PropTypes,Component} from 'react';
import {reduxForm} from 'redux-form';
/*<button type="submit">OK</button>*/
/* prevoit d'animer les pages ou il ya le formulaire pour cacher les champs qui ne sont pas
 * selectionner(focused) pour laisser apparaitre le clavier android
 *
 * */
class ALinput extends Component{
	render(){
		const {handleSubmit,fields:{nom,tel,birthday}}=this.props;
		const disabled=false;
		return(
			<form onSubmit={handleSubmit} className="inputsForm">
				<input type="text"  placeholder="Entrez votre nom" {...nom}/><br/>
				<input type="text"  placeholder="Entrez votre numéro de téléphone" {...tel}/><br/>
				<input type="text" disabled={disabled}  placeholder="Entrez votre date de naissance" {...birthday}/>
			</form>
		);
	}
}
const AlIDinputForm=reduxForm({
	form:'identification',
	fields:['identifiant']
})(ALinput);

export default AlIDinputForm;