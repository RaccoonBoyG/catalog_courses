import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAbout } from '../store/course_about/action';
import { fetchEnrollState } from '../store/user/action';
import 'animate.css/animate.min.css';
import ButtonEnroll from '../containers/ButtonEnroll';
import ButtonReadMore from '../containers/ButtonReadMore';
import dompurify from 'dompurify';

class CourseAbout extends Component {
// _renderItems(element) {
//    this.props.data.name
//   }

  componentDidMount() {
    this.props.fetchAbout(this.props.match.params.id)
    this.props.fetchEnrollState(this.props.match.params.id)
    window.scrollTo(0, 0)
  }

    render(){
      const sanitizer = dompurify.sanitize;

      const { isAuth, data, course_enroll_user } = this.props
      return (
      <React.Fragment>
        <div className="jumbotron animated fadeIn">
          { isAuth&&course_enroll_user ? <ButtonReadMore value={this.props.match.params.id}/> : <ButtonEnroll value={this.props.match.params.id}/> }
          <div className="container">
            <h1>{data.name}</h1>
            <div className="question-text" dangerouslySetInnerHTML={{__html: sanitizer(data.overview)}}/>
          </div>
        </div>
      </React.Fragment>
      
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