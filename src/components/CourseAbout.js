import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAbout } from '../store/course_about/action';
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
  }

  checkCourseEnroll(){
    const { course_id } = this.props
    course_id.map(item => {
      if(item.course_id===this.props.match.params.id){
        console.log(item.course_id,this.props.match.params.id)
      } else {
        console.log(item.course_id,this.props.match.params.id)
      }
    })
  }

    render(){
      const { isAuth, data } = this.props
      this.checkCourseEnroll()
      return (
      <div>
        <div className="jumbotron animated fadeIn">
          {isAuth ? null : <ButtonReadMore /> }
          <div className="container">
            <h1>{data.name}</h1>
            <div className="question-text" dangerouslySetInnerHTML={{__html: data.overview}}/>
              {isAuth ? <ButtonEnroll /> : null}
          </div>
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state) =>({
  data: state.course_about.items,
  isAuth: state.user.isAuth,
  course_id: state.user.course
})

const mapDispatchToProps = {
  fetchAbout
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CourseAbout);