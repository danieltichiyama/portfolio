import React from "react"
import PropTypes from "prop-types"

import Navbar from "../Navbar/Navbar"
import { PortfolioProvider } from "../../utils/PortfolioContext/portfolioContext"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <PortfolioProvider>
      <main id="main">
        {children}
        <Navbar></Navbar>
      </main>
    </PortfolioProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
