import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeText from "../components/HomeText/homeText"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeText></HomeText>
  </Layout>
)

export default IndexPage
