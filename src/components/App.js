import React, { Component } from 'react';
import '../static/css/App.css';
import CourseCard from'./CourseCard';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import Test from './Test'

const store = createStore(reducer,applyMiddleware(thunk))


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container"> 
          <div className="row mp-auto">
            {/* {this.renderCard()} */}
            <Test />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
