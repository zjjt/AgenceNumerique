import React,{PropTypes,Component} from 'react';
import {reduxForm} from 'redux-form';
import {Bert} from 'meteor/themeteorchef:bert';
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
				<input type="text" autocomplete="off" placeholder="Entrez votre nom" {...nom} className="animated slideInRight"/><br/>
				<input type="text" autocomplete="off" placeholder="Entrez votre numéro de téléphone" className="animated slideInLeft" {...tel}/><br/>
				<input type="text" autocomplete="off" disabled={disabled}  placeholder="Entrez votre date de naissance Ex: jj/mm/année" className="animated slideInRight" {...birthday}/>
			</form>
		);
	}
}
//client side validation function
function validate(values) {
	const errors = {};
	const patternDate =/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
	if (!values.nom || values.nom.trim() === '') {
		errors.nom = 'N\'oubliez pas d\'entrer votre nom (réferrez vous à votre pièce d\'identité)';

	}
	/*if (values.nom.length < 10) {
		errors.nom = '10 caractères minimum';
	}*/
	console.log(values.nom);
	if (!values.tel || values.tel.trim() === '') {
		errors.tel = 'N\'oubliez pas d\'entrer votre numero de téléphone selon le format suivant (+225 01 09 03 04)';

	}
	if(!values.birthday || values.birthday.trim() === '') {
		errors.birthday = 'N\'oubliez pas d\'entrer votre date de naissance selon le format suivant (jj/mm/annee)';

	}
	if(!patternDate.test(values.birthday)){
		errors.birthday='Veuillez entrer une date de naissance valide';
	}
	return errors;
}
const AlIDinputForm=reduxForm({
	form:'Alt-identification',
	fields:['nom','tel','birthday'],
	validate
})(ALinput);

export default AlIDinputForm;