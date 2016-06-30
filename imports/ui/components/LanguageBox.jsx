import React from 'react';

export default function LanguageBox({handleclik,image,language}){
    let className='langmage';
    let alt;
    if(language==="fr"){
        className+=" fr";
        alt="French language";
    }else if(language==='en'){
        className+=" en";
        alt="English language";
    }
    
    return(
       <div className="simpleLDiv">
        <img src={image} alt={alt} onClick={handleclik} className={className}/>
	   </div>			
    );
}