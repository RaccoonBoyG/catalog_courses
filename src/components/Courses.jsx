import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCards,
  LoadMoreTest,
  searchInput,
  resetSearch,
  fetchCardsAll
} from '../store/cards/action';
import CourseCard from './CourseCard';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonLoadMore from '../containers/ButtonLoadMore';
import $ from 'jquery';

class Courses extends Component {
  // slice(0,size).map ...

  _renderItemsCard() {
    console.log(this.props.data);

    return this.props.data.map((item, key) => {
      return <CourseCard value={item} key={key} />;
    });
  }

  async componentDidMount() {
    await this.props.fetchCards();
    await this.props.fetchCardsAll();
  }

  _handleTextChange(e) {
    const input_test = e.target.value;
    this.props.searchInput(input_test);

    console.log(input_test.length);
    if (input_test.length > 0) {
      $('.t-site-search-close').addClass('show_close');
    } else $('.t-site-search-close').removeClass('show_close');
  }
  _resetSearchResult() {
    this.props.resetSearch();
    $('.t-input').val(null);
    $('.t-site-search-close').removeClass('show_close');
  }

  render() {
    return (
      <React.Fragment>
        {/* <div style={{position:'sticky',top:'0', left:'0', margin:'auto'}} className="filter_pc">
          <div className="d-flex flex-row" style={{position:'absolute'}}>
            <h4 className='text-custom-dark'>Filter</h4>
          </div>
          ${show_close ? 'show_close' : ''}`}  onClick={clearInput}
        </div> */}
        <div className="container pt-3 pb-3 mb-3 mt-3 p-0 search_pc">
          <div className="flex-row">
            <div className="d-flex flex-wrap flex-row">
              <h3 className="text-custom-dark">Поиск</h3>
            </div>
            <div className="d-flex flex-row">
              <div className="flex-column p-0" style={{ width: '100%' }}>
                <div className="t-site-search-input">
                  <div className="t838__blockinput">
                    <input
                      type="text"
                      className="form-control search-slt t-input"
                      placeholder="Введите название курса"
                      onChange={e => this._handleTextChange(e)}
                    />
                    <svg
                      className="t-site-search-close"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100.4 100.4"
                      onClick={this._resetSearchResult.bind(this)}
                    >
                      <path d="M99.6 97.4L52.1 49.9 99.3 2.6c0.6-0.6 0.6-1.5 0-2.1 -0.6-0.6-1.5-0.6-2.1 0L50 47.8 2.7 0.5c-0.6-0.6-1.5-0.6-2.1 0 -0.6 0.6-0.6 1.5 0 2.1l47.3 47.3L0.4 97.4c-0.6 0.6-0.6 1.5 0 2.1 0.3 0.3 0.7 0.4 1 0.4s0.7-0.1 1-0.4l47.5-47.5 47.5 47.5c0.3 0.3 0.7 0.4 1 0.4s0.7-0.1 1-0.4C100.1 98.9 100.1 98 99.6 97.4z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* <div class="flex-column p-0">
                          <select class="form-control search-slt" id="exampleFormControlSelect1">
                              <option>Select Vehicle</option>
                              <option>Example one</option>
                              <option>Example one</option>
                              <option>Example one</option>
                              <option>Example one</option>
                              <option>Example one</option>
                              <option>Example one</option>
                          </select>
                      </div>
                      <div class="flex-column p-0" >
                          <button type="button" class="btn btn-primary wrn-btn">Поиск</button>
                      </div> */}
            </div>
          </div>
        </div>
        <div className="container pb-3 mb-3 p-0" style={{ marginTop: '5rem' }}>
          <h3 className="text-custom-dark mb-3 pl-3">Курсы</h3>
          <div className="flex-row">
            <div className="d-flex flex-wrap flex-row">
              {this.props.loading && this.props.data.length === 0 ? (
                <div
                  className="d-flex flex-row justify-content-center align-items-center"
                  style={{ width: '100%', height: '350px' }}
                >
                  <FontAwesomeIcon
                    icon={faSpinner}
                    size="3x"
                    spin
                    color="#000"
                    style={{ width: '100%' }}
                  />
                </div>
              ) : null}
              {!this.props.loading && this.props.data.length === 0 ? (
                <h3
                  className="text-custom-dark d-flex flex-row justify-content-center align-items-center"
                  style={{ width: '100%', height: '350px' }}
                >
                  Ничего не найдено :(
                </h3>
              ) : (
                this.props.data.map((item, key) => (
                  <CourseCard value={item} key={key} />
                ))
              )}
            </div>
          </div>
          {!this.props.loading &&
          this.props.buttonState &&
          this.props.data.length !== 0 ? (
            <ButtonLoadMore />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.cards.items,
  buttonState: state.cards.isHideButton,
  test: state.cards.input,
  loading: state.cards.loading
});

const mapDispatchToProps = {
  fetchCards,
  LoadMoreTest,
  searchInput,
  resetSearch,
  fetchCardsAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);
