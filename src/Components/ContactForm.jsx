import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  sendMessage(event) {
    event.preventDefault();

    const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: "roberthaworth1234@hotmail.com",
      feedback: this.state.message
    };
    emailjs
      .send(
        "default_service",
        "template_bf4rBkKK",
        templateParams,
        "user_KM6pkjouzJoje2c3ESWtz"
      )
      .then(
        function(response) {
          alert("Your message has successfully sent!");
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          alert("Your message was not able to be sent");
        }
      );
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  }

  render() {
    return (
      <div>
        <h3 className="my-3 text-center py-2">Contact me</h3>
        <div className="underline mb-3"></div>
        <Form
          className="d-flex flex-column align-items-center"
          id="contact-form"
          required
          method="POST"
        >
          <div className="mt-2 w-50 form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Your name.."
              value={this.state.name}
              onChange={this.handleInputChange.bind(this)}
              required
            />
          </div>
          <Form.Group controlId="email" className="w-50">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Your email.."
              value={this.state.email}
              onChange={this.handleInputChange.bind(this)}
              required
            />
          </Form.Group>
          <Form.Group className="w-50">
            <Form.Label>Message</Form.Label>
            <Form.Control
              rows="5"
              id="message"
              name="message"
              placeholder="Type your message.."
              required
              value={this.state.message}
              onChange={this.handleInputChange.bind(this)}
            />
          </Form.Group>
          {/* <label htmlFor="name">Name</label>
          <input
            className="form-control w-50"
            id="name"
            name="name"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Your name.."
            required
            value={this.state.name}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            className="w-50"
            id="email"
            name="email"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Your email address.."
            required
            value={this.state.email}
          />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            className="w-50"
            id="message"
            name="feedback"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Type your message.."
            required
            value={this.state.feedback}
          />
          <br /> */}
          <Button
            type="Submit"
            className="btm btn-primary my-4"
            onClick={this.sendMessage.bind(this)}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
}
