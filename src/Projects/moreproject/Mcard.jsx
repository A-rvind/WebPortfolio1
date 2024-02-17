import React from 'react'
import "./Mproject.css"

function Mcard(props) {
  return (
    
    <div className="project-card">
       <img src={props.imgsrc} alt="image" />
   <h2 className="project-title">{props.title}</h2>
   <div className="pro-details">
   <p>{props.text}</p>
   <div className='pro-btns'>
     <a><button to={props.view} className="btn">Demo</button></a>
     
   </div>
   </div>
   </div>
   
   
   
   
   

   
   
  )
}

export default Mcard