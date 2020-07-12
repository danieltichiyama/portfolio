import React, { useState, useEffect } from "react"
import styles from "./homeText.module.scss"

const HomeText = props => {
  const [adjective, setAdjective] = useState("simple")

  useEffect(() => {
    const adjArr = ["simple", "clean", "neat", "nice", "interesting"]

    let count = 0

    setInterval(() => {
      if (count >= adjArr.length) {
        count = 0
      }

      setAdjective(adjArr[count])
      count++
    }, 3000)
  }, [])

  return (
    <section className={styles.container}>
      <h3 className={styles.HomeText}>
        Hi, I'm Daniel. I make websites and web applications. I like to keep
        things <span>{adjective}</span> .
      </h3>
    </section>
  )
}

export default HomeText
