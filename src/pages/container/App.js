import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { HomePage } from '../Home/HomePage';
import { GamePage } from '../Game/GamePage';
import { HighScorePage } from '../HighScore/HighScorePage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/game" component={GamePage}/>
            <Route path="/game/:level" component={GamePage}/>
            <Route path="/high-score" component={HighScorePage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export { App };
