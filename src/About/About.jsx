import React from 'react'
import './About.css'
import img5 from '../assets/img5.jpg'
import {Link} from "react-scroll"


const About = () => {
  return (
    <section className="asection" id='About'>
      <div className="asection__container">
        <div className="acontent">
          <p className="asubtitle">HELLO</p>
          <h1 className="atitle">
            I'm <span>Arvind<br />a</span> Developer
          </h1>
          <p className="adescription">
            Welcome to my web portfolio! I'm Arvind,
            I have completed my bachelor degree in July 2023. I dedicated effort to enhancing skills,
            creativity and knowledge.
            I have strong knowledge in Python, Javascript languages. Further more I have developed many projects based on Reactjs.
            I am Learning Next.Js and Typscript. -- Updated on Feb 2024
          </p>
          <div className="aaction__btns">
            <Link to="Footer" spy={true} offset={50} duration={500}><button className="ahire__me">Hire Me</button></Link>
            <a href='https://www.behance.net/gallery/184152197/Coding-Portfolio'><button className="aportfolio">Portfolio</button></a>
          </div>
        </div>
        <div className="aimage">
          <div className='ah3'>About ME</div>
          <img src={img5} alt="aboutimg" />
        
        
        </div>
      </div>
    </section>
    
  )
}

export default About