import React, { useState, useEffect } from "react"
import styles from "./navbar.module.scss"
import { Link } from "gatsby"

import GitHubIcon from "../../assets/github.svg"
import LinkedInIcon from "../../assets/linkedin.svg"
import EmailIcon from "../../assets/mail.svg"
import PhoneIcon from "../../assets/phone.svg"

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    return setIsOpen(!isOpen)
  }

  useEffect(() => {
    let navbarContainer = document.querySelector("#navbar_container")
    let navBar = document.querySelector("#NavBar")
    let tab = document.querySelector("#navbar_tab")

    if (!isOpen && window.innerWidth <= 625) {
      navbarContainer.setAttribute("style", "height: 0")
      navBar.setAttribute("style", "display:none")
      tab.setAttribute("style", "bottom:-50px; clip-path: inset(0 0 50px 0);")
    } else if (isOpen && window.innerWidth <= 625) {
      navbarContainer.removeAttribute("style")
      navBar.removeAttribute("style")
      tab.removeAttribute("style")
    }
  }, [isOpen, window.innerWidth])

  return (
    <div className={styles.container} id="navbar_container">
      <div className={styles.tab} onClick={toggle} id="navbar_tab">
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <nav className={styles.Navbar} id="NavBar">
        <ul>
          <Link to="/projects">Projects</Link>
          <Link to="/designs">Designs</Link>
          <Link to="/images">Images</Link>
          <Link to="/resume">Resume</Link>
        </ul>
        <ul className={styles.sns}>
          <GitHubIcon />
          <LinkedInIcon />
          <EmailIcon />
          <PhoneIcon />
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
