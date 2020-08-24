import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavItem from "./navitem"

const Header = ({ siteTitle }) => (
  <header role="banner">
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/">{siteTitle}</Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav pl-md-5 ml-auto">
            <NavItem linkUri="/" linkTitle="Home" />
            <NavItem linkUri="page-2" linkTitle="Second" />
          </ul>
          <div className="navbar-nav ml-auto">
            <a
              href="https://www.patreon.com/backpocket"
              className="btn btn-primary"
            >
              Become a Patron!
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
