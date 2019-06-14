import React, { Component } from 'react';
import Courses from './Courses'
import Header from './Header';
import HeaderBackground from '../containers/HeaderBackground';
import HeaderTitle from '../containers/HeaderTitle';

class Catalog extends Component {

  render() {
    return (
      <React.Fragment>
        <HeaderBackground />
        <Header />
        <HeaderTitle title={'Региональный центр компетенций'} class={'top-txt-container'} />
        <Courses />
      </React.Fragment>

    )
  }
}

export default Catalog;
