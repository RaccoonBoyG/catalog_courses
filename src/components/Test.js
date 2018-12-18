import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchProducts} from '../actions/index';
import CourseCard from'./CourseCard';

class Test extends Component {
  componentDidMount(){
    this.props.dispatch(fetchProducts())
  }
	render(){
        console.log(this.props.data)
	  return (
      <div className="row mp-auto">
        {this.props.data.map((item,key)=> {
            return(
              <CourseCard value={item} key={key} /> 
            )
          })
        }
        </div>
    )
  }
}

const mapStateToProps = (state) =>({
  data: state.data.items
})

  
export default connect(mapStateToProps)(Test);
  