import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainLayout from '../../ui/Layouts/MainLayout.jsx';
import React from 'react';
import Bienvenue from '../../ui/pages/Bienvenue.jsx';
import LoginPage from '../../ui/pages/LoginPage.jsx';
import AlternateLogin from '../../ui/pages/AlternateLogin.jsx';


injectTapEventPlugin();
//route de base pour afficher un message de bienvenue
FlowRouter.route('/',{
	name:'acceuil',
	action(){
		mount(MainLayout,
			{content:()=><Bienvenue navigation="LOGIN"/>})
	}
});

FlowRouter.route('/login',{
	name:'login',
	action(){
	mount(MainLayout,{
			content:()=><LoginPage/>
		})
}});

FlowRouter.route('/login_alt',{
	name:'alt-login',
	action(){
		mount(MainLayout,{
			content:()=><AlternateLogin/>
		})
	}});