import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import HomeText from "../components/HomeText/homeText"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeText></HomeText>
  </Layout>
)

export default IndexPage
