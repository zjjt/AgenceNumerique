import React,{PropTypes,Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {reduxForm} from 'redux-form';
import {choixVisite} from '../../redux/actions/ui-nav-actions';
import {Translate,Localize,I18n} from 'react-redux-i18n';
/*<button type="submit">OK</button>*/
/* prevoit d'animer les pages ou il ya le formulaire pour cacher les champs qui ne sont pas
 * selectionner(focused) pour laisser apparaitre le clavier android
 *
 * */
class IDinput extends Component{

	render(){
		let messageAide="invisible message";
		const submit=(values,dispatch)=>{
		//appeler loginwithpassword		
			return new Promise((resolve,reject)=>{
//si la connection echoue on renvoie la raison sinon on dispatch l'utilisateur sur un nouvel ecran
				const loginRes=Meteor.loginWithPassword(values.username,values.password,(error)=>{
			console.log(error);
					setTimeout(()=>{
						
						if(error){
							if(error.reason==="User not found"){
							reject({username:I18n.t('application.Login.nomServError'),_error:'Connection échouée'});
							
							}else if(error.reason==='Incorrect password'){
								reject({password:I18n.t('application.Login.passServError'),_error:'Connection échouée'});
							}
						}else{
							resolve();
							dispatch(choixVisite('usermenu'));
						}
					},100);
				});
			
			});
		};
		const {handleSubmit,fields:{username,password}}=this.props;
	
		if(username.touched && username.error){
			if(username.error!==I18n.t('application.Login.nomServError'))
				Bert.alert(username.error, 'warning', 'fixed-top', 'fa-frown-o');
			else
				Bert.alert(username.error, 'danger', 'fixed-top', 'fa-frown-o');

		}
		else if(password.touched && password.error){
			if(password.error!==I18n.t('application.Login.passServError'))
				Bert.alert(password.error, 'warning', 'fixed-top', 'fa-frown-o');
			else
				Bert.alert(password.error, 'danger', 'fixed-top', 'fa-frown-o');
		}
		return(
			<form onSubmit={handleSubmit(submit)} className="inputsForm ">
				<input type="text" autocomplete="off" placeholder={I18n.t('application.Login.nomPlaceholder')} className="animated slideInLeft" {...username}/>
				<input type="password" autocomplete="off" maxlength="6" placeholder={I18n.t('application.Login.passPlaceholder')} className="animated slideInRight" {...password}/>
				<input type="submit" value="OK" className="submitBtn invisibleBtn"/>
			</form>
		);
	}
}
//validtion client
function validate(values) {
	const errors = {};
	if (!values.username || values.username.trim() === '') {
		errors.username = I18n.t('application.Login.nomErrorVide');
	}
	if (!values.password || values.password.trim() === '') {
		errors.password = I18n.t('application.Login.passErrorVide');
	}else if(values.password.length<6){
		errors.password = I18n.t('application.Login.passErrorLength');
	}
	return errors;

}
const IDinputForm=reduxForm({
	form:'identification',
	fields:['username','password'],
	validate
})(IDinput);
/**
 * fonction validate de redux-form pour lancer une validation client sur les dates 
 * function validate(values) {
	const errors = {};
	const patternDate =/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
	if (!values.nom || values.nom.trim() === '') {
		errors.nom = I18n.t('application.AltLogin.nomErrorVide');

	}
	/*if (values.nom.length < 10) {
		errors.nom = '10 caractères minimum';
	}
	
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
 */
export default IDinputForm;

