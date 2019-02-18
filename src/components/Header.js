import React, { Component } from 'react';
import '../static/css/Header.css';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'

import logo from '../static/img/logo_full.png'
import Search from './Search';
import { fetchUserState } from '../store/user/action';
import {MEDIA_LS_URL} from '../services/openurfu';

class Header extends Component {

    componentDidMount() {
        this.props.fetchUserState()
    }

	render(){
        console.log(this.props.data);
        
	  return (
        <div className="navbar-container">
        <div className="filter-back"></div>
            <nav className="navbar navbar-expand-lg navbar-light ">

            <NavLink className="navbar-brand" exact to="/">
                <img className="logo" src={logo} alt="Открытые образовательные программы"/>
             </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto">
                <Search />
            </ul>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink to='/' className="nav-link">Каталог</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/org' className="nav-link">Организации</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/programs' className="nav-link">Программы</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' className="nav-link">О нас</NavLink>
                </li>
            </ul>
                <div>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href={`${MEDIA_LS_URL}/register`}>Регистрация</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`${MEDIA_LS_URL}/login`}>Вход</a>
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
    data: state.user.itmes,
  })

const mapDispatchToProps = {
    fetchUserState
  }
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
