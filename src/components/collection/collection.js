import React, { useState } from "react"
import { useStaticQuery } from "gatsby"

import Modal from "react-bootstrap/Modal"

import Painting from "../painting/painting"
import "./collection.scss"
// import Modal from "../Modal/Modal"

const Collection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        # allContentfulTaulu(sort: {fields: vaakataso, order: DESC}) {
        allContentfulTaulu {
          edges {
            node {
              id
              title
              vaakataso
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

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedPainting, selectPainting] = useState(null)

  const onClickPainting = painting => {
    selectPainting(painting)
    setModalVisible(true)
  }

  const renderModal = () => {
    if (!selectedPainting) return

    return (
      <Modal
        show={modalVisible}
        onHide={() => setModalVisible(false)}
        dialogClassName="painting-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedPainting.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Painting {...selectedPainting} original key={selectedPainting.id} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    )
  }

  return (
    <>
      <div className="collection">
        {edges.map(
          ({ node }) =>
            node && (
              <Painting
                {...node}
                key={node.id}
                onClickPainting={onClickPainting}
              />
            )
        )}
      </div>
      {renderModal()}
    </>
  )
}
export default Collection
