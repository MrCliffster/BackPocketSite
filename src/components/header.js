import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

const Header = ({ siteTitle }) => (
  <header role="banner">
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand to="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle/>

        <Navbar.Collapse>
          <Nav className="pl-md-5 ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="page-2">Second</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link 
              href="https://www.patreon.com/backpocket"
              className="btn btn-primary"
            >
              Become a Patron!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
