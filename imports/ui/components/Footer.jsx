import React,{PropTypes} from 'react';

//le footer est utilisee pour contenir les bouttons suivants et precedents pour la navigation entre les
//pages.il leur faut des functions dispatch pour leurs actions,le texte pour le boutton suivant,une condition qui decide
//si ils doivent etres afficher ou non

export default function Footer({onClickRetour,onClickNext,textNext,isVisiblePrev,isVisibleNext,textInfo}){
	let prevclass=isVisiblePrev?'prevbtn':'prevbtn invisibleBtn';
	let nextclass=isVisibleNext?'nextbtn':'nextbtn invisibleBtn';
	return(
		<footer>
			<div className="navigationArea">
				<button className={prevclass} onClick={onClickRetour}>Retour</button>
				<button className={nextclass} onClick={onClickNext}>{textNext}</button>
			</div>
			<div className="infos">
				<p>{textInfo}</p>
			</div>
		</footer>
	);
}
Footer.propTypes={
	onClickRetour:PropTypes.func,
	onClickNext:PropTypes.func,
	textNext:PropTypes.string.isRequired,
	isVisiblePrev:PropTypes.bool.isRequired,
	isVisibleNext:PropTypes.bool.isRequired,
	textInfo:PropTypes.string.isRequired
};