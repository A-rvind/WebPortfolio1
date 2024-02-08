import React, {useState} from 'react';
import Typewriter from "typewriter-effect"
import "./Home.css"

const Home =()=> {

  const[state] = useState ({
    title : "Hi,",
    titleTwo : "Welcome",
    titleThree : "I'm Arvind Sharma"

  });

  return (
    
      <div className='containerhome' id='Home' >
        <div className='titlename'>
          <div className='title'>{state.title}</div>
          <div className='titleTwo'>{state.titleTwo}</div>
          <div className='titleThree'>{state.titleThree}</div> 
          </div>
          <div className='type1'>
          <Typewriter 
          options={
            {
              autoStart: true,
              loop : true,
              delay: 40,
              strings: [
                "Frontend Developer.",
                "Software Developer.",
                "Web Developer."

              ],
            }}/></div>  
            <div>
            <a href="mailto:arvindgsharma985@gmail.com"><button className='button1' >Hire Me</button></a>
            <a href="https://www.dropbox.com/scl/fi/3oa2u8bn7pmfrk11ucwlc/
            Arvind-Sharma-Resume.pdf?rlkey=o271m3oppghscp79kgbspfx5c&dl=0">
            <button className='button2'>Resume</button></a></div>
        
      </div>
      
      
  )
}

export default Home;