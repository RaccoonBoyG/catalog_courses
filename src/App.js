import React, { Component } from 'react';
import './App.css';
import './static/css/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

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


function CourseCard(props){
  let {name, start_display, number} = props.value
  let link = '//openedu.urfu.ru/files/courses_catalog/'+number+'.jpg'

  function truncate(str, len){
    var dots='...'
    var object = str.split(" ")
    if(object.length > len){
      var str_truncate =  object.splice(0,len).join(" ")+dots
    }
    else {
      var str_truncate =  object.splice(0,len).join(" ")
    }
    return str_truncate
  }

  return ( 
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
      <div className="card">
        <div className="hovereffect">
          <img className="card-img" src={link}/>
          <div className="overlay">
          </div>
        </div>
        <div className="card-body" data-toggle="tooltip" data-placement="left" title={name} >
          <p className="d-inline-block"><small className="text-muted"><FontAwesomeIcon icon={faGraduationCap} size="1x"/> Ural Fediral University</small></p>
          <p className="card-title"><strong style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{truncate(name,6)}</strong></p>
          <p className="card-text"><FontAwesomeIcon icon={faClock} size="1x"/> Начало: {start_display}</p>
          {/* <button type="button" className="btn btn-primary btn-lg" >Подробнее</button> */}
        </div>
      </div>
    </div>
  )
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
  render() {
    return this.state.data.map(item => {
      return (
        <CourseCard value={item}/>
      )
    })
  }
}

export default App;
