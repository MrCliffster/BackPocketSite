import React from "react"
import { Container, Row, Col } from "react-bootstrap";

const Slider = () => {
    return (
        <>
        <div className="slider-item overlay" id="hero-slider">
            <Container>
                <Row className="slider-text align-items-center justify-content-center">
                    <Col lg="12" sm="12" className="text-center">
                        <h1 className="aos-animate">We are <br/>Back Pocket.</h1>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Slider;