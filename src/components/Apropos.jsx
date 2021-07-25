import '../style/apropos.scss';
import img from '../images/img1.jpg';
import {DiAptana} from 'react-icons/di';
const Apropos = ()=>{

    return(
        <div className="apropos">
             <div className="apropos__content">
                <div className="apropos__image">
                <img src={img} alt="" />
                </div>
                <h3 className="apropos__title">A Propos de moi : </h3>
                <div className="apropos__info">
                Je suis détenteur d'un diplôme de licence en 
                génie informatique et ingénieur logiciel. 
                J'ai également fait plusieurs formations
                 qui m'ont permis de maitriser plusieurs 
                 langages de programmation dont Java et C#. 
                 Je suis actuellement à la Kinshasa Digital 
                 Academy pour renforcer mes compétences dans le domaine
                 du développement du web et mobile.
                <button>TELECHARGER MON CV</button>              
                </div>  
            </div>
            <div className="apropos__symbol">
           <DiAptana style={{fontSize:"40px",color:"#FFF", animation:"rotating 3s linear infinite"}}/>
            </div>
           
        </div>
    )
}

export default Apropos;