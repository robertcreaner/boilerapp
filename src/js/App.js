import React, { Component } from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "../scss/styles.scss";
import ReminderWrapper from "./redux/wrappers/ReminderWrapper";
import store from "../js/redux/store";
import Navigation from "./components/presentational/Navigation";
import Footer from "./components/presentational/Footer";
import AboutContainer from "./components/containers/AboutContainer";
import ContactContainer from "./components/containers/ContactContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={ReminderWrapper} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/contact" component={ContactContainer} />
          </Switch>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
