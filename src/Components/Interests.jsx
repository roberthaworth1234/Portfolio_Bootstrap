import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Interests({ images }) {
  return (
    <Container>
      <h2 id="interests-heading" className="py-3 mb-0 text-center">
        Interests / Gallery
      </h2>
      <div className="underline"></div>

      <Row className="overflow-hidden">
        {images.map((image, i) => {
          return i < 5 ? (
            <Col
              key={image.name}
              className="p-0 d-flex flex-column align-items-center"
            >
              <img
                title={image.description}
                className="interests"
                src={image.path}
                alt={image.name}
              />
              <p className="hidden-text">{image.description}</p>
            </Col>
          ) : null;
        })}
      </Row>
      <Row>
        {images.map((image, i) => {
          return i >= 5 ? (
            <Col
              key={image.name}
              className="p-0 mb-5 d-flex flex-column align-items-center"
            >
              <img
                title={image.description}
                className="interests"
                src={image.path}
                alt={image.name}
              />
              <p className="hidden-text">{image.description}</p>
            </Col>
          ) : null;
        })}
      </Row>
    </Container>
  );
}
