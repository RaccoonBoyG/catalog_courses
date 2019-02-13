import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCards, LoadMoreTest} from '../store/cards/action';
import CourseCard from'./CourseCard';
import '../static/css/Courses.css';
// import { faTh, faThList } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import HeaderTitle from './HeaderTitle';
import ButtonLoadMore from './ButtonLoadMore';

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
	  return (
      <div>
        <HeaderTitle />
        <div className="row mp-auto">
        
          {this._renderItemsCard()}
          
        </div>
        {this.props.buttonState ? <ButtonLoadMore /> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  data: state.cards.items,
  buttonState: state.cards.isHideButton
  
})

const mapDispatchToProps = {
  fetchCards,
  LoadMoreTest
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Courses));
  