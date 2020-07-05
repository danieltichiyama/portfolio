import React from "react"
import styles from "./navbar.module.scss"
import { Link } from "gatsby"

const NavBar = props => {
  return (
    <nav className={styles.Navbar}>
      <ul>
        <Link to="/projects">Projects</Link>
        <Link to="/designs">Designs</Link>
        <Link to="/images">Images</Link>
      </ul>
      <ul className={styles.sns}>
        <li className={styles.icon}></li>
        <li className={styles.icon}></li>
        <li className={styles.icon}></li>
        <li className={styles.icon}></li>
        <li className={styles.icon}></li>
      </ul>
    </nav>
  )
}

export default NavBar
