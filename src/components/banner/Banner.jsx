import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./banner.css"

function Banner() {
  return (
    <div id='banner'>
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="banner_details">
                        <small>Welcome to our CHURCH</small>
                        <h1>Become a part of our community</h1>
                        <button>Learn more</button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner