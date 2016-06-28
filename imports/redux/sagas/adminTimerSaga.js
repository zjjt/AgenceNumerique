import {actionChannel,call,take,put,race} from 'redux-saga/effects';
import * as actions from '../actions/admin-actions'; 

/*Redus-saga est une alternative a redux thunk afin de ne pas surcharger les actions creators
et gerer les lourdes actions asynchrones.Donc je l'utiliserai pour les actions processus asynchrones
qui doivent run en background.les sagas sont comparables au coroutines de unity

1--on cree une fonction asynchrone (PROMISE) qui gere le timer avec un setTimeout
2--on definit ensuite notre saga runTimer et on cree un actionChannel(cannal d'action)
3-dans le while tant ke l'action ki definit ke le timer est lancer est vrai,on rend une race condition
qui sera fait le premier soit le timer est arreter soit c un tick ki est dispatched
*/

const wait=ms=>(new Promise(resolve=>{
    setTimeout(()=>resolve(),ms);    
    })
);
export function* runTimer(){
    const channel=yield actionChannel(actions.TIMER_START);
   let currentcount=0;
    while(yield take(channel)){
        while(true){
            const winner=yield race({
                stopped: take('TIMER_STOP'),
                tick:call(wait,1000)
            });
            if(currentcount<20){
                yield put(actions.tick());
                 currentcount+=1;
            }else{
                yield put(actions.stopTimer());
                    currentcount=0;
                break;
            }
        }
    }
}