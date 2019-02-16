import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAboutProgram, fetchAboutProgramList } from '../store/program_about/action';
import '../static/css/CourseAbout.css';
import 'animate.css/animate.min.css';
import CourseCard from'./CourseCard';

class ProgramAbout extends Component {

  componentDidMount() {
    this.props.fetchAboutProgram(this.props.match.params.program)
    this.props.fetchAboutProgramList()
  }

    render(){
        const { data,course_data } = this.props
        const ProgramAboutRender = (
              <div className="jumbotron animated fadeIn" key={data.short_name}>
              <div className="container">
                <h1>{data.name}</h1>
                <h2>{data.description}</h2>
              </div>
            </div>
            )
          const ProgramAboutCourseListRender = (
            course_data.map(item => <CourseCard item={item} key={item.course_image_url} />)
          )
      return (
      <div>
        {ProgramAboutRender}
        <div className="row mp-auto">
          {ProgramAboutCourseListRender}
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  data: state.program_about.items_about,
  data_card: state.program_about.items_card_about,
  course_data: state.program_about.items_card_about.map(item => item.course)
})

const mapDispatchToProps = {
    fetchAboutProgram,
    fetchAboutProgramList
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ProgramAbout);