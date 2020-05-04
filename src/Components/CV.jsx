import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class CV extends Component {
  state = {
    toggled1: false,
    toggled2: false,
  };
  render() {
    if (this.state.toggled1) {
      return (
        <Container id="popup" className="d-flex flex-column">
          <Button
            className="btn btn-info"
            onClick={() => {
              this.setState({ toggled1: false });
            }}
          >
            Back
          </Button>
          <embed
            onClick={() => {
              this.setState({ toggled1: false });
            }}
            type="application/pdf"
            className="h-100 w-100"
            title="Rob Haworth CV PDF"
            src={require("../File/RobertHaworthCV.pdf")}
          ></embed>
        </Container>
      );
    } else if(this.state.toggled2) {
      return (
        <Container id="popup" className="d-flex flex-column">
          <Button
            className="btn btn-info"
            onClick={() => {
              this.setState({ toggled2: false });
            }}
          >
            Back
          </Button>
          <embed
            onClick={() => {
              this.setState({ toggled2: false });
            }}
            type="application/pdf"
            className="h-100 w-100"
            title="Rob Haworth CV PDF"
            src={require("../File/RobertHaworthCV1.pdf")}
          ></embed>
        </Container>
      );
    }
    return (
      <Container>
        <h2 id="interests-heading" className="py-3 mb-0 text-center">
          Curriculum Vitae
        </h2>
        <div className="underline"></div>
        <Row>
          <Col className="my-5 d-flex justify-content-end">
            <img
              onClick={() => {
                this.setState({ toggled1: true });
              }}
              className="w-50 h-100"
              src={require("../File/CV1.png")}
              alt="Curriculum Vitae Page2"
            ></img>
          </Col>
          <Col className="my-5 d-flex justify-content-start">
            <img
              onClick={() => {
                this.setState({ toggled2: true });
              }}
              className="w-50 h-100"
              src={require("../File/CV1.png")}
              alt="Curriculum Vitae Page2"
            ></img>
          </Col>
        </Row>
      </Container>
    );
  }
}
