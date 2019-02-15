import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrograms } from '../store/programs/action';
import { fetchAboutProgram } from '../store/program_about/action';
import '../static/css/CourseAbout.css';
import 'animate.css/animate.min.css';

class ProgramAbout extends Component {

  componentDidMount() {
    this.props.fetchPrograms()
    this.props.fetchAboutProgram(this.props.match.params.program)
  }

    render(){
        const { data } = this.props;
        const ProgramAboutRender = (
          data.map(item => {
            return(
              <div className="jumbotron animated fadeIn" key={item.course_id}>
              <div className="container">
                <h1>{item.active}</h1>
              </div>
            </div>
            )
          })
        )
      return (
      <div>
        {ProgramAboutRender}
      </div>
      
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  let id = ownProps.match.params.program;
  return {
    data: state.programs.items.find(item => item.short_name === id )
  }
}

const mapDispatchToProps = {
    fetchAboutProgram,
    fetchPrograms
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ProgramAbout);