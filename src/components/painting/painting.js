import React from "react"
import Image from "../image"

import "./painting.scss"

const Painting = ({ onClickPainting, ...node }) => (
  <div
    className={`painting group ${node.vaakataso && "horizontal"}`}
    onClick={() => onClickPainting && onClickPainting(node)}
  >
    {node && <Image fluid={node.main.fluid} alt={node.title} />}
  </div>
)

export default Painting
