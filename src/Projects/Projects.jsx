
import "./Project.css";
import { useNavigate } from "react-router-dom";

import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"

const Projects = () => {

 const navigate= useNavigate()
 
 const goTO = () => {
   navigate ("Mproject")
 }


  return (
   <div className="work-container" id='Projects'>
   <h1 className="project-heading">Projects</h1>
   <div className="project-container">
   <div className="project-card">
       <img src={img2} alt="image" loading="lazy" />
   <h2 className="project-title">Aamzon Clone</h2>
   <div className="pro-details">
   <p>It is clone of Home page also subpages of Amazon. It contain Search items, Checkout form, Add cart Pages. The tech used : HTML, CSS and JS.</p>
   <div className='pro-btns'>
      <a href='https://github.com/A-rvind/'><button className="btn">Source</button></a>
      <a href='https://github.com/A-rvind/'><button className="btn">view</button></a>
   </div>
   
   </div>
   </div>

   <div className="project-card">
       <img src={img3} alt="image"  loading="lazy"/>
   <h2 className="project-title">Task Manager</h2>
   <div className="pro-details">
   <p>The tech used: ReactJS, CSS Tailwind, React-hook-form. Task List which is editable, Apex Chart, Routing</p>
   <div className='pro-btns'>
   <a href='https://github.com/A-rvind/'><button className="btn">Source</button></a>
   <a href='https://github.com/A-rvind/'><button className="btn">view</button></a>
      
   </div>
   
   </div>
   </div>
   <div className="project-card">
       <img src={img4} alt="image" loading="lazy" />
   <h2 className="project-title">Weather App</h2>
   <div className="pro-details">
   <p>The tech used: Node JS, CSS(Tailwind), API, Visualization, Location search, °C to °F vice versa. The Function is show the weather related details                    </p>
   <div className='pro-btns'>
   <a href='https://github.com/A-rvind/'><button className="btn">Source</button></a>
   <a href='https://github.com/A-rvind/'><button className="btn">view</button></a>
      
   </div>
   
   </div>
   </div>
   <div className="probtn">
     
     <button onClick={()=> goTO()}>
       More Projects</button>
     </div>
   </div>
   
   </div>
  )
}

export default Projects;