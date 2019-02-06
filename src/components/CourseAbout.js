import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAbout } from '../store/about/action';
import '../static/css/CourseAbout.css';
import HeaderSecond from './HeaderSecond';
import Footer from './Footer';
import 'animate.css/animate.min.css';

class CourseAbout extends Component {
    // _renderItems(element) {
    //    this.props.data.name
    //   }
    
      componentDidMount() {
        this.props.dispatch(fetchAbout(this.props.match.url.slice(1)))
      }

      componentWillUnmount(){
        this.props.dispatch(fetchAbout(this.props.match.url.slice(1)))
      }
    
        render(){
          return (
          <div>
            <HeaderSecond />
            <div className="jumbotron animated fadeIn">
              <div className="container">
                <h3 className="display-3">{this.props.data.name}</h3>
                <div className="question-text" dangerouslySetInnerHTML={{__html: this.props.data.overview}}/>
                <p><a className="btn btn-primary btn-lg" href="https://www.google.com/" role="button">Learn more »</a></p>
              </div>
            </div>
            <Footer />
          </div>
          
        )
      }
    }
    
    const mapStateToProps = (state) =>({
      data: state.about.items
    })
    
      
    export default connect(mapStateToProps)(CourseAbout);