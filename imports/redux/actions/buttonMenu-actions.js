//Actions creators pour les menu de l'application.quand on clicke sur un menu on envoi le nom du menu 
//stocker ds le redux state  et quand on valide on voit kelle valeur il y a dans le state et on envoe la page correspondante
export const CHOSEN_MENU='CHOSEN_MENU';

export function clickOnMenu(menu,pageOuMenuExist){
            const pagedumenu=pageOuMenuExist;
            let endmenu='';
                switch(pagedumenu){
                 case 'MenuUser':
                    if(menu==='menuBtnL1'){
                        endmenu='ETAT_COTISATIONS';
                        console.log(endmenu);
                        return{
                            type:CHOSEN_MENU,
                            endmenu
                        };
                    }else if(menu==='menuBtnR1'){
                        endmenu='REGLEMENT_PRIME';
                        console.log(endmenu);
                        return{
                            type:CHOSEN_MENU,
                            endmenu
                        };
                    }else if(menu==='menuBtnL2'){
                        endmenu='DEMANDE_PRESTATION';
                        console.log(endmenu);
                        return{
                            type:CHOSEN_MENU,
                            endmenu
                        };
                    }else if(menu==='menuBtnR2'){
                        endmenu='RETRAIT_REGLEMENT';
                        console.log(endmenu);
                        return{
                            type:CHOSEN_MENU,
                            endmenu
                        };
                    }else if(menu==='menuBtnL3'){
                        endmenu='CONDITIONS_PARTICULIERE';
                        console.log(endmenu);
                        return{
                            type:CHOSEN_MENU,
                            endmenu
                        };
                    }else if(menu==='menuBtnR3'){
                        endmenu='DUPLICATA_BULLETIN';
                        console.log(endmenu);
                         return{
                            type:CHOSEN_MENU,
                            endmenu
                        };
                    }
                   case 'Deco':
                    return{
                        type:CHOSEN_MENU,
                        endmenu:'none'
                    } 
                 default:
                    return{
                        type:CHOSEN_MENU,
                        endmenu
                    };
                }
   

}