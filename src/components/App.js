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
import Header from './Header';
import {composeWithDevTools} from 'redux-devtools-extension'
import Programs from './Programs';
import ProgramAbout from './ProgramAbout';
import HeaderBackground from './HeaderBackground';
import Footer from './Footer';

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <HeaderBackground />
            <Switch>
              <Route exact path="/" component={Catalog} />
              <Route path="/org" component={Organization} />
              <Route path="/programs" component={Programs} />
              <Route path="/:id" component={CourseAbout} />
              <Route path="/programs/:program/" component={ProgramAbout} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
