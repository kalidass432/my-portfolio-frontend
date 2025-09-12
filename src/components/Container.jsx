import React,{useEffect} from "react";
import './Container.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import img from '../Assets/header-img.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Container = () =>{
    useEffect(() => {
        AOS.init({duration: 1000}); // AOS initialization with a duration of 1000ms
    },[]);
    return(
        <div className="container" id="Hero-section">
            <div className="content" data-aos="fade-right">
                <h2 >Hi! I'm Kalidass Web Developer</h2>
                <p>This is My portfolio</p>
                <a className="con" href="/">Let's Connect</a>
                <div className="social-media">
                <div className="social">
                     <a href="linkedin.com/in/kali-dass-fullstack-developer" target="-blank" rel="noreferrer">
                     <FontAwesomeIcon icon={faLinkedin} />
                     </a>
                </div>
                 <div className="social">
                     <a href="../portfolio" target="-blank" rel="noreferrer">
                     <FontAwesomeIcon icon={faGithub} />
                     </a>
                </div>
                 <div className="social">
                     <a href="../portfolio" target="-blank" rel="noreferrer">
                     <FontAwesomeIcon icon={faWhatsapp} />
                     </a>
                </div>
                </div>

            </div>
            <div className="image">
               <img className="img" src={img} alt=""></img>
            </div>



        </div>
    )

}
export default Container;