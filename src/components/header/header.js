import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 1.45rem`,
        // maxWidth: 960,
        padding: `1.45rem 0`,
      }}
    >
      <div className="nav">
        <h1 className="title">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div className="menu">
          <Link to="/collections">kokoelmat</Link>
          <Link to="/bio">bio</Link>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
