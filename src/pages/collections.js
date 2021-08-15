import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import "bootstrap/dist/css/bootstrap.min.css"

const CollectionsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulKokoelma {
          edges {
            node {
              id
              nimi
            }
          }
        }
      }
    `
  )

  console.log("data", data.allContentfulKokoelma)

  const { edges } = data.allContentfulKokoelma

  return (
    <Layout>
      <SEO title="Collections" />
      <div style={{ marginBottom: `1.45rem` }}>
        {edges.map(({ node }) => (
          <p key={node.id}>{node.nimi}</p>
        ))}
      </div>
    </Layout>
  )
}

export default CollectionsPage
