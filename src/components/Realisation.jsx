import Card from "./Card";
import '../style/realisation.scss';

const Realisation = ()=>{

    return(
        <div className="realisation">
            <h1 className="realisation__title">Mes Realisations</h1>
            <div className="realisation__content">
             <Card title={"PORTFOLIO"} imgClasseName={"card__image--fence"}/>
             <Card title={"TMOVIES"} imgClasseName={"card__image--river"}/>
             <Card title={"PORTFOLIO CMS"} imgClasseName={"card__image--flowers"}/>
             <Card title={"SKULMAN"} imgClasseName={"card__image--record"}/>
            </div>
        </div>
    )
}

export default Realisation;