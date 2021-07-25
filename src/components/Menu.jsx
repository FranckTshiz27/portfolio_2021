import {NavLink} from 'react-router-dom';
import '../style/menu.scss';
import {FiAlignJustify,FiX} from 'react-icons/fi';
import { useState } from 'react';


const Menu = ()=>{

    const [isMenuVisible,setIsMenuVisible] = useState(false)

    const getSymbol = ()=>{

        return isMenuVisible?<FiX className="menu__btn" onClick={handleClickMenu}/>:<FiAlignJustify className="menu__btn" onClick={handleClickMenu}/>
    }

    const handleClickMenu= (e)=>{
        setIsMenuVisible(!isMenuVisible);
    }
    
    const showMenu = ()=>{

       return !isMenuVisible? <div></div>: <ul className="navigation">
        <li className="navigation__item">Accueil</li>
        <li className="navigation__item">A propos</li>
        <li className="navigation__item">Compétences</li>
        <li className="navigation__item">Réalisations</li>
     </ul>
    }
    return(

    <div className="menu">
       <div className="menu__main">{getSymbol()}</div>  
      
       {showMenu()}
    </div>
    )

   

}

export default Menu;