import React, { Component } from 'react';
import Courses from './Courses'
import Header from './Header';
import HeaderBackground from '../containers/HeaderBackground';
import HeaderTitle from '../containers/HeaderTitle';
import scroll from './scroll'
import ButtonScrollToTop from '../containers/ButtonScrollToTop';

class Catalog extends Component {

  componentDidMount() {
    scroll()
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <HeaderBackground />
        <HeaderTitle title={'Региональный центр компетенций'} class={'top-txt-container'} />
        <Courses />
        <ButtonScrollToTop />
      </React.Fragment>

    )
  }
}

export default Catalog;
