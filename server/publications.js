import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Random} from 'meteor/random';
import {moment} from 'meteor/momentjs:moment';
import {faker} from 'meteor/practicalmeteor:faker';
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

//ce code cree un utilisateur par defaut dans la collection users de meteor pour des travaux
let dummyUser={
  username:"NSIADUMMY",
  password:'123@56'//Random.id(6)
};
if(!Accounts.findUserByUsername(dummyUser.username)){
   Accounts.createUser({
    username:dummyUser.username,
    password:dummyUser.password
  });
}
//le code suivant cree une liste de 10 polices pour l'utilisateur dummy
/**
 * il ya deux types de police 'individuelle' et 'groupe'.les numero de polices
 * commencant par 1,2,3,70,71,72,73,74 sont des polices individuelles.6,5,75 sont des polices de groupe
 */
function getNumeroPolice(){
  return Math.round(Math.random()*(7400-1000)+1000);
}
function getmonthtoAdd(){
  return Math.random()*(12-1)+1;
}
function getPolices(nombre){
  let police=[];
  const defaultPolices=[{
  nom:'NSIA RETRAITE',
  type:'INDIVIDUELLE',
  beneficiaires:[{nom:faker.name.findName()}]
},{
  nom:'NSIA ETUDE',
  type:'INDIVIDUELLE',
  beneficiaires:[{nom:faker.name.findName()},{nom:faker.name.findName()},{nom:faker.name.findName()}]
},{
  nom:'NSIA EPARGNE PLUS',
  type:'INDIVIDUELLE',
  beneficiaires:[{nom:faker.name.findName()},{nom:faker.name.findName()}]
},{
  nom:'NSIA ASSISTANCE FUNERAILLES',
  type:'INDIVIDUELLE',
  beneficiaires:[{nom:faker.name.findName()}]
},{
  nom:'NSIA PREVOYANCES DECES',
  type:'INDIVIDUELLE',
  beneficiaires:[{nom:faker.name.findName()}]
},{
  nom:'NSIA PENSION',
  type:'INDIVIDUELLE',
  beneficiaires:[{nom:faker.name.findName()},{nom:faker.name.findName()},{nom:faker.name.findName()}]
},{
  nom:'NSIA LOGEMENT',
  type:'GROUPE',
  beneficiaires:[{nom:faker.name.findName()},{nom:faker.name.findName()}]
},{
  nom:'NSIA PREVOYANCE',
  type:'GROUPE',
  beneficiaires:[{nom:faker.name.findName()},{nom:faker.name.findName()}]
}];

  for(let i=0;i<=nombre;i++){
    let pol=defaultPolices[Math.floor(Math.random()*defaultPolices.length)];
    police[i]= {
    Nom_police:pol.nom,
    No_police:getNumeroPolice(),
    type:pol.type,
    createdAt:moment()._d,
    dateEffet:moment().add(getmonthtoAdd(),'months')._d,
    dateFinEffet:moment().add(getmonthtoAdd(),'years')._d,
    description:faker.lorem.paragraph(),
    resultat:{beneficiaires:pol.beneficiaires}
    };
  }
  return police;
}
const polices=getPolices(10);
//juskqu'a ce kon ait les vrai donnees on va vider la collection polices
Polices.remove({});
polices.map((popo)=>Polices.insert(popo));

//=======================================
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
