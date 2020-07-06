import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const API_PATH = "http://localhost:1992/bootstrap-app/api/contact/index.php";

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    mailSent: false,
    error: null
  };

  handleFormSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return (
      <>
        <h2 className="text-center mt-2">Contact Me</h2>
        <div className="underline mb-2"></div>
        <div>
          <form className="d-flex flex-column align-items-center" action="#">
            <label>Name</label>
            <input
              className="w-50"
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />

            <label>Email</label>
            <input
              className="w-50"
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />

            <label>Message</label>
            <textarea
              className="w-50"
              id="message"
              name="message"
              placeholder="Please write your query.."
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            ></textarea>
            <Button
              className="my-2"
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Submit"
            >
              Submit
            </Button>
          </form>
          <div>
            {this.state.mailSent && <div>Thank you for contcting us.</div>}
          </div>
        </div>
      </>
    );
  }
}
