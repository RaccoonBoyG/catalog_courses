import React, { Component } from 'react';
import Courses from './Courses'
import Header from './Header';
import HeaderBackground from '../containers/HeaderBackground';
import HeaderTitle from '../containers/HeaderTitle';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';

class Catalog extends Component {

  componentDidMount() {
    $(function() {
      $.fn.scrollToTop = function() {
       $(this).hide().removeAttr("href");
       if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
       var scrollDiv = $(this);
       $(window).scroll(function() {
        if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
        else $(scrollDiv).fadeIn("slow")
       });
       $(this).click(function() {
        $("html, body").animate({scrollTop: 0}, "slow")
       })
      }
     });

     $(function() {
      $(".back_to_top").scrollToTop();
     });
  }

  render() {
    return (
      <React.Fragment>
        <HeaderBackground />
        <Header />
        <HeaderTitle title={'Региональный центр компетенций'} class={'top-txt-container'} />
        <Courses />
        <button type="button" className="back_to_top btn btn-primary btn-circle"><FontAwesomeIcon icon={faArrowUp} size="2x"/></button>
      </React.Fragment>

    )
  }
}

export default Catalog;
