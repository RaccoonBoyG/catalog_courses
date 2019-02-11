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
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/org" component={Organization} />
          <Route path="/:id" component={CourseAbout} />
        </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
