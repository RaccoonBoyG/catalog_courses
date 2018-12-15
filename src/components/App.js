import React, { Component } from 'react';
import '../static/css/App.css'
import CourseCard from'./CourseCard'

class App extends Component {

  render() {
    return (
        <div className="container"> 
          <div className="row mp-auto">
            <ResponseCourses />
          </div>
        </div>
    )
  }
}

class ResponseCourses extends Component{
  constructor(){
    super();
    this.state = {data : [] };
  }

  async componentDidMount(){
    const response = await fetch('https://courses.openedu.urfu.ru/api/courses/v1/courses/');
    const json = await response.json();
    this.setState({ data: json.results });
  }

  renderCard(){
    return this.state.data.map((item, index) => {
      return (
        <CourseCard value={item} key={index}/>
      )
    })
  }

  render() {
    return (
      this.renderCard()
    
    )
  }
}

export default App;
