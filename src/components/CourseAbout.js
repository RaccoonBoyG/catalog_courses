import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchAbout} from '../store/about/action';
import '../static/css/CourseAbout.css';

class CourseAbout extends Component {
    // _renderItems(size) {
    //     return this.props.data.slice(0, size).map((item, key) => {
    //       return (
    //         <CourseCard value={item} key={key} />
    //       )
    //     });
    //   }
    
      componentDidMount() {
        this.props.dispatch(fetchAbout())
      }
    
        render(){
          return (
          <div>
            <div className="row mp-auto">
            {console.log(this.props.data)}
            </div>
          </div>
        )
      }
    }
    
    const mapStateToProps = (state) =>({
      data: state.cards.items
    })
    
      
    export default connect(mapStateToProps)(CourseAbout);