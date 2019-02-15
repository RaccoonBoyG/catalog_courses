import React, { Component } from 'react';
import Courses from './Courses'
import '../static/css/App.css';



class Catalog extends Component {

  render() {
    return (
      <div className="container">
        <Courses />
      </div>
    )
  }
}

export default Catalog;
