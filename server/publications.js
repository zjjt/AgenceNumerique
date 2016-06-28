import {Meteor} from 'meteor/meteor';
import Admins from '../imports/api/collections';
import Souscripteurs from '../imports/api/collections';

if(Meteor.isServer){
	//ecrire les publications ici.si possible fabriquer la ou les requetes en fonction de l'action realisee
  //autowrite in admin from the server
  const terminalAdmin={
    nom:"NSIA@AN_admin-g",
    password:"NSIA@20anszjjt",
    createdAt:new Date(),
    latestConnection:new Date()
  };
  
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

  
  

  Meteor.publish('alladmins',()=>{
    return Admins.find({});
  });
}
