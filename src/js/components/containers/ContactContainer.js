import React, { Component } from "react";

class ContactContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="text-center">
        <div className="jumbotron mb-2 bg-light">
          <h1 className="display-4">Contact Page</h1>
          <p className="lead">
            Welcome to the Contact page. Seeing this page means the react router
            is working properly.
          </p>
        </div>
      </div>
    );
  }
}

export default ContactContainer;
