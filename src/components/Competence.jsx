import '../style/competence.scss';
import img from '../images/imgimg-removebg-preview.png';
const Competence = ()=>{
return(
    
    <div  className="competence">
     <h2>Compétences</h2>

     <ul className="competence__container">

         <div className="competence__container__item">
            <li>HTML</li>
            <div className="niveau">
            <div className="niveauHtml">
               
               </div>
            </div>
            
         </div>
         <div className="competence__container__item">
            <li>CSS</li>
            <div className="niveau">
            <div className="niveauCss">
               
               </div>
            </div>
         </div>

         <div className="competence__container__item">
            <li>JAVASCRIPT</li>
            <div className="niveau">
            <div className="niveauJs">
               
               </div>
            </div>
         </div>
         <div className="competence__container__item">
            <li>JAVA</li>
            <div className="niveau">
            <div className="niveauJava">
               
               </div>
            </div>
         </div>
         <div className="competence__container__item">
            <li>CSHARP</li>
            <div className="niveau">
            <div className="niveauCsharp">
               
               </div>
            </div>
         </div>
         <div className="competence__container__item">
            <li>BASE DE DONNEES</li>
            <div className="niveau">
            <div className="niveauDb">
               
               </div>
            </div>
         </div>

    
        
     </ul>
     <div className="competence__separator">

     </div>
    </div>
)
}

export default Competence;