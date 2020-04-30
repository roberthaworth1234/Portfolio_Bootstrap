import React from "react";
import { Container, Button } from "react-bootstrap";
// import {Animated } from 'react-animated-css'

export default function IndividualExperience({ project, handleToggle }) {
  return (
    <Container id="popup">
      <div className="animated fadeInLeft fill-screen d-flex flex-column align-items-center text-primary">
        <h4 className="p-4">{project.title}</h4>
        <a href={project.hostedURL}>
          <img
            src={project.img}
            alt={project.title}
            className="w-100 p-1 border border-warning"
          />
        </a>
        <p className="p-4 text-secondary">{project.description}</p>

        <Button onClick={handleToggle} className="btn btn-secondary">
          X
        </Button>
        <a className='projects-icon'href={project.githubURL}>
          <img
            src="https://img.icons8.com/nolan/64/github.png"
            alt="github icon"
          />
        </a>
      </div>
    </Container>
  );
}