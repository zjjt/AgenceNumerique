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
  Admins.upsert({
    nom:terminalAdmin.nom,
    password:terminalAdmin.password,
    createdAt:terminalAdmin.createdAt,
    latestConnection:terminalAdmin.latestConnection
  },{
    $set:{
      nom:terminalAdmin.nom
    }
  });

  Meteor.publish('alladmins',()=>{
    return Admins.find({});
  });
}
