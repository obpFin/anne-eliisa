import React from "react"
import Image from "../image"

import "./painting.scss"

const Painting = node => (
  <div className={`painting ${node.vaakataso && "horizontal"}`}>
    {node && <Image fluid={node.main.fluid} alt={node.title} />}
  </div>
)

export default Painting
