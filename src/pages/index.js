import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
  const asset = data.allContentfulAsset.edges[0].node
  console.log(asset.fluid)


  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <h2>{asset.title}</h2>
        <Image fluid={asset.fluid} alt={asset.title} />
      </div>
    </Layout>
  )
}

export default IndexPage
