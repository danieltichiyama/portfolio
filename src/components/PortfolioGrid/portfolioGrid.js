import React, { useEffect } from "react"
import styles from "./portfolioGrid.module.scss"

const PortfolioGrid = props => {
  useEffect(() => {
    for (let i = 0; i < 17; i++) {
      let placeholder = document.createElement("div")
      let container = document.getElementById("portfolio_container")

      placeholder.setAttribute(
        "style",
        "height: 240px; width: 360px; background-color: white; margin:12px;"
      )

      if (i % 2 === 0) {
        placeholder.setAttribute(
          "style",
          "height: 240px; width: 360px; background-color: black; margin:12px;"
        )
      }

      container.appendChild(placeholder)
    }
  })

  return <div className={styles.container} id="portfolio_container"></div>
}

export default PortfolioGrid
