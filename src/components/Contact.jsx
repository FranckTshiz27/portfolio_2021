import '../style/contact.scss';
import {AiFillGithub, AiFillLayout,AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa';



const Contact = ()=>{

    return(
        <div className="contact">
           
                <div className="contact__coordonnee">

                    <div className="contact__coordonnee__content">

                        <p>KINSHASA/RDC</p>
                        <p>Téléphone: +243824360292</p>
                        <p>Email: francktshizbu27@gmail.com</p>
                        <div className="contact__coordonnee__content__links">
                            <AiFillGithub style={{color:"#ffe73d", fontSize:20}}/>
                            <FaFacebookF style={{color:"#ffe73d", fontSize:20}}/>
                            <FaLinkedinIn style={{color:"#ffe73d", fontSize:20}}/>
                            <AiOutlineTwitter style={{color:"#ffe73d", fontSize:20}}/>
                        </div>

                    </div>

                </div>

               

        </div>
    )
}

export default Contact;