import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import icon from "../assets/images/icon.png";

const Features = () => {
  const features = [
    {
      id: 1,
      image: icon,
      title: "Card-Based Gameplay",
      description: "Engage in strategic card battles designed to teach grammar concepts."
    },
    {
      id: 2,
      image: icon,
      title: "Sentence Verification Via BKT and T5",
      description: "Advanced AI algorithms verify sentence correctness in real-time."
    },
    {
      id: 3,
      image: icon,
      title: "Rich Visuals and Sounds",
      description: "Immersive graphics and audio create an engaging learning experience."
    }
  ];

  return (
    <Container className="features-section">
      <Row className="g-4">
        {features.map((feature) => (
          <Col md={4} key={feature.id}>
            <Card className="feature-card">
              <div className="feature-image-wrapper">
                <Card.Img variant="top" src={feature.image} alt={feature.title} />
                <div className="feature-overlay"></div>
              </div>
              <Card.Body>
                <div className="feature-meta">
                </div>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;