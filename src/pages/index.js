import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Collection from "../components/collection/collection"

import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ marginBottom: `1.45rem` }}>
        <Collection />
      </div>
    </Layout>
  )
}

export default IndexPage
