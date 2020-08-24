import React from "react"
import { Link } from "gatsby"

const NavItem = ({ linkUri, linkTitle }) => {
  return (
    <li className="nav-item">
      <Link to={linkUri} className="nav-link">
        {linkTitle}
      </Link>
    </li>
  )
}

export default NavItem
