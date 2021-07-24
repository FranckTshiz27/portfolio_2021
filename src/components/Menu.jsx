import {NavLink} from 'react-router-dom';
import '../style/menu.scss';


const Menu = ()=>{

    
    return(

    <div className="menu">
        <ul className="navigation">
           <li><NavLink to="/" className="navigation__item" activeClassName="navigation__item__active">Accueil</NavLink></li>
           <li><NavLink to="/a-propos" className="navigation__item" activeClassName="navigation__item__active">A propos</NavLink></li>
           <li><NavLink to="/competences" className="navigation__item" activeClassName="navigation__item__active">Compétences</NavLink></li>
           <li><NavLink to="/projets" className="navigation__item" activeClassName="navigation__item__active">Projets</NavLink></li>
           <li><NavLink to="/contacts" className="navigation__item" activeClassName="navigation__item__active">Contacts</NavLink></li>
        </ul>
    </div>
    )

   

}

export default Menu;