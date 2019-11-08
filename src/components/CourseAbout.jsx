import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAbout } from "../store/course_about/action";
import {
  fetchEnrollState,
  fetchUserState,
  clearLoadingUser
} from "../store/user/action";
import "animate.css/animate.min.css";
// import ButtonEnroll from "../containers/ButtonEnroll";
// import ButtonReadMore from "../containers/ButtonReadMore";
import AboutRender from "../containers/AboutRender";
import scroll from "./scroll";
import ButtonScrollToTop from "../containers/ButtonScrollToTop";
//background-image: url('//openedu.urfu.ru/files/courses_catalog/bg-nav.jpeg');
// import { IoMdArrowBack } from "react-icons/io";
// import { IconContext } from "react-icons";
import Spinner from "../containers/Spinner";

// let backImg = {
// backgroundImage: "url('//openedu.urfu.ru/files/courses_catalog/bg-nav.jpeg')",
// background: "url('http://itoo.urfu.ru/Content/images/bg.jpg') repeat center 0"
// backgroundPosition: "center",
// backgroundSize: "cover",
// backgroundRepeat: "no-repeat",
// width: "100%",
// height: "100%",
// position: "absolute",
// zIndex: "-99999",
// backgroundPositionY: "top"
// };

class CourseAbout extends Component {
  componentWillMount() {
    this.props.clearLoadingUser();
    this.props.fetchUserState();
  }
  componentDidMount() {
    this.props.fetchUserState();
    this.props.fetchAbout(this.props.match.params.id);
    window.scrollTo(0, 0);
    scroll();
  }

  render() {
    // const sanitizer = dompurify.sanitize;
    const {
      isAuth,
      data,
      course_enroll_user,
      match,
      loading_user,
      loading,
      modes_data,
      history
    } = this.props;
    if (!loading_user) {
      this.props.fetchEnrollState(this.props.match.params.id);
    }
    // var config = { ALLOWED_TAGS: ['iframe', 'p', 'div', 'br', 'b', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'img', 'strong'] };
    if (loading && data.length === 0) {
      return <Spinner />;
    }
    return (
      <React.Fragment>
        <AboutRender
          name={data.name}
          class={"top-txt-container-sub"}
          height={100}
          isAuth={isAuth}
          course_enroll_user={course_enroll_user}
          params={match.params}
          modes_data={modes_data}
          search={history.location.search}
        />
        {/* <div style={{ ...backImg }}></div> */}
        <div className="container pb-5 pt-3 mb-5 p-custom-2">
          <div
            className=" animated fadeIn text-custom-dark mb-3 p-0"
            style={{ borderRadius: "0" }}
          >
            <div className="d-flex flex-row justify-content-between">
              {/* <div className="d-flex flex-row">
                <button
                  className="btn btn-primary m-3 buttonBackPC d-flex"
                  onClick={this.props.history.goBack}
                >
                  <IconContext.Provider value={{ size: "2em" }}>
                    <IoMdArrowBack />
                  </IconContext.Provider>
                </button>
              </div> */}
            </div>
            <div className="container">
              <div
                className="question-text"
                dangerouslySetInnerHTML={{
                  __html: data.overview
                }}
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
  course_enroll_user: state.user.course_enroll_user,
  loading: state.course_about.loading,
  data_user: state.user.items_user,
  loading_user: state.user.loading,
  modes_data: state.user.course_user_modes
});

const mapDispatchToProps = {
  fetchUserState,
  fetchAbout,
  fetchEnrollState,
  clearLoadingUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseAbout);
