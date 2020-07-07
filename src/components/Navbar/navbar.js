import React from "react"
import styles from "./navbar.module.scss"
import { Link } from "gatsby"

import GitHubIcon from "../../assets/github.svg"
import LinkedInIcon from "../../assets/linkedin.svg"
import EmailIcon from "../../assets/mail.svg"
import PhoneIcon from "../../assets/phone.svg"

const NavBar = props => {
  return (
    <nav className={styles.Navbar}>
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
  )
}

export default NavBar
