import React, { Component } from 'react';
import '../static/css/Header.css';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'

import {MEDIA_LS_URL} from '../services/openurfu';

class RenderProfileYes extends Component {

	render(){
        const { data } = this.props
    return data.map((item)=>{
        return (
        <div>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <img className="rounded" src={item.profile_image} alt={item.username} />
                </li>
                <li className="nav-item">
                    <p>{item.username}</p>
                </li>
            </ul>
        </div>
        )
    })
  }
}

const mapStateToProps = (state) =>({
    data: state.user.items_user
  })
  
export default connect(mapStateToProps)(RenderProfileYes);
