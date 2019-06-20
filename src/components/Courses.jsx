import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCards, LoadMoreTest} from '../store/cards/action';
import CourseCard from'./CourseCard';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonLoadMore from '../containers/ButtonLoadMore';

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
      <React.Fragment>
        {/* <div className='flex-row d-inline-flex'>
          <div className='col-2 filter-sticky d-inline-flex'>
            <div className='flex-wrap d-inline-flex'>
              <div className="filter">
              <div className="card">
                <article className="card-group-item">
                  <header className="card-header">
                    <h6 className="title">Brands </h6>
                  </header>
                  <div className="filter-content">
                    <div className="card-body">
                    <form>
                      <div className='checkbox'>
                        <label>
                        <input type="checkbox" value=""/>
                        <span className="cr"><FontAwesomeIcon className='cr-icon' icon={faCheck} size="1x"/></span>
                            Mersedes Benz
                        </label> 
                      </div>
                      <div className='checkbox'>
                        <label>
                        <input type="checkbox" value=""/>
                        <span className="cr"><FontAwesomeIcon className='cr-icon' icon={faCheck} size="1x"/></span>
                            KEK
                        </label> 
                      </div>
                      <div className='checkbox'>
                        <label>
                        <input type="checkbox" value=""/>
                        <span className="cr"><FontAwesomeIcon className='cr-icon' icon={faCheck} size="1x"/></span>
                            LOL
                        </label> 
                      </div>
                    </form>

                    </div> 
                  </div>
                </article> 
                
                <article className="card-group-item">
                  <header className="card-header">
                    <h6 className="title">Choose type </h6>
                  </header>
                  <div className="filter-content">
                    <div className="card-body">
                    <div className='checkbox'>
                      <label>
                        <input type="checkbox" value=""/>
                        <span className="cr"><FontAwesomeIcon className='cr-icon' icon={faCheck} size="1x"/></span>
                            Mersedes Benz
                        </label> 
                      </div>
                      <div className='checkbox'>
                        <label>
                        <input type="checkbox" value=""/>
                        <span className="cr"><FontAwesomeIcon className='cr-icon' icon={faCheck} size="1x"/></span>
                            KEK
                        </label> 
                      </div>
                      <div className='checkbox'>
                        <label>
                        <input type="checkbox" value=""/>
                        <span className="cr"><FontAwesomeIcon className='cr-icon' icon={faCheck} size="1x"/></span>
                            LOL
                        </label> 
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              </div>
            </div>
          </div> */}
          <div className='container pb-3 mb-3'>
            <h3 className='text-custom-dark pl-3 mb-3'>Курсы</h3>
            <div className='flex-row'>
              <div className='d-flex flex-wrap flex-row'>
                {this._renderItemsCard()}
              </div>
            </div>
            {this.props.buttonState ? <ButtonLoadMore /> : null}
          </div>
      </React.Fragment>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
  