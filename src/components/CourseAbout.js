import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAbout } from '../store/course_about/action';
import '../static/css/CourseAbout.css';
import 'animate.css/animate.min.css';

class CourseAbout extends Component {
// _renderItems(element) {
//    this.props.data.name
//   }

  componentDidMount() {
    this.props.fetchAbout(this.props.match.params.id)
  }

    render(){
      return (
      <div>
        <div className="jumbotron animated fadeIn">
          <div className="container">
            <h1>{this.props.data.name}</h1>
            <div className="question-text" dangerouslySetInnerHTML={{__html: this.props.data.overview}}/>
            <p><button className="btn btn-primary btn-lg">TODO: get enrollment state over API</button></p>
          </div>
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state) =>({
  data: state.course_about.items
})

const mapDispatchToProps = {
  fetchAbout
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CourseAbout);