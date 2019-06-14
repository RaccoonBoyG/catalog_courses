import React, { Component } from 'react';
import { connect } from 'react-redux';

import {MEDIA_LS_URL} from '../services/openurfu';

class RenderProfileYes extends Component {

	render(){
        const { data } = this.props
    return data.map((item)=>{
        return (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <a href={`${MEDIA_LS_URL}/u/${item.username}`} >
                    <li className="nav-item">
                        <img className="rounded custom-profile-img" src={item.profile_image} alt={item.username} />
                    </li>
                </a>
                <li class="nav-item dropdown">
                        <a 
                            className="nav-link dropdown-toggle" 
                            href={`${MEDIA_LS_URL}/dashboard`}
                            id="navbarDropdown" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                        >
                        {item.username}
                        </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href={`${MEDIA_LS_URL}/u/${item.username}`}>Профиль</a>
                        <a className="dropdown-item" href={`${MEDIA_LS_URL}/account/settings`}>Настройки</a>
                        <a className="dropdown-item" href={`${MEDIA_LS_URL}/logout`}>Выйти</a>
                    </div>
                    </li>
            </ul>
        )
    })
  }
}

const mapStateToProps = (state) =>({
    data: state.user.items_user
  })
  
export default connect(mapStateToProps)(RenderProfileYes);
