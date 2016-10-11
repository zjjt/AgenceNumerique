import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Random} from 'meteor/random';
import {moment} from 'meteor/momentjs:moment';
import {faker} from 'meteor/practicalmeteor:faker'; 
import {Baby} from 'meteor/modweb:baby-parse';
import {check} from 'meteor/check';
import {Souscripteurs,Settings,Admins,Polices,Rapports,Agences} from '../imports/api/collections';
//se rappeler de lancer ses transactions en locale meme si il ny a pas de connection avec le server on the first run

/*CONFIGURATION PAR DEFAUT */
if(Meteor.isServer){
	//ecrire les publications ici.si possible fabriquer la ou les requetes en fonction de l'action realisee
  //autowrite in admin from the server
  //==================================================
  //CONFIGURATION ET TESTS SERVER
  const terminalAdmin={
    nom:"NSIA@AN_admin-g",
    password:"NSIA@20anszjjt",
    createdAt:new Date(),
    latestConnection:new Date()
  };
  //autocreate default settings for the app on the first run
  /*const terminalSettings={
    terminalID:'AN'+Random.id(8),
    language:'en',
    volume:100,
    imprimante:'none',
    terminalNumber:0,
    agence:'',
  };*/
  
  const dummyAgency={
    nom:'Agence par defaut',
    pays:'Côte d\'ivoire',
    telephone:'none',
    email:'none',
    chefAgence:'none'
  }
  //check in db if user and password do not already exist if exist,do not insert else do shouldComponentUpdate(nextProps, nextState) 
const adminarray=Admins.find({}).fetch();
let found=adminarray.some((el)=>{
  if(el.nom===terminalAdmin.nom && el.password===terminalAdmin.password)
  return true;
});
if(!found){
    Admins.insert({
    nom:terminalAdmin.nom,
    password:terminalAdmin.password,
    createdAt:terminalAdmin.createdAt,
    latestConnection:terminalAdmin.latestConnection
  
  });
}

//check if dummy agence existe si non cree une dummy agence
/*const agencearray=Agences.find({}).fetch();
found=agencearray.some((el)=>{
  if(el.nom==='Agence par defaut' && el.pays==='Côte d\'ivoire')
    return true;
});
if(!found){
  Agences.insert({
    nom:dummyAgency.nom,
    pays:dummyAgency.pays,
    telephone:dummyAgency.telephone,
    email:dummyAgency.email,
    chefAgence:dummyAgency.chefAgence
  });
}*/

//ce code cree un utilisateur par defaut dans la collection users de meteor pour des travaux et divers tests
let dummyUser={
  username:"12345",
  password:'10-10-1990'//Random.id(6)
};
/*if(!Accounts.findUserByUsername(dummyUser.username)){
   Accounts.createUser({
    username:dummyUser.username,
    password:dummyUser.password,
  });
 
}
dummyUser.id=Meteor.users.findOne({username:dummyUser.username},{$fields:{'_id':1,'createdAt':0,'services':0,'username':0}});
Meteor.users.update(dummyUser.id._id,{
    $set:{
      ide_client_unique:dummyUser.username
    }
 });*/
 //Ici on parse le fichier IDUNIQ en json pour insertion dans meteor.users
const IDUNIQPATH=process.env.PWD+'/IDUNIQ.csv';
Baby.parseFiles(IDUNIQPATH,{
  header:true,
  complete(results,file){
    check(results.data,Array);
    for(let i=0;i<results.data.length;i++){
      let user =results.data[i];
      if(!Accounts.findUserByUsername(user.IDE_CLIENT_UNIQUE)){
        //createUser then update it with
        Accounts.createUser({
           username:user.IDE_CLIENT_UNIQUE,
           password:user.DATE_NAISSANCE,
        });
        //on recupere le _id meteor de l'utilisateur cree
        let nuser=Meteor.users.findOne({username:user.IDE_CLIENT_UNIQUE},{$fields:{'_id':1,'createdAt':0,'services':0,'username':0}}); 
        Meteor.users.update(nuser._id,{
          $set:{
                date_naissance:user.DATE_NAISSANCE,
                nom:user.NOM_CLIENT,
                prenoms:user.PRENOMS_CLIENT,
                fullname:user.NOM_CLIENT+" "+user.PRENOMS_CLIENT,
                sexe:user.SEXE,
                tel1:user.TELEPHONE,
                tel2:user.TELEPHONE_1,
                adressePostale:user.ADRESSE_POSTALE,
                profession:user.PROFESSION,
                civilite:user.CIVILITE,
                nationalite:user.NATIONALITE,
                situationMatrimoniale:user.SITUATION_MATRIMONIALE,
                typeClient:user.TYPE_CLIENT,
                codeBank:user.CODE_BANQUE,
                codeAgence:user.CODE_AGENCE,
                numdecompte:user.NUMERO_DE_COMPTE,
                cleRIB:user.CLE_RIB,
                date_debut:user.DATE_DEBUT,

              }
          });
      }else{
        //console.log(user.IDE_CLIENT_UNIQUE+" existe deja");
        return;
      }
    }
  }
});


//=======================================
/*FIN CONFIGURATION */
  
  
/*PUBLICATIONS API */
//========================================
  Meteor.publish('alladmins',()=>{
    return Admins.find({});
  });


 // Meteor.publish('settings',getSetting);
}
