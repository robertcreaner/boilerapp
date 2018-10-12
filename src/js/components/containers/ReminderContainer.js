import React, { Component } from "react";

import Input from "../presentational/Input";
import Button from "../presentational/Button";
import Card from "../presentational/Card";

class ReminderContainer extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleChange(event) {
    const { updateReminder } = this.props;
    updateReminder(event.target.value);
  }

  handleOnClick() {
    const { addReminder, reminder } = this.props;
    if (reminder) {
      addReminder(reminder);
    }
  }

  handleOnClose(id) {
    const { deleteReminder } = this.props;
    deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;

    return reminders.map(reminder => (
      <div className="col-sm-12 col-md-4">
        <Card
          reminder={reminder}
          key={reminder.id}
          handleOnClose={this.handleOnClose}
        />
      </div>
    ));
  }

  render() {
    const { reminder } = this.props;
    return (
      <div className="text-center">
        <div className="jumbotron mb-2 bg-light">
          <h1 className="display-4">React. Redux. Bootstrap. Sass.</h1>
          <p className="lead">
            This app contains all the boilerplate code you need to get started
            on your very own React Redux app.
          </p>
          <div className="form-inline justify-content-center">
            <div className="form-group col-sm-12 input-group input-group-lg">
              <Input
                label="reminder"
                type="text"
                id="reminder"
                value={reminder}
                placeholder="I have to..."
                handleChange={this.handleChange}
              />
              <div className="input-group-append">
                <Button
                  type="button"
                  text="Add reminder"
                  handleOnClick={this.handleOnClick}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">{this.renderReminders()}</div>
      </div>
    );
  }
}

export default ReminderContainer;
