import {Mongo} from 'meteor/mongo';
import {attachSchema} from 'meteor/aldeed:collection2';
import {SouscripSchema,PolicesSchema} from './schemas.js';
import {DumbCollection} from 'meteor/richsilv:dumb-collections';


export const Rapports=new DumbCollection('rapports');//Rapport d'activite par jour
export const Settings=new DumbCollection('settings');//les reglages personnels de l'applications, modifiable par administrateurs
export const Agences=new DumbCollection('listeAgences');
export const Admins=new Mongo.Collection('administrateurs');//administrateurs de la plateforme
export const Domain=new Mongo.Collection('domain');//collection modifiable par les super admin sur pc ou hot code push
//contient pays et la liste des agences par pays

//Souscripteurs.attachSchema(SouscripSchema);
//Polices.attachSchema(PolicesSchema);

