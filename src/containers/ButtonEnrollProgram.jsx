import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'animate.css/animate.min.css';
import { MEDIA_LS_URL } from '../services/openurfu';
import $ from 'jquery';

class ButtonEnrollProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   modes_data: this.props.modes_data
    };
  }

  getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = $.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  render() {
    const { isAuth, program_slug } = this.props;
    let button_enroll_program = (
      <a
        className="btn btn-light btn-lg mt-2 d-flex"
        href={`${MEDIA_LS_URL}/api/itoo_api/verified_profile/profile/?program_slug=${program_slug}`}
        style={{ borderRadius: 0 }}
      >
        Записаться на программу
      </a>
    );
    let button_auth = (
      <a href={`${MEDIA_LS_URL}/login`} id="href" style={{ borderRadius: 0, textDecoration: 'none' }}>
        <button className="btn btn-light btn-lg mt-2 d-flex" style={{ borderRadius: 0 }}>
          Записаться на программу
        </button>
      </a>
    );
    return isAuth ? button_enroll_program : button_auth;
  }
}

const mapStateToProps = state => ({
  isAuth: state.user.isAuth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonEnrollProgram);
