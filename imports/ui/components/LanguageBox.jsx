import React from 'react';

export default function LanguageBox({handleclik,image,language,classes}){
    let className='langmage animated';
    let alt;
    className+=classes;
    if(language==="fr"){
        className+=" fr";
        alt="French language";
    }else if(language==='en'){
        className+=" en";
        alt="English language";
    }
    
    return(
       <div className="simpleLDiv animated fadeInDown ">
        <img src={image} alt={alt} onClick={handleclik} className={className}/>
        <div className="simpleBorders displayNone"></div>
	   </div>			
    );
}