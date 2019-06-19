import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAboutProgram, fetchAboutProgramList } from '../store/programs/action';
import 'animate.css/animate.min.css';
import CourseCard from'./CourseCard';
import AboutRender from '../containers/AboutRender';

class ProgramAbout extends Component {

  componentDidMount() {
    this.props.fetchAboutProgram(this.props.match.params.program)
    this.props.fetchAboutProgramList(this.props.match.params.program)
  }

    render(){
        const { data,course_data,match } = this.props
        
        let ProgramAboutCourseListRender = course_data.map(element =>
            element.program_slug===match.params.program ? <CourseCard item={element.course} key={element.course.course_image_url} /> : null
          )

      return (
      <React.Fragment>
        <AboutRender 
          name={data.name}
          image_background={data.image_background}
          description={data.description}
          //button enroll program coming soon :)
        />
        <div className='container'>
        <h3 className='text-custom-dark mb-5'>Курсы</h3>
          <div className="row d-flex">
            {ProgramAboutCourseListRender}
          </div>
        </div>
      </React.Fragment>
      
    )
  }
}

const mapStateToProps = state => ({
  data: state.programs.items_about,
  data_card: state.programs.items_card_about,
  course_data: state.programs.items_card_about.map(item => item)
})

const mapDispatchToProps = {
    fetchAboutProgram,
    fetchAboutProgramList
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ProgramAbout);