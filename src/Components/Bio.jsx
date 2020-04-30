import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

export default function Bio() {
  return (
    <Container>
      <Row className="mt-5 mb-5 text-center">
        <Col className="animated bounceInLeft" xs={12} md={6}>
          <main className="About">
            <h1>About me</h1>
            <p>
              I am a junior software developer based in the beautiful North West
              of England.{" "}
            </p>
            <p>
              I enjoy problem solving, learning unfamiliar tech, design and
              collaborating with others. Additionally I have a great
              appreciation for coffee and cake{" "}
              <span role="img" aria-label="coffee emoji">
                ☕️🍰
              </span>
              . In my spare time I enjoy travel, photography, coding meet-ups
              and hill walking (shown in my interests gallery). Please have a
              look at my tradtional CV / Experience links and contact me with
              any queries or opportunities. I have a concentrated history in
              environmental emissions monitoring / compliance and I am looking
              for a new challenege in software development.
            </p>
          </main>
        </Col>
        <Col
          className="animated bounceInRight"
          xs={12}
          md={{ span: 5, offset: 1 }}
        >
          <img
            src={require("../Images/Rob_Haworth.png")}
            alt="Rob Haworth"
            style={{ width: "90%" }}
          />
        </Col>
      </Row>
    </Container>
  );
}
