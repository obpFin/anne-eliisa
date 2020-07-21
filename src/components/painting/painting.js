import React from "react"
import Image from "../image"

const Painting = node => (
  <div className="painting">
    {node && <Image fluid={node.fluid} alt={node.title} />}
  </div>
)

export default Painting
