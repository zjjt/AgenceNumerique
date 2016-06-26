import React,{PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


//le footer est utilisee pour contenir les bouttons suivants et precedents pour la navigation entre les
//pages.il leur faut des functions dispatch pour leurs actions,le texte pour le boutton suivant,une condition qui decide
//si ils doivent etres afficher ou non

export default function Footer({onClickRetour,onClickNext,textNext,textPrev,isVisiblePrev,isVisibleNext,isVisibleDeco,textInfo,onClickDeco}){
	let prevclass=isVisiblePrev?'prevbtn button navBtn animated fadeInLeft':'prevbtn invisibleBtn';
	let nextclass=isVisibleNext?'nextbtn button navBtn animated fadeInRight':'nextbtn invisibleBtn';
	let decoclass=isVisibleDeco?'decobtn button animated fadeIn':'decobtn invisibleBtn';

	return(
		<footer>
			<div className="navigationArea">

				<button className={prevclass} onClick={onClickRetour}><i className="fa fa-caret-left"></i>{textPrev}</button>
				<button className={decoclass} onClick={onClickDeco}>DECONNECTION</button>
				<button className={nextclass} onClick={onClickNext}>{textNext} <i className="fa fa-caret-right"></i></button>

			</div>
			<div className="infos">
				<p>{textInfo}</p>
			</div>
		</footer>
	);
}
Footer.propTypes={
	onClickRetour:PropTypes.func.isRequired,
	onClickNext:PropTypes.func.isRequired,
	onClickDeco:PropTypes.func.isRequired,
	textNext:PropTypes.string.isRequired,
	textPrev:PropTypes.string.isRequired,
	isVisiblePrev:PropTypes.bool.isRequired,
	isVisibleNext:PropTypes.bool.isRequired,
	isVisibleDeco:PropTypes.bool.isRequired,
	textInfo:PropTypes.string.isRequired
};