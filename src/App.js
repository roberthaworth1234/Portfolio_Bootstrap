import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./Components/Navigation";
import LogoHeader from "./Components/LogoHeader";
import Bio from "./Components/Bio";
import Experience from "./Components/Experience";
import NorthcodersExperience from "./Components/NorthcodersExperience";
import Interests from "./Components/Interests";
import CV from './Components/CV';
import { Router } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";

export default class App extends Component {
                 state = {
                   images: [
                     {
                       name: "Emissions montoring analysers",
                       path: require("./Images/MappedImg/1.jpg"),
                       description: "Emissions Monitoring",
                       loaded: false
                     }, {
                       name: "Whale Tail",
                       path: require("./Images/MappedImg/3.jpg"),
                       description: "Whale Tail Slap",
                       loaded: false
                     },
                     {
                       name: "Airdale Terrier",
                       path: require("./Images/MappedImg/2.jpg"),
                       description: "Very Cute Airdale Terrier",
                       loaded: false
                     },

                     

                     {
                      name: "Man and Woman walking in river",
                      path: require("./Images/MappedImg/9.jpg"),
                      description: "Fraser island river walk",
                      loaded: false
                     },
                     {
                       name: "Airial Beach",
                       path: require("./Images/MappedImg/5.jpg"),
                       description: "Airial shot at Whitsundays",
                       loaded: false
                      },

                      {
                        name: "Sailing a yatch",
                        path: require("./Images/MappedImg/6.jpg"),
                        description: "Sailing the Amadeus",
                        loaded: false
                     },
                     {
                       name: "Team activity",
                       path: require("./Images/MappedImg/7.jpg"),
                       description: "Total Warrior charity event",
                       loaded: false
                      },
                      {
                        name: "Nara Inlet Beach",
                        path: require("./Images/MappedImg/8.jpg"),
                       description: "Nara Inlet Beach",
                       loaded: false
                      },
                         {
                           name: "Dog on Mamtor",
                           path: require("./Images/MappedImg/4.jpg"),
                           description: "Dog walk on Mamtor",
                           loaded: false
                         },
                      {
                        name: "Manchester Town Hall",
                        path: require("./Images/MappedImg/10.jpg"),
                       description: "Manchester Town Hall",
                       loaded: false
                     }
                   ],
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
                       githubURL2:
                         "https://github.com/roberthaworth1234/Be-Review"
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
                         "A nice to have option for our Ambiscape sound generator was a React-native mobile version.  It gave me insight into the differences building our Web App, as a mobile version.  Learning styling syntax, spiking audio libraries such as react native audio/video and expo-av. And the difficulties of matching the audio functionality across two platforms.",
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
                                 <Col className='overflow-hidden' key={project.id} xs={6} md={4}>
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
                       <section>

                       <Interests images={this.state.images} />
                       </section>
                       <section className="darker">
                       <CV />
                       </section>
                       <section className="references">
                         {/* <img
                            style={{width:'200px'}}
                           src={require("./File/CV1.png")}
                           alt="CV"
                         /> */}
                         <p>Email: <a href="mailto:roberthaworth1234@hotmail.com">roberthaworth1234@hotmail.com</a></p>
                         <a href="https://icons8.com/icon/38561/postgresql">
                           PostgreSQL /
                         </a>
                         <a href="https://icons8.com/icon/44019/linkedin">
                           LinkedIn /
                         </a>
                         <a href="https://icons8.com/icon/52539/github">
                           GitHub &
                         </a>
                         <a href="https://icons8.com/icon/bYzsf9Bmocst/twitter">
                           Twitter icon by Icons8
                         </a>
                       </section>
                     </>
                   );
                 }
               }
