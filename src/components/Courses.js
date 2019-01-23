import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCards, LoadMore} from '../store/cards/action';
import CourseCard from'./CourseCard';
import '../static/css/Courses.css';

class Courses extends Component {

  _renderItems(size) {
    return this.props.data.slice(0, size).map((item, key) => {
      return (
        <CourseCard value={item} key={key} />
      )
    });
  }

  onLoadMore(){
    this.props.dispatch(LoadMore())
  }

  componentDidMount() {
    this.props.dispatch(fetchCards())
  }

	render(){
	  return (
      <div>
        <div className="row mp-auto">
          {/* {this._loadMoreItems()} */}
          {this._renderItems(this.props.num_obj)}
          
        </div>
        <div className="load-container mp-auto">
          <button className="btn btn-dark loadmore" id='kek' onClick={ this.onLoadMore.bind(this) }>Показать ещё</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  data: state.cards.items,
  num_obj: state.cards.num_obj
})

  
export default connect(mapStateToProps)(Courses);
  