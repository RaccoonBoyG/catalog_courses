import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import Courses from './Courses'
import Header from './Header'
import '../static/css/App.css';

const store = createStore(reducer,applyMiddleware(thunk))


class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <Header />
        <div className="container"> 
            {/* {this.renderCard()} */}
            <Courses />
        </div>
      </Provider>
    )
  }
}

export default App;
