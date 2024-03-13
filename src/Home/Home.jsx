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
                "Data Science."

              ],
            }}/></div>  
            <div>
            <a href="mailto:arvindgsharma985@gmail.com"><button className='button1' >Hire Me</button></a>
            <a href="https://www.dropbox.com/scl/fi/xwd5avz0ehh2b24x2rvdy/Arvind-Sharma-Resume.pdf?rlkey=j68eymi6p2qkpu7x3jfe4oy1d&dl=0">
            <button className='button2'>Resume</button></a></div>
        
      </div>
      
      
  )
}

export default Home;