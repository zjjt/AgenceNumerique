import React,{PropTypes,Component} from 'react';
import {reduxForm,destroy,focus} from 'redux-form';
import {Bert} from 'meteor/themeteorchef:bert';
import {connection} from '../../redux/actions/admin-actions';
import {menuAdmin} from '../../redux/actions/ui-nav-actions';

/*<button type="submit">OK</button>*/
/* prevoit d'animer les pages ou il ya le formulaire pour cacher les champs qui ne sont pas
 * selectionner(focused) pour laisser apparaitre le clavier android
 *
 * */
var err='connection';

class Admininput extends Component{


	render(){
		const {listadmins,handleSubmit,fields:{nom,password}}=this.props;
		const disabled=false;
		var warning=undefined;


		const submit=(values,dispatch)=>{
			let foundName=listadmins.some((element)=>{
				return element.nom===values.nom;
			});
			let foundPassword=listadmins.some((element)=>{
				return element.password===values.password;
			});
			return new Promise((resolve,reject)=>{

				setTimeout(()=>{
					if(!foundName){
						reject({nom:'Cet administrateur n\'existe pas',_error:'Connection échouée'});
						dispatch(focus('Admin-identification','nom'));
					}else if(!foundPassword){
						reject({password:'Mauvais mot de passe',_error:'Connection échouée'});
						dispatch(focus('Admin-identification','password'));

					}else{
						//appeler une action thunk pour update la database avec l'heure de connexion de l'admin

						dispatch(connection(values.nom,values.password,new Date()));
						resolve();
						dispatch(menuAdmin('adminmenu'));
					}
				},100);
			});
		};

		//a revoir une fois le pack d'internalization installer
		if(nom.touched && nom.error){
			if(nom.error!=="Cet administrateur n'existe pas")
				Bert.alert(nom.error, 'warning', 'fixed-top', 'fa-frown-o');
			else
				Bert.alert(nom.error, 'danger', 'fixed-top', 'fa-frown-o');

		}
		else if(password.touched && password.error){
			if(password.error!=="Mauvais mot de passe")
				Bert.alert(password.error, 'warning', 'fixed-top', 'fa-frown-o');
			else
				Bert.alert(password.error, 'danger', 'fixed-top', 'fa-frown-o');
		}


		return(
			<form onSubmit={handleSubmit(submit)} className="inputsForm">
				<input type="text" autocomplete="off" placeholder="Entrez votre nom" className="animated slideInRight" {...nom}/><br/>
				<input type="password" autocomplete="off" placeholder="Entrez votre mot de passe" className="animated slideInLeft" {...password}/><br/>
				<input type="submit" value="OK" className="submitBtn invisibleBtn"/>

			</form>
		);
	}
}

Admininput.propTypes={
	//submit:PropTypes.func.isRequired
};

//client side validation function
function validate(values,dispatch) {

	const errors = {};
	if (!values.nom || values.nom.trim() === '') {
		errors.nom = 'N\'oubliez pas d\'entrer votre nom';

	}
	if (!values.password || values.password.trim() === '') {
		errors.password = 'N\'oubliez pas d\'entrer votre mot de passe';

	}
	return errors;
}
const AdminInputForm=reduxForm({
	form:'Admin-identification',
	fields:['nom','password'],
	validate
})(Admininput);

export default AdminInputForm;
