import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./Components/Navigation";
import LogoHeader from "./Components/LogoHeader";
import Bio from "./Components/Bio";
import Experience from "./Components/Experience";
import NorthcodersExperience from './Components/NorthcodersExperience';
import { Router } from '@reach/router' 
import { Container, Row, Col } from "react-bootstrap";

export default class App extends Component {
                 state = {
                   experience: [
                     {
                       id: 1,
                       icon: "https://img.icons8.com/nolan/64/react-native.png",
                       img: require("./Images/Screenshot3.png"),
                       description:
                         "My Northcoders Final Project. Collective as a team of 5 developers, we built an ambient sound generator for concentration, relaxation and sleep.  Learning and devloping skills using libraries for audio playback. Git version control and Agile practices like Kanban/Trello and daily Stand-ups.",
                       title: "Ambiscape - React Web App",
                       hostedURL: "https://ambiscape.netlify.app/",
                       githubURL:
                         "https://github.com/barnardnicholas/ambiscape-react-prototype"
                     },
                     {
                       id: 2,
                       icon:
                         "https://img.icons8.com/color/48/000000/postgreesql.png",
                       img: require("./Images/Screenshot5.png"),
                       description:
                         "A Solo Back & Front-End Project. I built the back end using Knex.js, express and postgreSQL to produce my API.  Built employing test driven development throughout. The front end using React to serve up a aggregation board 'reddit' style website.",
                       title: "Dreaddit News - Back End API & React Front-End",
                       hostedURL: "https://rh-nc-news-app.herokuapp.com/",
                       githubURL:
                         "https://github.com/roberthaworth1234/fe_nc_news",
                       githubURL2: "https://github.com/roberthaworth1234/Be-Review"
                     },
                     {
                       id: 3,
                       icon: "https://img.icons8.com/nolan/64/js.png",
                       img: require("./Images/Screenshot2.png"),
                       description:
                         "Built to relieve some of the stress / anxiety of isolation and a bit of fun for friends and family.  This was a post graduation project for developing my React skills and integrating some animations",
                       title: "Quiz for Isloation - React Web App",
                       hostedURL:
                         "https://frozen-mountain-02351.herokuapp.com/",
                       githubURL: "https://github.com/roberthaworth1234/quiz"
                     },
                     {
                       id: 4,
                       icon: "https://img.icons8.com/color/48/000000/redux.png",
                       img: require("./Images/Screenshot6.png"),
                       description:
                         "This was my first foray into building a desktop game.  But also encorporated Redux state management tool. It helped me develop building my own movement functions and also having the ability to have state managed and not having to drill down Props as used in previous Apps",
                       title: "React-Redux Desktop Game",
                       hostedURL: "https://puzzle-game-beach.herokuapp.com/",
                       githubURL:
                         "https://github.com/roberthaworth1234/beach-puzzle-game/"
                     },
                     {
                       id: 5,
                       icon: "https://img.icons8.com/nolan/64/react-native.png",
                       img: require("./Images/Screenshot8.png"),
                       description:
                         "Made during our final project phase at Northcoders.  A nice to have option for our Ambiscape sound generator was a React-native mobile version of the application.  It gave me insight into the differences building our Web App as a mobile version.  Learning styling syntax, spiking audio libraries such as react native audio/video and expo-av. And the difficulties of matching the audio functionality across two platforms. This is currently unhosted, but can be run locally if you would like to fork the repository. ",
                       title: "Ambiscape - React native mobile ",
                       hostedURL:
                         "https://github.com/Team-Hypnotoad/FE-Ambiscape-Mobile",
                       githubURL:
                         "https://github.com/Team-Hypnotoad/FE-Ambiscape-Mobile"
                     }
                   ]
                 };
                 render() {
                   return (
                     <>
                       <LogoHeader />
                       <Navigation />
                       <Router>
                         <Bio path="/" />
                         <NorthcodersExperience path="/Experience" />
                       </Router>
                       <section className="darker">
                         <Container>
                           <h2 className="py-3 mb-0 text-center">
                             Main Projects
                           </h2>
                           <div className="underline"></div>
                           <Row className="pt-4">
                             {this.state.experience.map((project, i) => {
                               return i !== 3 ? (
                                 <Col key={project.id} xs={6} md={4}>
                                   <Experience project={project} />
                                 </Col>
                               ) : (
                                 <Col
                                   key={project.id}
                                   xs={{ span: 6 }}
                                   md={{ span: 4, offset: 2 }}
                                 >
                                   <Experience project={project} />
                                 </Col>
                               );
                             })}
                           </Row>
                         </Container>
                       </section>
                     </>
                   );
                 }
               }
