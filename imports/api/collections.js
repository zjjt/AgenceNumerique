import {Mongo} from 'meteor/mongo';
import {attachSchema} from 'meteor/aldeed:collection2';
import {SouscripSchema,PolicesSchema} from './schemas.js';

//les collections des clients NSIA
const Souscripteurs=new Mongo.Collection('souscripteurs');
const Polices=new Mongo.Collection('polices');
const Rapports=new Mongo.Collection('rapports');//Rapport d'activite par jour

const Settings=new Mongo.Collection('settings');//les reglages personnels de l'applications, modifiable par administrateurs
const Admins=new Mongo.Collection('administrateurs');//administrateurs de la plateforme
const Domain=new Mongo.Collection('domain');//collection modifiable par les super admin sur pc ou hot code push
//contient pays et la liste des agences par pays

Souscripteurs.attachSchema(SouscripSchema);
Polices.attachSchema(PolicesSchema);

export default Souscripteurs;
export default Polices;
export default Rapports;
export default Admins;
