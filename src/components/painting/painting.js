import React from "react"
import Image from "../image"

import "./painting.scss"

const Painting = ({ onClickPainting, original, ...node }) => {
  const classNames = original
    ? ""
    : `painting group ${node.vaakataso ? "horizontal" : ""} ${
        original ? "original" : ""
      }`
  return (
    <div
      className={classNames}
      onClick={() => onClickPainting && onClickPainting(node)}
    >
      {node && <Image fluid={node.main.fluid} alt={node.title} />}
    </div>
  )
}

export default Painting
