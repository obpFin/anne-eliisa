import React from "react"
import { useStaticQuery } from "gatsby"

import "./collection.scss"
import Painting from "../painting/painting"

const Collection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulTaulu {
          edges {
            node {
              id
              title
              main {
                fluid(maxWidth: 800) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  )
  const edges = data.allContentfulTaulu.edges

  return (
    <div className="collection">
      {edges.map(({ node }) => node && <Painting {...node} key={node.id} />)}
    </div>
  )
}

export default Collection
