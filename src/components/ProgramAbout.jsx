import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAboutProgram, fetchAboutProgramList } from '../store/programs/action';
import 'animate.css/animate.min.css';
import CourseCard from'./CourseCard';
import Header from './Header';

class ProgramAbout extends Component {

  componentDidMount() {
    this.props.fetchAboutProgram(this.props.match.params.program)
    this.props.fetchAboutProgramList()
  }

    render(){
        const { data,course_data,match } = this.props
        // console.log(data_card.map(item=>item.program===match.params.program));
        // console.log(program_data);
        
        const ProgramAboutRender = (
              <div className="animated fadeIn" key={data.short_name}>
              <div className="container">
                <h1>{data.name}</h1>
                <h2>{data.description}</h2>
              </div>
            </div>
            )

        let ProgramAboutCourseListRender = course_data.map(element =>
            element.program_slug===match.params.program ? <CourseCard item={element.course} key={element.course.course_image_url} /> : null
          )

      return (
      <React.Fragment>
        <Header />
        {ProgramAboutRender}
        <div className='container'>
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