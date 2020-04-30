import React from 'react'
import {Container} from 'react-bootstrap'
export default function NorthcodersExperience() {
  return (
    <Container>
      <div className="animated bounceInLeft mt-5" id="northcoders-experience">
        <header>
          <h2 className='pl-5 mb-3'>Experience</h2>
        </header>
        <ul className="list-group border border-secondary">
          <li className="list-group-item">
            <h3>
              The core values I have been exposed to and implemented on the
              Northcoders Developer Pathway include:
            </h3>
          </li>
          <li className="list-group-item">
            JS-Fundamentals: Test driven development using Jest, Mocha, Chai,
            SuperTest.
          </li>
          <li className="list-group-item">
            Back-end: Restful API using Express, Knex, PSQL.
          </li>
          <li className="list-group-item">
            Front-end: Using React & React-native, Bootstrap, HTML/CSS.
          </li>
          <li className="list-group-item">
            Agile inspired practices: Kanban, pair coding, daily stand-ups.
          </li>
        </ul>
      </div>
    </Container>
  );
}
