import {Meteor} from 'meteor/meteor';
import {Random} from 'meteor/random';
import {moment} from 'meteor/momentjs:moment';
import {Souscripteurs,Settings,Admins,Polices,Rapports,Agences} from '../imports/api/collections';
//se rappeler de lancer ses transactions en locale meme si il ny a pas de connection avec le server on the first run

/*CONFIGURATION PAR DEFAUT */
if(Meteor.isServer){
	//ecrire les publications ici.si possible fabriquer la ou les requetes en fonction de l'action realisee
  //autowrite in admin from the server
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
const agencearray=Agences.find({}).fetch();
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
}
/*FIN CONFIGURATION */
  
  
/*PUBLICATIONS API */
  Meteor.publish('alladmins',()=>{
    return Admins.find({});
  });

  Meteor.publish('agences',()=>{
    return Agences.find({});
  });
//settings--------
  const getSetting=(filter)=>{
    const query={};
    switch(filter){
      case 'TERMINAL':
      break;
      case 'EVERYONE':
      break;
    }
    return Settings.find(query,{limit:10});
  };
  Meteor.publish('settings',getSetting);
}
