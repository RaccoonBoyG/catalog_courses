import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAbout } from '../store/course_about/action';
import { fetchEnrollState } from '../store/user/action';
import '../static/css/CourseAbout.css';
import 'animate.css/animate.min.css';
import ButtonEnroll from '../containers/ButtonEnroll';
import ButtonReadMore from '../containers/ButtonReadMore';

class CourseAbout extends Component {
// _renderItems(element) {
//    this.props.data.name
//   }

  componentDidMount() {
    this.props.fetchAbout(this.props.match.params.id)
    this.props.fetchEnrollState(this.props.match.params.id)
  }

    render(){
      const { isAuth, data, course_enroll_user } = this.props
      console.log(course_enroll_user, 'course_enroll_user', this.props)
      return (
      <div>
        <div className="jumbotron animated fadeIn">
          {isAuth&&course_enroll_user ? <ButtonReadMore /> : <ButtonEnroll /> }
          <div className="container">
            <h1>{data.name}</h1>
            <div className="question-text" dangerouslySetInnerHTML={{__html: data.overview}}/>
          </div>
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state) =>({
  data: state.course_about.items,
  isAuth: state.user.isAuth,
  course_enroll_user: state.user.course_enroll_user
})

const mapDispatchToProps = {
  fetchAbout,
  fetchEnrollState
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CourseAbout);