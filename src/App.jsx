import React from 'react'

import "./index.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home/Home'

import Footer from './Footer/Footer'
import About from './About/About'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Nav from './Navbar/Nav'
import Projects from './Projects/Projects'
import Mproject from './Projects/moreproject/mproject';



 



function App() {

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      
      <Projects/>
      <Routes>
        <Route path='/Mproject' element={<Mproject/>}/>
        
      </Routes>


      <Contact/>     
      <Footer/>
      
      </BrowserRouter>
      </>

    
  )
}

export default App
