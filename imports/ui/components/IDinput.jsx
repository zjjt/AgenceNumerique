import React,{PropTypes,Component} from 'react';
import {reduxForm} from 'redux-form';
import {Translate,Localize,I18n} from 'react-redux-i18n';
/*<button type="submit">OK</button>*/
/* prevoit d'animer les pages ou il ya le formulaire pour cacher les champs qui ne sont pas
 * selectionner(focused) pour laisser apparaitre le clavier android
 *
 * */
class IDinput extends Component{

	render(){
		let messageAide="invisible message";
		const {handleSubmit,fields:{identifiant}}=this.props;
		if(identifiant.touched && identifiant.error)
		{
			Bert.alert(identifiant.error, 'warning', 'fixed-top', 'fa-frown-o');
		}
		return(
			<form onSubmit={handleSubmit} className="inputsForm ">
				<input type="text" autocomplete="off" placeholder={I18n.t('application.Login.inputPlaceholder')} className="animated fadeInDown" {...identifiant}/>
			</form>
		);
	}
}
function validate(values) {
	const errors = {};
	if (!values.identifiant || values.identifiant.trim() === '') {
		errors.identifiant = I18n.t('application.Login.errorVide');
	}
	return errors;

}
const IDinputForm=reduxForm({
	form:'identification',
	fields:['identifiant'],
	validate
})(IDinput);

export default IDinputForm;

