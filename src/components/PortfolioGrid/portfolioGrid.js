import React, { useEffect, useState } from "react"
import styles from "./portfolioGrid.module.scss"

const PortfolioGrid = props => {
  const [menu] = useState(["All", "Web", "Design", "Learning"])
  const [selected, setSelected] = useState("All")

  useEffect(() => {
    for (let i = 0; i < 17; i++) {
      let placeholder = document.createElement("div")
      let container = document.getElementById("portfolio_container")

      placeholder.setAttribute(
        "style",
        "height: 240px; width: auto; border: yellow 1px dashed; margin:12px;"
      )

      container.appendChild(placeholder)
    }
  })

  useEffect(() => {
    let menuOptions = document.querySelectorAll("ul#portfolio-menu > button")

    for (let i = 0; i < menuOptions.length; i++) {
      if (menuOptions[i].innerHTML === selected) {
        menuOptions[i].setAttribute(
          "style",
          "border-bottom: 2px solid #ebd9c8;"
        )
      } else {
        menuOptions[i].removeAttribute("style")
      }
    }
  }, [selected])

  const toggle = e => {
    return setSelected(e.target.innerHTML)
  }

  return (
    <>
      <ul className={styles.menu} id="portfolio-menu">
        {menu.map(option => {
          return (
            <button className={styles.option} onClick={toggle}>
              {option}
            </button>
          )
        })}
      </ul>
      <div className={styles.container} id="portfolio_container"></div>
    </>
  )
}

export default PortfolioGrid
