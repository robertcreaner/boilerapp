import React, { Component } from "react";

import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";

import "../scss/styles.scss";
import ReminderWrapper from "./redux/wrappers/ReminderWrapper";

class App extends Component {
  render() {
    return <ReminderWrapper />;
  }
}

export default App;
