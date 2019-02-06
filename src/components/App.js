import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../store/reducers';
import thunk from 'redux-thunk';
import Catalog from './Catalog'
import '../static/css/App.css';
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import CourseAbout from './CourseAbout';
import Organization from './Organization';

const store = createStore(reducer,applyMiddleware(thunk))

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/:id" component={CourseAbout} />
          <Route path="/org" component={Organization} />
        </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
