const Langues={
    en:{
        application:{
            Bienvenue:{
                title:'NSIA Life Insurance',
                welcome:'wishes you a warm welcome',
                clignotext:'Press the button to begin',
                naviBtnR:'Start'
            },
            Login:{
                title:'Sign in !',
                naviBtnL:' Back',
                naviBtnR:'Log in',
                nomPlaceholder:'Enter your ID',
                passPlaceholder:'Enter your birth date',
                nomErrorVide:'Please enter your ID',
                passErrorVide:'Please enter your birth date',
                passErrorLength:'The your birth date must be 10 characters long',
                nomServError:'This user does not exist in our database',
                passServError:'birth date incorrect'
            },
            AdminLogin:{
                title:'Welcome admin',
                naviBtnL:' Quit',
                naviBtnR:'Log in',
                nomErrorVide:'Do not forget to fill in your full name',
                passErrorVide:'Do not forget to fill in your password',
                nomPlaceholder:'Enter your name',
                passPlaceholder:'Enter your password',
                nomServError:'This administrator does not exist',
                passServError:'Wrong password'
            },
            MenuAdmin:{
                title:'Dashboard',
                menuBtnL1:'Settings',
                menuBtnR1:'Activity log',
                naviBtnR:'Next ',
                naviBtnL:' Quit',
                canGoNext:'Please choose an option amongst those listed below'
            },
               MenuUser:{
                title:'How can we be of service ?',
                menuBtnL1:'Contributions state',
                menuBtnR1:'Premium settlement',
                menuBtnL2:'Ask for services',
                menuBtnR2:'Declare a sinister',
                menuBtnL3:'Special terms',
                menuBtnR3:'Duplicate the bulletin',
                naviBtnL:' Quit',
                naviBtnR:'Next ',
                canGoNext:'Please choose an option amongst those listed below. '
            },
            ChoixPolice:{
                title:'Welcome ',
                titleLeft:'Select one of your contracts',
                titleRight:'Contract \'s details',
                naviBtnL:' Quit',
                naviBtnR:'Next '
            }

        },
        date:{
            //long:'dddd,MMMM Do YYYY'
            long:'LLLL'
        }
    },
    fr:{
        application:{
            Bienvenue:{
                title:'NSIA Vie Assurances',
                welcome:'Vous souhaite la bienvenue',
                clignotext:'Appuyer sur le boutton pour commencer',
                naviBtnR:'Entrée'
            },
            Login:{
                title:'Connectez vous !',
                naviBtnL:' Retour',
                naviBtnR:'Se connecter ',
                nomPlaceholder:'Entrez votre Identifiant',
                passPlaceholder:'Entrez votre date de naissance',
                nomErrorVide:'N\'oubliez pas d\'entrer votre Identifiant',
                passErrorVide:'N\'oubliez pas d\'entrer votre date de naissance',
                passErrorLength:'La date de naissance doit être de 10 caractères',
                nomServError:'Ce souscripteur n\'existe pas',
                passServError:'Date de naissance incorrecte'
            },
            AdminLogin:{
                title:'Bienvenue administrateur',
                naviBtnL:' Quitter',
                naviBtnR:'Valider ',
                nomErrorVide:'N\'oubliez pas d\'entrer votre nom',
                passErrorVide:'N\'oubliez pas d\'entrer votre mot de passe',
                nomPlaceholder:'Entrez votre nom',
                passPlaceholder:'Entrez votre mot de passe',
                nomServError:'Cet administrateur n\'existe pas',
                passServError:'Mauvais mot de passe'

            },
            MenuAdmin:{
                title:'Tableau de bord',
                menuBtnL1:'Réglages',
                menuBtnR1:'Rapport d\'activité',
                naviBtnR:'Suivant ',
                naviBtnL:' Quitter',
                canGoNext:'Veuillez choisir une option parmis celles citées ci-dessous.'
                
            },
            MenuUser:{
                title:'Comment peut on vous aider ?',
                menuBtnL1:'Etat des cotisations',
                menuBtnR1:'Règlement de prime',
                menuBtnL2:'Demande de prestations',
                menuBtnR2:'Déclaration de sinistre',
                menuBtnL3:'Conditions particulières',
                menuBtnR3:'Duplicata de bulletin',
                naviBtnL:' Quitter',
                naviBtnR:'Suivant ',
                canGoNext:'Veuillez choisir une option parmis celles citées ci-dessous.'
            },
              ChoixPolice:{
                title:'Bonjour ',
                titleLeft:'Sélectionnez l\'une de vos polices' ,
                titleRight:'Descriptif du contrat',
                naviBtnL:' Retour',
                naviBtnR:'Suivant '
            }
        },
        date:{
            //long:'dddd,MMMM Do YYYY'
            long:'LLLL'
        }
    }
};

export default Langues;