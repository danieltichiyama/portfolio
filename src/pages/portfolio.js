import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import PortfolioGrid from "../components/PortfolioGrid/portfolioGrid"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PortfolioGrid></PortfolioGrid>
  </Layout>
)

export default PortfolioPage
