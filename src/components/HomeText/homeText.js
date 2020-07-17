import React, { useState, useEffect, useContext } from "react"
import styles from "./homeText.module.scss"

import { PortfolioContext } from "../../utils/PortfolioContext/portfolioContext"

const HomeText = props => {
  const [adjective, setAdjective] = useState("simple")
  const { state } = useContext(PortfolioContext)

  useEffect(() => {
    let container = document.getElementById("container")

    if (state.isOpen) {
      container.setAttribute("style", "height: 50%;")
    } else {
      container.removeAttribute("style")
    }
  }, [state.isOpen])

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
    <section className={styles.container} id="container">
      <h3 className={styles.HomeText}>
        Hi, I'm Daniel. I make websites and web applications. I like to keep
        things <span>{adjective}</span> .
      </h3>
    </section>
  )
}

export default HomeText
