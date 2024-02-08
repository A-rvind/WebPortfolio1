import {useState} from 'react'
import {Link} from "react-scroll"
import './Nav.css'

const Nav = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const [click, setClick] = useState(false)
 

  const closeMenu = () => setClick(false)

  return (
    <nav className="navigation">
      <a href="/" className="logo">
        Arvind Sharma
      </a>
      <button className="hamburger"  onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="black"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a className="navhome" href='/' >Home</a>
          </li>
          <li>
          <Link to="About" spy={true} offset={5} duration={500} onClick={closeMenu}>About</Link>
          </li>
          <li>
          <Link to="Skills" spy={true} offset={-10} duration={500} onClick={closeMenu}>Skills</Link>
            
          </li>
          <li>
          <Link to="Projects" spy={true} offset={15} duration={500} onClick={closeMenu}>Projects</Link>
                    
          </li>
          <li>
					<Link to="Contact" spy={true} offset={-10} duration={500} onClick={closeMenu}>Contact</Link>
            
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav