import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCards} from '../store/cards/action';
import CourseCard from'./CourseCard';

class Courses extends Component {
  _loadMoreItems(){
    // fetch page 0
    this.props.dispatch(fetchCards());
  }

  _renderItems() {
      return this.props.data.map((item, key) => {
        return(
          <CourseCard value={item} key={key} /> 
        )
      });
  }

  componentDidMount() {
    this._loadMoreItems()
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1100)
      // this.props.data.length
    ) {
      console.log("FETCH_DATA")
    }
  }

	render(){
	  return (
      <div className="row mp-auto">
        {/* {this._loadMoreItems()} */}
        {this._renderItems()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  data: state.cards.items
})

  
export default connect(mapStateToProps)(Courses);
  