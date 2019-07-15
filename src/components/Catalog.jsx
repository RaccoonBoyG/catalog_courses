import React, { Component } from 'react';
import Courses from './Courses';
import Header from './Header';
// import HeaderBackground from '../containers/HeaderBackground';
// import HeaderTitle from '../containers/HeaderTitle';
import scroll from './scroll';
import ButtonScrollToTop from '../containers/ButtonScrollToTop';

class Catalog extends Component {
  componentDidMount() {
    scroll();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <HeaderBackground /> */}
        {/* <HeaderTitle title={'Онлайн-курсы УрФУ'} class={'top-txt-container-sub'} /> */}
        <Courses />
        <ButtonScrollToTop />
      </React.Fragment>
    );
  }
}

export default Catalog;
