import '../style/banner.styled.scss';
import img from '../images/imgimg-removebg-preview.png';
import {DiAptana} from 'react-icons/di';
import {FiChevronsDown} from 'react-icons/fi'
import TypeIt from 'typeit-react'
const Banner = ()=>{

    return(
        <div className="banner">
           
            <div className="banner__content">
            <div className="banner__symbol">
                    <DiAptana style={{fontSize:"30px",color:"#ffe73d", animation:"rotating 3s linear infinite"}}/>
             </div>
                <div className="banner__image">
                    <img src={img} alt="" />
                </div>
                <div className="banner__title">
                <h2 className="banner__title__parts__first">
                DEVELOPPEUR WEB
                </h2>
                <h2 className="banner__title__parts__second">
                FULL-STACK
                </h2>
                <h1 className="banner__title__name">
                <TypeIt>François&nbsp;Tshizubu</TypeIt>  
                </h1>
                
            </div>
            </div> 

            <div className="banner__direction">

                <button>VOIR PLUS</button>
                <div className="banner__direction__content">
                <FiChevronsDown style={{color:"#ffe73d",fontSize:"50px", 
                                        animation:" MoveUpDown 3s linear infinite", 
                                        position: "absolute",
                                        left: 0,
                                        bottom: 0,
                                        cursor:'pointer'}}/>
                </div>
            </div>
        </div>
    )

}

export default Banner;

//   <div>
//             <FiChevronsDown style={{color:"red", margin:"50"}}/>
//             </div> 