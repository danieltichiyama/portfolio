import React, { useEffect } from "react"
import styles from "./portfolioGrid.module.scss"

const PortfolioGrid = props => {
  useEffect(() => {
    for (let i = 0; i < 17; i++) {
      let placeholder = document.createElement("div")
      let container = document.getElementById("portfolio_container")

      placeholder.setAttribute(
        "style",
        "height: 240px;width:100%;background-color: white;"
      )

      if (i % 2 === 0) {
        placeholder.setAttribute("style", "background-color: black;")
      }

      container.appendChild(placeholder)
    }
  })

  return (
    <div className={styles.container} id="portfolio_container">
      <div className={styles.sidebar}></div>
    </div>
  )
}

export default PortfolioGrid
