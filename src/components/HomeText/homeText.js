import React from "react"
import styles from "./homeText.module.scss"

const HomeText = props => {
  return (
    <section className={styles.container}>
      <h3 className={styles.HomeText}>
        Hi, I'm Daniel. I make websites and web applications. I like to keep
        things <span>simple</span> .
      </h3>
    </section>
  )
}

export default HomeText
