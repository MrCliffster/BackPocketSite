import React from "react"
import { Col } from "react-bootstrap"

const PortfolioSingle = ({ videoUri, videoTitle }) => {
  return (
    <Col sm="6" md="6" lg="6">
      <span className="embed-responsive embed-responsive-16by9 work-video">
        <iframe
          src={videoUri}
          frameBorder="0"
          allowFullScreen
          title={videoTitle}
        />
      </span>
    </Col>
  )
}

export default PortfolioSingle
