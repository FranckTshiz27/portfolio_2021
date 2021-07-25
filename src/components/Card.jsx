import '../style/card.scss';
import {DiGitMerge} from 'react-icons/di'
import {FiLink} from 'react-icons/fi';

const Card = ({title,description,img,imgClasseName})=>{

    return (



  <li class="cards__item">
    <div class="card">
      <div className={`card__image ${imgClasseName}`}></div>
      <div class="card__content">
        <div class="card__title">{title}</div>
        <p class="card__text">{description}</p>
        <button class="btn btn--block card__btn">
            <DiGitMerge style={{color:"#ffe73d" , fontSize:"25px", fontWeight:700, cursor:"pointer"}}/>
            <FiLink style={{color:"#ffe73d" , fontSize:"25px", fontWeight:700, cursor:"pointer"}}/>
        </button>
      </div>
    </div>
  </li>

    )
}

export default Card;