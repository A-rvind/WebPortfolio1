import React from 'react'

import "./index.css"

import Home from './Home/Home'

import Footer from './Footer/Footer'
import About from './About/About'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Nav from './Navbar/Nav'
import Projects from './Projects/Projects'



 



function App() {

  return (
    <div>
      <Nav/>
      
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>     
      <Footer/>

    </div>
  )
}

export default App
