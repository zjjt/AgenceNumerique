import {setLocale} from 'react-redux-i18n';
import {moment} from 'meteor/momentjs:moment';
import frenchLocale from '../../api/momentjsConfig';
import Langues from '../../api/languages';

export const CHANGE_LANG='CHANGE_LANG';
export function changeLangue(lang){
    console.log(lang+' clicked');
    return(dispatch,getState)=>{
        dispatch(setLocale(lang));
        if(lang==='en')
            moment.locale(lang);
        else if(lang==='fr')
            moment.locale(lang,frenchLocale);
       // dispatch({type:CHANGE_LANG,lang});
    };
    

}

export const DIMINUE_VOL='DIMINUE_VOL';
export function diminuerVolume(){
    return{
        type:DIMINUE_VOL
        //diminue le volume by 1
    }
}
export const AUGMENTE_VOL='AUGMENTE_VOL';
export function augmenteVolume(){
    return{
        type:AUGMENTE_VOL
        //diminue le volume by 1
    }
}

export const CHANGE_PAYS='CHANGE_PAYS';//doit lancer une saga qui update les selects de la liste des agences
export function changePays(pays){
    return{
        type:CHANGE_PAYS,
        pays
    };
}

export const RELOAD_AGENCES='RELOAD_AGENCES';
export function loadAgence(agences){//agences ici est un tableau
    return{
        type:RELOAD_AGENCES,
        agences
    };
}