import React, { Component } from 'react';
import '../static/css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchInput } from '../store/cards/action';
import { connect } from 'react-redux';


class Search extends Component {

    handlerInputSearch(e){
        this.props.dispatch(searchInput(e.target.value))
    }

	render(){
	  return (
        <div className="form-inline mt-2 my-lg-0 tabindex=0"> 
            <FontAwesomeIcon icon={faSearch} size="1x"/>
            <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Найти" 
                aria-label="Search" 
                onChange={this.handlerInputSearch.bind(this)} 
            />
        </div>
    )
  }
}

const mapStateToProps = (state) =>({
    input: state.cards.myValue,
  })
  
export default connect(mapStateToProps)(Search);
