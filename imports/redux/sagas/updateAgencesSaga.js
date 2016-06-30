import {takeEvery} from 'redux-saga';
import {call,put} from 'redux-saga/effects';
import * as actions from '../actions/app-settings-actions'; 
import {Agences} from '../../api/collections';

const agencesQuery=(pays)=>{
    return Agences.find({pays:pays}).fetch();
};
//saga qui attend qu'on change le pays pour donner l'ordre de travailler
export function* watchchangeAgences(){
    yield* takeEvery(actions.CHANGE_PAYS,changeAgences);
}
//saga qui fait le travaille
export function* changeAgences(getState){
    const pays=getState().settings.pays;
    try{
        const agenceListe=yield call(agencesQuery(pays));
        yield put(loadAgence(agenceListe));

    }catch(error){
        yield put({type:"AGENCELISTE_LOADING_FAILED",error});
    }
    
}
