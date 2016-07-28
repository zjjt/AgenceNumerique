App.info({
    id:'com.nsia.agenceNumerique',
    name:'Agence Numérique',
    description:'Logiciel de gestion de clientèle et de file d\'attente adapté spécialement à la NSIA VIE ASSURANCE',
    author:'ZJJT a.k.a Zehi Jean Jacques Thibaut',
    email:'zehijean1988@gmail.com',
});

//preferences
App.setPreference('Orientation','landscape','android');
App.setPreference('Fullscreen','true');
App.setPreference('WebAppStartupTimeout',600000);//block le popup sur android
App.setPreference('LoadUrlTimeoutValue',600000);//block le popup sur android
App.setPreference('HideKeyboardFormAccessoryBar','false');//enable disable keyboard