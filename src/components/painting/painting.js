import React from "react"
import Image from "../image"

import "./painting.scss"

const Painting = node => (
  <div className="painting">
    {node && <Image fluid={node.main.fluid} alt={node.title} isHorizontal={node.vaakataso} alt={node.title} />}
  </div>
)

export default Painting
