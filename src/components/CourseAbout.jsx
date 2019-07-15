import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAbout } from '../store/course_about/action';
import { fetchEnrollState } from '../store/user/action';
import 'animate.css/animate.min.css';
import ButtonEnroll from '../containers/ButtonEnroll';
import ButtonReadMore from '../containers/ButtonReadMore';
import dompurify from 'dompurify';
import AboutRender from '../containers/AboutRender';
import scroll from './scroll';
import ButtonScrollToTop from '../containers/ButtonScrollToTop';
//background-image: url('//openedu.urfu.ru/files/courses_catalog/bg-nav.jpeg');
import { IoMdArrowBack } from 'react-icons/io';
import { IconContext } from 'react-icons';

let backImg = {
  backgroundImage: "url('//openedu.urfu.ru/files/courses_catalog/bg-nav.jpeg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: '-99999',
  backgroundPositionY: 'top'
};

class CourseAbout extends Component {
  componentDidMount() {
    this.props.fetchAbout(this.props.match.params.id);
    this.props.fetchEnrollState(this.props.match.params.id);
    window.scrollTo(0, 0);
    scroll();
  }

  render() {
    const sanitizer = dompurify.sanitize;
    const { isAuth, data, course_enroll_user } = this.props;
    return (
      <React.Fragment>
        <AboutRender
          name={data.name}
          class={'top-txt-container-sub'}
          height={321}
        />
        <div style={{ ...backImg }}></div>
        <div className="container pb-5 pt-5">
          <div className="jumbotron animated fadeIn bg-neutral-placeholder text-custom-dark2 p-custom-2 mb-3">
            <button
              className="btn btn-primary m-3"
              onClick={this.props.history.goBack}
            >
              <IconContext.Provider value={{ size: '2em' }}>
                <IoMdArrowBack />
              </IconContext.Provider>
            </button>
            {isAuth && course_enroll_user ? (
              <ButtonReadMore value={this.props.match.params.id} />
            ) : (
              <ButtonEnroll value={this.props.match.params.id} />
            )}
            <div className="container">
              <div
                className="question-text"
                dangerouslySetInnerHTML={{ __html: sanitizer(data.overview) }}
              />
            </div>
          </div>
        </div>
        <ButtonScrollToTop />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.course_about.items,
  isAuth: state.user.isAuth,
  course_enroll_user: state.user.course_enroll_user
});

const mapDispatchToProps = {
  fetchAbout,
  fetchEnrollState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseAbout);
