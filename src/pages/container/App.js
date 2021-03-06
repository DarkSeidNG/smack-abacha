import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { HomePage } from '../Home/HomePage';
import { GamePage } from '../Game/GamePage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/game" component={GamePage}/>
            <Route path="/game/:level" component={GamePage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export { App };
