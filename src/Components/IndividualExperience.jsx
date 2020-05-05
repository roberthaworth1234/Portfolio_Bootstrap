import React from "react";
import { Container, Button, Row } from "react-bootstrap";
// import {Animated } from 'react-animated-css'

export default function IndividualExperience({ project, handleToggle }) {
  return (
    <Container id="popup">
      <Row className="animated fadeInLeft fill-screen d-flex flex-column align-items-center text-primary">
        <h4 className="p-4">{project.title}</h4>
        <a className="d-flex flex-column align-items-center" href={project.hostedURL}>
          <img
            src={project.img}
            alt={project.title}
            className="w-75 p-1 border border-warning"
          />
        </a>
        <p className="p-5 text-secondary text-center">{project.description}</p>

        <Button onClick={handleToggle} className="btn btn-secondary">
          X
        </Button>
        <a className='projects-icon'href={project.githubURL}>
          <img
            src="https://img.icons8.com/nolan/64/github.png"
            alt="github icon"
          />
        </a>
      </Row>
    </Container>
  );
}
