import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAboutProgram, fetchAboutProgramList, fetchEnrollProgram } from '../store/programs/action';
import 'animate.css/animate.min.css';
import AboutRender from '../containers/AboutRender';
import CourseListRender from '../containers/CourseListRender';
import scroll from './scroll';
import ButtonScrollToTop from '../containers/ButtonScrollToTop';
import { ObjectContent } from '../containers/Content';
import Spinner from '../containers/Spinner';

class ProgramAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_local: []
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    await this.props.fetchAboutProgram(this.props.match.params.program);
    await this.props.fetchEnrollProgram(this.props.match.params.program);
    await this.props.fetchAboutProgramList(this.props.match.params.program);
    this.setState(prevState => ({
      ...prevState,
      data_local: this.props.data_card.courses
    }));
    scroll();
  }

  render() {
    const { data, loading, isAuth, history, data_enroll } = this.props;
    if (loading) {
      return <Spinner />;
    }
    return (
      <React.Fragment>
        <AboutRender
          name={data.name}
          image_background={data.image_background}
          height={100}
          class={'top-txt-container-sub'}
          program_slug={this.props.match.params.program}
          search={history.location.search}
          isAuth={isAuth}
          data_enroll={data_enroll}
        />
        <div className="container text-custom-dark p-3 mb-3">
          <ObjectContent data_content={data.content} />
          <div className="text-custom-dark2 mt-3 p-5 shadow-sm bg-white">
            <h3>Онлайн-модуль</h3>
            {this.state.data_local.length <= 0 ? (
              <div style={{ height: '300px' }}>
                <h2>У данной программы пока нет курсов</h2>
              </div>
            ) : (
              <div className="row d-flex">
                <CourseListRender item={this.state.data_local} />
              </div>
            )}
          </div>
        </div>
        <ButtonScrollToTop />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.programs.items_about,
  data_card: state.programs.items_card_about,
  loading: state.programs.loading,
  isAuth: state.user.isAuth,
  data_enroll: state.programs.items_enroll
});

const mapDispatchToProps = {
  fetchAboutProgram,
  fetchAboutProgramList,
  fetchEnrollProgram
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgramAbout);
