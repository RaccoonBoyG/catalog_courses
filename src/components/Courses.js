import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCards, LoadMore} from '../store/cards/action';
import CourseCard from'./CourseCard';
import CourseList from './CourseList';
import '../static/css/Courses.css';
// import { faTh, faThList } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

class Courses extends Component {

  _renderItemsCard(size) {
    return this.props.data.slice(0, size).map((item, key) => {
      return (
        <CourseCard value={item} key={key} />
      )
    });
  }

  _renderItemsList(size){
    return this.props.data.slice(0, size).map((item, key) => {
      return (
        <CourseList value={item} key={key} />
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
        {/* <div className="cardview-container">
            <span className="cardview"><FontAwesomeIcon icon={faTh} size="lg"/></span>
            <span className="cardview"><FontAwesomeIcon icon={faThList} size="lg"/></span>
        </div> */}

        <div className="row mp-auto">
          {/* {this._loadMoreItems()} */}
          {this._renderItemsCard(this.props.num_obj)}
          
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
  num_obj: state.cards.num_obj,
  choose: state.cards.choose
})

  
export default withRouter(connect(mapStateToProps)(Courses));
  