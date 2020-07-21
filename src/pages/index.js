import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Collection from "../components/collection/collection"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulAsset {
          edges {
            node {
              title
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    `
  )

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
