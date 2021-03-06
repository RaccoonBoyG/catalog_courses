import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../static/css/CourseAbout.css';
import 'animate.css/animate.min.css';
import  { MEDIA_LS_URL } from '../services/openurfu';

class ButtonReadMore extends Component {
  constructor(props){
    super(props);
    this.state = {
        value: this.props.value
    }
}

    render(){
      let url = `${MEDIA_LS_URL}/courses/${this.state.value}/info`
      return (
        <a href={url}>
          <button className="btn btn-primary btn-lg">Перейти к курсу</button>
        </a>
        
    )
  }
}

const mapStateToProps = (state) =>({
  isAuth: state.user.isAuth
})

const mapDispatchToProps = {
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ButtonReadMore);