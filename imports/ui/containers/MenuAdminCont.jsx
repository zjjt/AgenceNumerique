import React,{Component} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {connect} from 'react-redux';
import {Translate,Localize,I18n} from 'react-redux-i18n';
import {deconnection,choixVisite} from '../../redux/actions/ui-nav-actions';
import MenuBtnBox from '../components/MenuBtnBox.jsx';

class MenuAdminCont extends Component {
	constructor(props){
		super(props);
		this.state={canGoNext:false};
	}
	componentDidMount() {
		$('.button').click((e)=>{
			let $this=$(e.target);
			//navigation btn
			if($this.hasClass('nextbtn')){
				$this.removeClass().addClass('button nextbtn navBtn animated pulse');
			}
			else if($this.hasClass('prevbtn')){
				$this.removeClass().addClass('button prevbtn navBtn animated pulse');
			}
			else if($this.hasClass('menubtnL')||$this.hasClass('menubtnR')){
				$('.menubtnL').each(function(){
						$(this).removeClass('menuClicked menuClickedL').addClass('menubtn');	
					});
					$('.menubtnR').each(function(){
						$(this).removeClass('menuClicked menuClickedR').addClass('menubtn');		
					});
				$('.menulights').each(function(){			
					if($(this).is(':visible')){
						$(this).removeClass('infinite').addClass(' animated zoomOut').delay(1000).addClass('displayNone');
						
					}
					
				});
				if($this.hasClass('menubtnL'))
				{	
					$this.removeClass('menubtn').addClass('menuClicked menuClickedL');
					$this.prev().addClass('animated zoomIn').delay(1000).removeClass().addClass('menulights btnlightL animated infinite pulse');
				}
				else if($this.hasClass('menubtnR')){
					$this.removeClass('menubtn').addClass('menuClicked menuClickedR');
					$this.prev().addClass('animated zoomIn').delay(1000).removeClass().addClass('menulights btnlightR animated infinite pulse');
				}
				
			}
		
		});
	}
	render() {
		const {navigation,dispatch,currentLang,chosenMenu}=this.props;
		return (

			<div className="masterContainer">
				<Header background="withback" logoInvisible={false} currentLang={currentLang}/>
				<section className="mainContent rm-justify">
					<span className="homespan animated zoomIn"><Translate value="application.MenuAdmin.title"/></span>
					<MenuBtnBox nbrBtn={1} i18n="MenuAdmin" usermenu={true} dispatch={dispatch} page="MenuAdmin" />
				</section>
				<Footer
					onClickRetour={()=>{}}
					onClickNext={()=>chosenMenu!=='none'?dispatch(choixVisite('admincontent')):Bert.alert(I18n.t('application.MenuAdmin.canGoNext'), 'warning', 'fixed-top', 'fa-frown-o')}
					onClickDeco={()=>dispatch()}
					isVisiblePrev={true}
					isVisibleNext={true}
					isVisibleDeco={false}
					textInfo={'www.groupesnsia.com'}
					textNext={I18n.t('application.MenuAdmin.naviBtnR')}
					textPrev={''}
				/>
			</div>

		);

	}
}
function mapStateToProps(state){
	return{
		currentLang: state.i18n.locale,
		chosenMenu:state.buttonsMenu.chosenMenu
	};
}
export default connect(mapStateToProps)(MenuAdminCont);