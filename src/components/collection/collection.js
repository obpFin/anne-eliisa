import React from "react"
import { useStaticQuery } from "gatsby"

import "./collection.scss"
import Painting from "../painting/painting"

const Collection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulAsset {
          edges {
            node {
              id
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
  const edges = data.allContentfulAsset.edges

  return (
    <div className="collection">
    {edges.map(({node}) => node && (
      <Painting {...node} key={node.id} />
    ))}
    </div>
  )
}

export default Collection