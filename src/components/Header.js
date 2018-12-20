import React, { Component } from 'react';
import '../static/css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

	render(){
	  return (
    <div className="navbar-container">
    <div className="nav-background"></div>
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faGraduationCap} size="1x"/> Ural Federal University</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Support</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
        <div className="nav-tilte-image"><h2>Каталог онлайн-курсов</h2><FontAwesomeIcon icon={faAppleAlt} size="2x"/> </div>
    </div>
    )
  }
}

  
export default Header;
