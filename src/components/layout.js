import React from "react"
import PropTypes from "prop-types"

import Navbar from "../components/Navbar/Navbar"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main>
        {children}
        <Navbar></Navbar>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
