import React from 'react'
import Mcard from './mcard';
import MDataproject from './MDataproject';
import "./Mproject.css"


function Mproject() {
  return (
    <div className="work-container" id='Mproject'>
   <h1 className="project-heading">Projects List</h1>
   <div className="project-container">
    {MDataproject.map((val,ind) =>{
      return(
        <Mcard 
        key={ind}
        imgsrc={val.imgsrc}
        title={val.title}
        text={val.text}
        view={val.view}
        loading="lazy"
        />
        
      );
    })}
   </div>
   </div>
  )
}

export default Mproject