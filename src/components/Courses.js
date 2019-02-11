import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCards, LoadMoreTest} from '../store/cards/action';
import CourseCard from'./CourseCard';
import '../static/css/Courses.css';
// import { faTh, faThList } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import HeaderTitle from './HeaderTitle';

class Courses extends Component {

  // slice(0,size).map ...
  
  _renderItemsCard() {
    return this.props.data.map((item, key) => {
      return (
        <CourseCard value={item} key={key} />
      )
    });
  }

  componentDidMount() {
    this.props.fetchCards()
  }

	render(){
    console.log(this.props.data)
    const {LoadMoreTest} = this.props
	  return (
      <div>
        <HeaderTitle />
        <div className="row mp-auto">
          {this._renderItemsCard()}
          
        </div>
        <div className="load-container mp-auto">
          <button className="btn btn-dark loadmore" id='kek' onClick={LoadMoreTest}>Показать ещё</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  data: state.cards.items
  // .filter(card => card.name.includes(state.cards.myValue))
  
})

const mapDispatchToProps = {
  fetchCards,
  LoadMoreTest
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Courses));
  