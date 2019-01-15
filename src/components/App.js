import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../store/reducers';
import thunk from 'redux-thunk';
import Courses from './Courses'
import Header from './Header'
import '../static/css/App.css';
import Footer from './Footer';

const store = createStore(reducer,applyMiddleware(thunk))


class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <Header />
        <div className="container">
          <Courses />
        </div>
      <Footer />
      </Provider>
    )
  }
}

export default App;
