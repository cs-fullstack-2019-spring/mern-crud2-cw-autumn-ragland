import React, { Component } from 'react';
import './App.css';
import ListRSVP from "./ListRSVP";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateRSVP from "./CreateRSVP";

//render list and links for back to home and add RSVP
class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>RSVP</h1>
          <Router>
              <Link to={"/"}>All RSVPs</Link>
              <br/>
              <Link to={"/create"}>Add RSVP</Link>
              <Route path={'/'} exact component={ListRSVP} />
              <Route path={'/create'} component={CreateRSVP} />
          </Router>
      </div>
    );
  }
}

export default App;
