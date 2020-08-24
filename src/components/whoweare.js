import React from "react"
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { BehindPocketSkadiImage } from "./images/behind-pocket-skadi"
import { BajoImage } from "./images/bajo-image"

const WhoWeAre = () => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col lg="5" className="ml-auto mb-5 order-2">
            <span className="d-block text-uppercase text-primary">Who we are</span>
            <h2>Let's build this together.</h2>
            <p>Back Pocket is the flagship show of what (we hope) will become a large network of content oriented around, but nowhere near limited to, gaming. We listen to and work with our community to create the stuff we want to watch ourselves.</p>
            <p>We do need you to get involved though. Our show is entirely funded by our sponsors: you! Through Patreon, you can unlock interactivity in our show; gaining access to our discord, the power to vote for the content you want to see, and even the chance to come on air and chat!</p>
            <Link to="page-2" className="btn btn-outline-black">Learn more</Link>
          </Col>
          <Col lg="6" className="order-1">
            <div className="img-dotted-bg">
              <BajoImage />
              <BehindPocketSkadiImage />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
// TODO: Investigate whether img-dotted-bg should be a figure, Figure, or div.
export default WhoWeAre
