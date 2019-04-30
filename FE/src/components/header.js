import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <div className="navH">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Home
          </Link>
          <Link
            to="/page-2"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            About
          </Link>
          <Link
            to="/404"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Archive
          </Link>
          <Link
            to="/404"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Log In
          </Link>
        </div>
      </h1>
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
