import React, { Component } from 'react';
import '../static/css/Header.css';

import {MEDIA_LS_URL} from '../services/openurfu';

class RenderProfileNo extends Component {

	render(){

    return (
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
    )
  }
}
  
export default RenderProfileNo;
