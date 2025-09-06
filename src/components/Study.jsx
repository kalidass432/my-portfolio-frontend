import React from "react";
import "./Study.css";
import '../Assets/banner-bg.png';
import img from '../Assets/school.png';
import img1 from '../Assets/college.png';
import img2 from '../Assets/course.png';



const Educate = () => {
    return(
        <div className="education">
            <div className="education-nav" id="Education-section">
              <h2><span>EDU</span>CATION</h2>
              <p>I have a strong academic background in <span>Computer Application</span> , having completed my <span>BCA</span> from <span>Bharathidhasan University</span>. I'm passionate about using my full-stack development knowledge to solve real-world problems.</p>
            </div>
            <div className="education-content">
                <div className="education-header">
                    <img className="pic" src={img} alt=""></img>
                    
                        <h3>HSC</h3>
                        <p> Vallal Pari Higer Seconadary School,Piranmalai</p>
                        <p>Passing Year : 2021-2022</p>
                        <p>Percentage: 58.83%</p>                    
                </div>
                    <div className="education-header">
                     <img className="pic" src={img1} alt=""></img>
                    
                      <h3>Bachelor of Computer Applicaion</h3>
                      <p>JJ College of Arts & Science, Pudukkottai</p>
                      <p>Passing Year : 2022-2025</p>
                      <p>Percentage: 72.50%</p>
                    
                </div>
                <div className="education-header">
                     <img className="pic" src={img2} alt=""></img>
                   
                      <h3>Full Stack Development</h3>
                      <p>Tech Mind InfoTech, Pudukkottai</p><br></br>
                      <p>  </p><br></br>
                      <p>  </p>                 
                </div>
                
                
            </div>
        </div>    
    )
}


export default Educate;