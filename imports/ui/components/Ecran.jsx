import React,{Component} from 'react';

export default Ecran=({show,loading,deconect})=>{
    let classes='';
    let allclass='ecran';
    if(show)
        classes=' animated fadeIn';
    else
        classes=' animated fadeOut displayNone ';

    allclass+=classes;
    return(
        <div className={allclass} >
					<div className="mainContent-center">
						<img src="/img/ajax-loader.svg" alt="loading" />
					</div>
				</div>
    );
};