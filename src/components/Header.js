import React, { Component } from 'react';
import '../static/css/Header.css';
import { searchInput } from '../store/cards/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../static/img/logo_full.png'
import Search from './Search';

class Header extends Component {

    handlerInputSearch(e){
        this.props.dispatch(searchInput(e.target.value))
    }

	render(){
	  return (
        <div className="navbar-container">
        <div className="filter-back"></div>
            <nav className="navbar navbar-expand-lg navbar-light ">

            <a className="navbar-brand" href="/">
                <img className="logo" src={logo} alt="Открытые образовательные программы"/>
             </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto">
                <Search />
            </ul>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to='/org' className="nav-link">Организации</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Программы</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">О нас</a>
                </li>
            </ul>
                <div>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="https://courses.openedu.urfu.ru/register">Регистрация</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://courses.openedu.urfu.ru/login">Вход</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
  }
}

const mapStateToProps = (state) =>({
    input: state.cards.myValue,
  })
  
export default connect(mapStateToProps)(Header);
