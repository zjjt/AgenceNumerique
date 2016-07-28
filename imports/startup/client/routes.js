import {FlowRouter} from 'meteor/kadira:flow-router';
import {Meteor} from 'meteor/meteor';
import {mount} from 'react-mounter';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainLayout from '../../ui/Layouts/MainLayout.jsx';
import React from 'react';
import Bienvenue from '../../ui/pages/Bienvenue.jsx';
import LoginPage from '../../ui/pages/LoginPage.jsx';
import AdminLogin from '../../ui/pages/AdminLogin.jsx';
import MenuAdmin from '../../ui/pages/MenuAdmin.jsx';
import MenuUser from '../../ui/pages/MenuUser.jsx';
import ListePolice from '../../ui/pages/ListePolice.jsx';


injectTapEventPlugin();
//route de base pour afficher un message de bienvenue
FlowRouter.route('/',{
	name:'home',
	action(){
		mount(MainLayout,
			{content:()=><Bienvenue navigation="LOGIN"/>})
	}
});
//globalRoutes
const globalRoutes=FlowRouter.group({
	prefix:"/global",
	name:'global'
});


globalRoutes.route('/login',{
	name:'login',
	action(){
	mount(MainLayout,{
			content:()=><LoginPage/>
		})
}});
//userRoutes***************************************
const userRoutes=FlowRouter.group({
	prefix:'/user',
	name:'user',
	triggersEnter:[(context,redirect)=>{
		if(!Meteor.userId()){
			redirect('/');
		}
	}]
});
userRoutes.route('/usermenu',{
	name:'usermenu',
	action(){
	mount(MainLayout,{
			content:()=><MenuUser/>
		})
}});
userRoutes.route('/choixpolice',{
	name:'policechoice',
	action(){
	mount(MainLayout,{
			content:()=><ListePolice/>
		})
}});
//adminRoutes***************************************
const adminRoutes=FlowRouter.group({
	prefix:'/admin',
	name:'admin'
});
adminRoutes.route('/adminlogin',{
	name:'adminlogin',
	action(){
		mount(MainLayout,{
			content:()=><AdminLogin/>
		})
	}});

adminRoutes.route('/adminmenu',{
	name:'adminmenu',
	action(){
		mount(MainLayout,{
			content:()=><MenuAdmin/>
		})
	}});