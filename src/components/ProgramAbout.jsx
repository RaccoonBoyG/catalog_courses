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
import { Modal } from '../containers/modal';

class ProgramAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_local: []
    };
  }
  videoHandler() {
    setInterval(() => {
      var v_course = document.querySelector('video#course_instruction_data');
      var v_webinar = document.querySelector('video#webinar_instruction_data');
      if (document.querySelector('#webinar_instruction').getAttribute('aria-hidden') === 'true') {
        v_webinar.pause();
      }
      if (document.querySelector('#course_instruction').getAttribute('aria-hidden') === 'true') {
        v_course.pause();
      }
    }, 500);
  }

  StopVideoWebinar() {
    var v_webinar = document.querySelector('video#webinar_instruction_data');
    v_webinar.pause();
  }

  StopVideoCourse() {
    var v_course = document.querySelector('video#course_instruction_data');
    v_course.pause();
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
    this.videoHandler();
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
        <Modal program_slug={this.props.match.params.program} StopVideoWebinar={this.StopVideoWebinar} StopVideoCourse={this.StopVideoCourse} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProgramAbout);
