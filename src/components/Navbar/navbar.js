import React, { useState, useEffect } from "react"
import styles from "./navbar.module.scss"
import { Link } from "gatsby"

import GitHubIcon from "../../assets/github.svg"
import LinkedInIcon from "../../assets/linkedin.svg"
import EmailIcon from "../../assets/mail.svg"
import PhoneIcon from "../../assets/phone.svg"

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const toggle = () => {
    return setIsOpen(!isOpen)
  }

  const handleTabKeyDown = e => {
    if (e.key === "Enter") {
      return toggle()
    }
  }

  useEffect(() => {
    let navbarContainer = document.querySelector("#navbar_container")
    let navBar = document.querySelector("#NavBar")
    let tab = document.querySelector("#navbar_tab")

    const debounceHandleResize = debounce(() => {
      setWindowWidth(window.innerWidth)
    }, 10)

    window.addEventListener("resize", debounceHandleResize)

    if (windowWidth > 625) {
      navbarContainer.removeAttribute("style")
      navBar.removeAttribute("style")
      tab.removeAttribute("style")
    } else {
      if (isOpen) {
        navbarContainer.setAttribute("style", "height: 50vh;")
        navBar.setAttribute("style", "height: 100%;padding: 12px 24px;")
        tab.setAttribute("style", "bottom:50%;")
      } else {
        navbarContainer.removeAttribute("style")
        navBar.removeAttribute("style")
        tab.removeAttribute("style")
      }
    }

    return () => {
      window.removeEventListener("resize", debounceHandleResize)
    }
  }, [isOpen, windowWidth])

  return (
    <div className={styles.container} id="navbar_container">
      <div
        className={styles.tab}
        onClick={toggle}
        onKeyDown={handleTabKeyDown}
        id="navbar_tab"
        role="button"
        tabIndex="0"
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <nav className={styles.Navbar} id="NavBar">
        <ul id="navbar_ul">
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

function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

export default NavBar
