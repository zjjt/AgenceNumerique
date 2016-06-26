import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const SouscripSchema=new SimpleSchema({
	identifiant:{
		type:Number
	},
	nom:{
		type:String
	},
	telephone:{
		type:Number
	},
	birthday:{
		type:Date
	},
	latestConnection:{
		type:Date
	}
});

export const PolicesSchema=new SimpleSchema({
	policeType:{
		type:String
	},
	policeNo:{
		type:Number
	},
	Souscripteur:{
		type:Number
	}
});



