import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function NewProjects() {
  return (
    <Container>
      <h2 className="py-3 mb-0 text-center">New Projects / Learning</h2>
      <div className="underline"></div>
      <Row className="py-4 text-center">
        <Col xs={{ span: 12 }}>
          <h4>Animal Santuary React App</h4>
          <p>
            Myself and a fellow northcoder have been working toward creating a
            animal santuary react webapp. Currently the sanctuary only has a
            facebook profile live. We are hoping to construct the useability and
            design to provide easy adoption of rabbits and guinea pigs and
            separate some of the administration and make it attractive for
            potential rescuers.
          </p>
        </Col>
        <Col xs={{ span: 12 }}>
          <h4>Java Springboot API</h4>
          <p>
            This will be the back end API for administrator to update animals
            details / adoption information. We decided to try and challenege
            ourselves in learning a new language and also implement new tech.
            Flyway, Docker and Springboot specifically.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
