import React, { Component } from 'react';
import Courses from './Courses'
import Header from './Header'
import '../static/css/App.css';
import Footer from './Footer';



class Catalog extends Component {

  render() {
    return (
    <div>
      <Header />
        <div className="container">
          <Courses />
        </div>
      <Footer />
    </div>
    )
  }
}

export default Catalog;
