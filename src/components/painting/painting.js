import React from "react"
import Image from "../image"

import "./painting.scss"

const Painting = ({ onClickPainting, original, ...node }) => (
  <div
    className={`painting group ${node.vaakataso ? "horizontal" : ""} ${
      original ? "original" : ""
    }`}
    onClick={() => onClickPainting && onClickPainting(node)}
  >
    {node && <Image fluid={node.main.fluid} alt={node.title} />}
  </div>
)

export default Painting
