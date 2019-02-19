import React, { Component } from 'react';
import '../static/css/Header.css';
import '../static/css/Profile.css';

import {MEDIA_LS_URL} from '../services/openurfu';

class MyCourses extends Component {

	render(){
        return (
            <li className="nav-item">
                <a href={`${MEDIA_LS_URL}/dashboard`} className="nav-link">Мои курсы</a>
            </li>
        )
    }
}


export default MyCourses;
