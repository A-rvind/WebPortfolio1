 import React from 'react'
 import "./Project.css";
 
 import img2 from "../assets/img2.jpg"
 import img3 from "../assets/img3.jpg"
 import img4 from "../assets/img4.jpg"

 const Projects = () => {
   return (
    <div className="work-container" id='Projects'>
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
    <div className="project-card">
        <img src={img2} alt="image" />
    <h2 className="project-title">Aamzon Clone</h2>
    <div className="pro-details">
    <p>It is clone of Home page also subpages of Amazon. It contain Search items, Checkout form, Add cart Pages. The tech used : HTML, CSS and JS.</p>
    <div className='pro-btns'>
       <a href='https://github.com/A-rvind/amazon-clone'><button className="btn">Source</button></a>
       <a href='https://github.com/A-rvind/amazon-clone'><button className="btn">view</button></a>
    </div>
    
    </div>
    </div>

    <div className="project-card">
        <img src={img3} alt="image" />
    <h2 className="project-title">Task Manager</h2>
    <div className="pro-details">
    <p>The tech used: ReactJS, CSS Tailwind, React-hook-form. Task List which is editable, Apex Chart, Routing</p>
    <div className='pro-btns'>
    <a href='https://github.com/A-rvind/Tasklist'><button className="btn">Source</button></a>
    <a href='https://github.com/A-rvind/amazon-clone'><button className="btn">view</button></a>
       
    </div>
    
    </div>
    </div>
    <div className="project-card">
        <img src={img4} alt="image" />
    <h2 className="project-title">Weather App</h2>
    <div className="pro-details">
    <p>The tech used: Node JS, CSS(Tailwind), API, Visualization, Location search, °C to °F vice versa</p>
    <div className='pro-btns'>
    <a href='https://github.com/A-rvind/WeatherAPP'><button className="btn">Source</button></a>
    <a href='https://github.com/A-rvind/amazon-clone'><button className="btn">view</button></a>
       
    </div>
    
    </div>
    </div>
    <div className="probtn">
      <a href="https://img.freepik.com/premium-vector/vector-website-construction-sign-symbol-isolated-white-background_572288-2711.jpg?w=740"><button>More Projects</button></a>
      </div>
    </div>
    
    </div>
   )
 }
 
 export default Projects;