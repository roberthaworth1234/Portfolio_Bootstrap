import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function NewProjects() {
  return (
    <Container>
      <h2 className="py-3 mb-0 text-center">New Projects / Learning</h2>
      <div className="underline"></div>
      <Row className="py-4 text-center">
        <Col xs={{ span: 12 }} md lg={{ span: 6 }}>
          <h4>Animal Santuary React App with Java Springboot API</h4>
          <p>
            Myself and a fellow northcoder have been working toward creating an
            animal santuary react webapp. Currently the sanctuary only has a
            facebook profile live. We are hoping to construct a webapp with
            useability to provide easy adoption of rabbits and guinea pigs and
            separate some of the administration for sanctuary workers. Also a
            design that makes it attractive for potential rescuers.
          </p>
          <p className="mt-3">
            {" "}
            The back end API is being built using Java, Springboot Flyway and
            Docker. This was utilised to challenge ourselves to learn new
            languages and technologies. In the process of helping the sanctuary
            by implementing a simple animal database with adoption info etc.
          </p>
        </Col>
        <Col xs={{ span: 12 }} md lg={{ span: 6 }}>
          <h4>React Native Mobile</h4>
          <p>
            This was a small tech test sprint completed recently which utilises
            the guardian news api to serve as news search. This helped me learn
            to implement forms, swipeable pages and further my react-native
            syntax knowledge.
          </p>
          <a href="https://github.com/roberthaworth1234/tote-test">
            <img
              className="newProjects"
              src={require("../Images/GuardNews.png")}
              alt="React native guardian news search app"
            />
          </a>
          <a href="https://github.com/roberthaworth1234/tote-test">
            <img
              className="newProjects"
              src={require("../Images/GuardNewsSearch.png")}
              alt="React native guardian news search app"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
