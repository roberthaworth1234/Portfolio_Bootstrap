import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: ""
  };

  validate = email => {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  validateName = (name, email) => {
    if (!name.length && this.validate(email)) {
      return this.setState({
        nameError: "↑ Please enter your name",
        name: "",
        emailError: "↑ Please enter a valid email",
        email: ""
      });
    } else if (!name.length && !this.validate(email)) {
      return this.setState({
        nameError: "↑ Please enter your name",
        name: "",
        emailError: ""
      });
    } else if (name.length && this.validate(email)) {
      return this.setState({
        nameError: "",
        emailError: "↑ Please enter a valid email",
        email: ""
      });
    } else {
      return true;
    }
  };

  validateForm = (email, name) => {
    if (this.validate(email) && name.length) {
      return this.setState({
        emailError: "↑ Please enter a valid email",
        email: "",
        nameError: ""
      });
    } else if (this.validate(email)) {
      return this.setState({
        emailError: "↑ Please enter a valid email",
        email: ""
      });
    } else {
      return true;
    }
  };

  sendMessage(event) {
    event.preventDefault();
    const { name, email } = this.state;
    if (this.validateName(name, email) && this.validateForm(email, name)) {
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
          },
          function(err) {
            alert("Your message was not able to be sent");
          }
        );
      this.setState({
        name: "",
        email: "",
        message: "",
        nameError: "",
        emailError: ""
      });
    }
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
          <Form.Group className="mt-2 w-50">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Your name.."
              value={this.state.name}
              onChange={this.handleInputChange.bind(this)}
              required
            />{" "}
            {this.state.nameError.length ? (
              <div className="name-validation">{this.state.nameError}</div>
            ) : null}
          </Form.Group>
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
            {this.state.emailError.length ? (
              <div className="email-validation">{this.state.emailError}</div>
            ) : null}
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
