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

  changeEnroll(course_key){
    let postEnroll = fetch(`${MEDIA_LS_URL}/change_enrollment`, {
      course_id:	`${course_key}`,
      enrollment_action:	`enroll`
    })
    console.log(postEnroll);
    
  }

    render(){
      return (
        <button className="btn btn-primary btn-lg" onClick={this.changeEnroll(this.state.value)}>Записаться на курс</button>
    )
  }
}

const mapStateToProps = (state) =>({
  isAuth: state.user.isAuth
})

const mapDispatchToProps = {
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ButtonEnroll);