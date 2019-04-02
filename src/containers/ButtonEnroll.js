import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../static/css/CourseAbout.css';
import 'animate.css/animate.min.css';
import  { MEDIA_LS_URL } from '../services/openurfu';
import $ from 'jquery';

class ButtonEnroll extends Component {
  constructor(props){
    super(props);
    this.state = {
        value: this.props.value
    }
}

  getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = $.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  async changeEnroll(){
    let token = this.getCookie('csrftoken');
    let params = {
      course_id:	`${this.state.value}`,
      enrollment_action:	`enroll`
    }
    let formData = new FormData();
    for (var i in params){
      formData.append(i, params[i])
    }
    let postEnroll = await fetch(`${MEDIA_LS_URL}/change_enrollment`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "text-plain, */*",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": token
       },
      method: 'post',
      credentials: "same-origin",
      body: formData
    })
    console.log(await postEnroll);
    
  }

    render(){
      return (
        // <form id='form'>
          <button className="btn btn-primary btn-lg" onClick={this.changeEnroll.bind(this)}>Записаться на курс</button>
        // </form>
        
    )
  }
}

const mapStateToProps = (state) =>({
  isAuth: state.user.isAuth
})

const mapDispatchToProps = {
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ButtonEnroll);