import React, { useState, useEffect, useContext } from "react"
import styles from "./navbar.module.scss"
import { Link } from "gatsby"
import { PortfolioContext } from "../../utils/PortfolioContext/portfolioContext"

import GitHubIcon from "../../assets/github.svg"
import LinkedInIcon from "../../assets/linkedin.svg"
import EmailIcon from "../../assets/mail.svg"
import PhoneIcon from "../../assets/phone.svg"

const NavBar = props => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const { state, dispatch } = useContext(PortfolioContext)

  const toggle = () => {
    dispatch({ type: "TOGGLE_MENU", data: null })
  }

  const handleTabKeyDown = e => {
    if (e.key === "Enter") {
      return toggle()
    }
  }

  useEffect(() => {
    let navbarContainer = document.querySelector("#navbar_container")

    const debounceHandleResize = debounce(() => {
      setWindowWidth(window.innerWidth)
    }, 10)

    window.addEventListener("resize", debounceHandleResize)

    if (windowWidth > 625) {
      navbarContainer.removeAttribute("style")
    } else {
      if (state.isOpen) {
        navbarContainer.setAttribute("style", "bottom: 0; height: 50vh;")
      } else {
        navbarContainer.removeAttribute("style")
      }
    }

    return () => {
      window.removeEventListener("resize", debounceHandleResize)
    }
  }, [state.isOpen, windowWidth])

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
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/resume">Resume</Link>
        </ul>
        <ul className={styles.sns}>
          <a
            href="https://github.com/danieltichiyama"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/danieltichiyama"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:daniel.ichiyama@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon />
          </a>
          <a href="tel:8087730442">
            <PhoneIcon />
          </a>
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
