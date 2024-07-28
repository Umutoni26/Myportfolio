import React from 'react'
import './About.css'
import mutoni1 from '../../assets/mutoni1.jpeg'

const About = () => {
  return (
    <div id='about'  className='about'>
      <div >
          <div className="about-title">
             <h1>About me</h1>
          </div>
          <div className="about-sections">
            <div className="about-left">
                <img className='profil' src={mutoni1} alt="" />
            </div>
            <div className="about-right">
                <div className='about-para'>
                    <p>
                     I am experienced frontend developer with two years of professional expertise in the field.
                     Throughout my career, I have had privilege of collaborating with companies, contributing
                     to their success and growth.
                    </p> <br />
                    <p>
                        My passion for fronted development is not only reflected in extensive experience but also in the 
                        enthusiansm and dedication I bring to each project.
                    </p>  
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"85%"}} /></div>
                    <div className="about-skill"><p>Bootstrap</p><hr style={{width:"75%"}} /></div>
                    <div className="about-skill"><p>Tailwind</p><hr style={{width:"83%"}} /></div>
                    <div className="about-skill"><p>React js</p><hr style={{width:"55%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"53%"}} /></div>
                    <div className="about-skill"><p>Typescript</p><hr style={{width:"50%"}} /></div>
                    
                </div>
            </div>
            
          </div>

          
      </div>
      <div className="about-achievements">
                <div className='about-achievement'>
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>10+</h1>
                    <p>PROJECT COMPLDTED</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>15+</h1>
                    <p>Happy Clients</p>
                </div>

            </div>
    </div>
  )
}

export default About
