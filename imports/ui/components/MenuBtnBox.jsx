import React from 'react';
import {Translate,I18n} from 'react-redux-i18n';
import {clickOnMenu} from '../../redux/actions/buttonMenu-actions';

export default MenuBtnBox=({nbrBtn,i18n,usermenu,dispatch,page})=>{
    let classe=usermenu?'menubtn ':'adminbtn ';
    let classeL="button menubtnL adminBtnL animated bounceInLeft";
    let classeR="button menubtnR adminBtnR animated bounceInRight";
    let cL=classe+classeL;
    let cR=classe+classeR;
    let buttons=[];
            for(let i=0;i<nbrBtn;i++){  
                 buttons.push(<div className="menuBoxBtnWrapper" key={i}><div className="menulights btnlightL displayNone"></div><button className={cL} onClick={()=>dispatch(clickOnMenu(`menuBtnL${i+1}`,page))}>{I18n.t(`application.${i18n}.menuBtnL${i+1}`)}</button>
            <div className="menulights btnlightR invisibleBtn displayNone"></div><button className={cR} onClick={()=>dispatch(clickOnMenu(`menuBtnR${i+1}`,page))}>{I18n.t(`application.${i18n}.menuBtnR${i+1}`)}</button></div>);
    };
    
    return(
        <div className="menuBox">
        {buttons}
        </div>
    );
}