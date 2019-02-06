import React, { Component } from 'react';
import Courses from './Courses'
import Header from './Header'
import '../static/css/App.css';
import Footer from './Footer';
import HeaderBackground from './HeaderBackground';



class Catalog extends Component {

  render() {
    return (
    <div>
      <Header />
      <HeaderBackground />
        <div className="container">
          <Courses />
        </div>
      <Footer />
    </div>
    )
  }
}

export default Catalog;
