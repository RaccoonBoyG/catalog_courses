import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrograms, fetchAboutProgram } from '../store/programs/action';
import 'animate.css/animate.min.css';

import Header from './Header';
import ListCard from '../containers/ListCard';
import scroll from './scroll';
import ButtonScrollToTop from '../containers/ButtonScrollToTop';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Programs extends Component {
  constructor(props) {
    super(props);

    this.postIdAPI = this.postIdAPI.bind(this);
  }

  componentDidMount() {
    this.props.fetchPrograms();
    scroll();
  }

  postIdAPI(id) {
    this.props.fetchAboutProgram(id);
  }

  render() {
    const { loading, data } = this.props;
    const ProgramsList = data.map(item => {
      return (
        <ListCard
          key={item.name + item.slug}
          name={item.name}
          slug={item.slug_program}
          logo={item.logo}
          image_background={item.image_background}
          url={this.props.match.url}
          handleClick={this.postIdAPI}
        />
      );
    });
    return (
      <React.Fragment>
        <Header />
        <div className="d-flex flex-column margin-custom-catalog">
          {loading && data.length === 0 ? (
            <div className="d-flex flex-row justify-content-center align-items-center " style={{ width: '100%', height: '350px' }}>
              <FontAwesomeIcon icon={faSpinner} size="3x" spin color="#000" style={{ width: '100%' }} />
            </div>
          ) : null}
          <div className="container d-flex flex-wrap flex-row">{ProgramsList}</div>
        </div>
        <ButtonScrollToTop />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.programs.items,
  loading: state.programs.loading
});

const mapDispatchToProps = {
  fetchPrograms,
  fetchAboutProgram
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Programs);
