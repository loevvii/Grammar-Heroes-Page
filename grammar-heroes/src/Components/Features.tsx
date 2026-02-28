import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import icon from "../assets/images/icon.png";

const Features = () => {
  return (
    <Container className="features-section">
      <Row className="align-items-center">
        <Col md={6} className="features-left">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100 h-100" src={icon} alt="Feature 1" style={{ objectFit: "cover" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 h-100" src={icon} alt="Feature 2" style={{ objectFit: "cover" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 h-100" src={icon} alt="Feature 3" style={{ objectFit: "cover" }} />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6} className="features-right">
          <h2>Features</h2>
          <ul>
            <li>Card-Based Gameplay</li>
            <li>Sentence Verification Via BKT and T5</li>
            <li>Rich Visuals and Sounds</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;