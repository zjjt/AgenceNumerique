import React,{PropTypes,Component} from 'react';
import {reduxForm} from 'redux-form';
import {Bert} from 'meteor/themeteorchef:bert';
import {Translate,Localize,I18n} from 'react-redux-i18n';
/*<button type="submit">OK</button>*/
/* prevoit d'animer les pages ou il ya le formulaire pour cacher les champs qui ne sont pas
 * selectionner(focused) pour laisser apparaitre le clavier android
 *
 * */
class ALinput extends Component{
	render(){
		const {handleSubmit,fields:{nom,tel,birthday}}=this.props;
		const disabled=false;
		if(nom.touched && nom.error)
		{
			Bert.alert(nom.error, 'warning', 'fixed-top', 'fa-frown-o');
		}else if(tel.touched && tel.error){
			Bert.alert(tel.error, 'warning', 'fixed-top', 'fa-frown-o');
		}else if(birthday.touched && birthday.error){
			Bert.alert(birthday.error, 'warning', 'fixed-top', 'fa-frown-o');
		}
		return(
			<form onSubmit={handleSubmit} className="inputsForm">
				<input type="text" autocomplete="off" placeholder={I18n.t('application.AltLogin.nomPlaceholder')}{...nom} className="animated slideInRight"/><br/>
				<input type="text" autocomplete="off" placeholder={I18n.t('application.AltLogin.telPlaceholder')} className="animated slideInLeft" {...tel}/><br/>
				<input type="text" autocomplete="off" disabled={disabled}  placeholder={I18n.t('application.AltLogin.birthPlaceholder')} className="animated slideInRight" {...birthday}/>
			</form>
		);
	}
}
//client side validation function
function validate(values) {
	const errors = {};
	const patternDate =/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
	if (!values.nom || values.nom.trim() === '') {
		errors.nom = I18n.t('application.AltLogin.nomErrorVide');

	}
	/*if (values.nom.length < 10) {
		errors.nom = '10 caractères minimum';
	}*/
	console.log(values.nom);
	if (!values.tel || values.tel.trim() === '') {
		errors.tel = I18n.t('application.AltLogin.telErrorVide');

	}
	if(!values.birthday || values.birthday.trim() === '') {
		errors.birthday = I18n.t('application.AltLogin.birthErrorVide');

	}
	if(!patternDate.test(values.birthday)){
		errors.birthday=I18n.t('application.AltLogin.birthErrorPattern');
	}
	return errors;
}
const AlIDinputForm=reduxForm({
	form:'Alt-identification',
	fields:['nom','tel','birthday'],
	validate
})(ALinput);

export default AlIDinputForm;