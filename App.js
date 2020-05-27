import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import About from './components/pages/About';
import Cat from './components/pages/Cat';

import './App.css';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Nav />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <h1 className='text-center'>This is the HomePage</h1>
                  <p>The Purpose of this is to practice Links within React</p>
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/cat' component={Cat} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
