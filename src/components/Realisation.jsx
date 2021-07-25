import Card from "./Card";
import '../style/realisation.scss';

const Realisation = ()=>{

    return(
        <div className="realisation">
            <h1 className="realisation__title">Mes Realisations</h1>
            <div className="realisation__content">
             <Card title={"PORTFOLIO"} imgClasseName={"card__image--fence"}
                description={"Un site vitrine présentant notre identité, parcours et compétences."}
             />
             <Card title={"TMOVIES"} imgClasseName={"card__image--river"} description={"Site vitrine de présentation et recherche des films utilisant l'Api The movies"}/>
             <Card title={"PORTFOLIO CMS"} imgClasseName={"card__image--flowers"} description={"Il s'agit d'une application permettant d'administrer le site porfolio"}/>
             <Card title={"SKULMAN"} imgClasseName={"card__image--record"} description ={"Une application de gestion prenant en charge plusieurs processus des écoles, notamment l'inscription, la paie et le controle"}/>
            </div>
        </div>
    )
}

export default Realisation;