const Langues={
    en:{
        application:{
            Bienvenue:{
                welcome:'wish you a warm welcome',
                clignotext:'Press the button to begin',
                naviBtnR:'Enter'
            },
            Login:{
                title:'Sign in !',
                naviBtnR:'Having troubles ? Click here',
                inputPlaceholder:'Enter your ID',
                errorVide:'Please enter your ID',
            },
            AltLogin:{
                title:'Tell us about yourself',
                nomPlaceholder:'Enter your full name',
                telPlaceholder:'Enter your phone number',
                birthPlaceholder:'Enter your birth date EX: day-month-year',
                nomErrorVide:'Do not forget to provide your full name (refer to your ID card if necessary)',
                telErrorVide:'Do not forget to provide your phone number according to this format (+225 01 09 03 04)',
                birthErrorVide:'Do not forget to provide your birth date',
                birthErrorPattern:'Please enter a valid date with respect to the date format required',
                naviBtnL:'Back',
                naviBtnR:'Log in'
            },
            AdminLogin:{
                title:'Welcome admin',
                naviBtnL:'Quit',
                naviBtnR:'Log in'
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
                welcome:'Vous souhaite la bienvenue',
                clignotext:'Appuyer sur le boutton pour commencer',
                naviBtnR:'Entrée'
            },
            Login:{
                title:'Connectez vous !',
                naviBtnR:'Des soucis ? Cliquez ici ',
                inputPlaceholder:'Entrez votre identifiant',
                errorVide:'Veuillez entrez votre identifiant',
            },
            AltLogin:{
                title:'Identifiez vous !',
                nomPlaceholder:'Entrez votre nom complet',
                telPlaceholder:'Entrez votre numéro de téléphone',
                birthPlaceholder:'Entrez votre date de naissance EX: jour-mois-année',
                nomErrorVide:'N\'oubliez pas de fournir votre nom complet (tel qu\'indiqué sur votre carte d\'identité)',
                telErrorVide:'N\'oubliez pas de fournir votre numéro de téléphone selon le format suivant (+225 01 09 03 04)',
                birthErrorVide:'N\'oubliez pas de fournir votre date de naissance',
                birthErrorPattern:'Veuillez entrer une date de naisance valide selon le format requis',
                naviBtnL:'Retour',
                naviBtnR:'Valider'
            },
            AdminLogin:{
                title:'Bienvenue administrateur',
                naviBtnL:'Quitter',
                naviBtnR:'Valider'
            }

        },
        date:{
            //long:'dddd,MMMM Do YYYY'
            long:'LLLL'
        }
    }
};

export default Langues;