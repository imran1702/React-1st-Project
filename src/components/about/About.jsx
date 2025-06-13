import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import icon1 from "../../assets/Icon.png"
import icon2 from "../../assets/Icon (1).png"
import icon3 from "../../assets/Icon (2).png"
import "./about.css"

function About() {
  return (
    <section id='about'>
        <Container>
            <div className='text-center headline'>
                <small>sub-headline</small>
                <h2>a church that's relevant</h2>
            </div>
            <Row>
                <Col lg={4}>
                    <div className="card_wrapper">
                        <div className="icon_">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="texts">
                            <h4>About us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_wrapper">
                        <div className="icon_">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="texts">
                            <h4>Get involved</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_wrapper">
                        <div className="icon_">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="texts">
                            <h4>Giving back</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About