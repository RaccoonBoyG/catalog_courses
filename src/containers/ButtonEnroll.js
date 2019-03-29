import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../static/css/CourseAbout.css';
import 'animate.css/animate.min.css';
import  { MEDIA_LS_URL } from '../services/openurfu';

class ButtonEnroll extends Component {
  constructor(props){
    super(props);
    this.state = {
        value: this.props.value
    }
}

  async changeEnroll(){
    let token = document.querySelector(`meta[name="csrftoken"]`).getAttribute(`content`);
    let opts = {
      course_id:	`${this.state.value}`,
      enrollment_action:	`enroll`
    }
    let postEnroll = await fetch(`${MEDIA_LS_URL}/change_enrollment`, {
      headers: {
        "Accept": "text-plain, */*",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-TOKEN": token
       },
      method: 'post',
      credentials: "same-origin",
      body: JSON.stringify(opts)
    })
    console.log(await postEnroll);
    
  }

    render(){
      return (
        <button className="btn btn-primary btn-lg" onClick={this.changeEnroll.bind(this)}>Записаться на курс</button>
    )
  }
}

const mapStateToProps = (state) =>({
  isAuth: state.user.isAuth
})

const mapDispatchToProps = {
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ButtonEnroll);