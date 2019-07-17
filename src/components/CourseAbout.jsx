import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAbout } from "../store/course_about/action";
import { fetchEnrollState } from "../store/user/action";
import "animate.css/animate.min.css";
import ButtonEnroll from "../containers/ButtonEnroll";
import ButtonReadMore from "../containers/ButtonReadMore";
import dompurify from "dompurify";
import AboutRender from "../containers/AboutRender";
import scroll from "./scroll";
import ButtonScrollToTop from "../containers/ButtonScrollToTop";
//background-image: url('//openedu.urfu.ru/files/courses_catalog/bg-nav.jpeg');
import { IoMdArrowBack } from "react-icons/io";
import { IconContext } from "react-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let backImg = {
  // backgroundImage: "url('//openedu.urfu.ru/files/courses_catalog/bg-nav.jpeg')",
  background: "url('http://itoo.urfu.ru/Content/images/bg.jpg') repeat center 0"
  // backgroundPosition: "center",
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  // width: "100%",
  // height: "100%",
  // position: "absolute",
  // zIndex: "-99999",
  // backgroundPositionY: "top"
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
          class={"top-txt-container-sub"}
          height={100}
        />
        {/* <div style={{ ...backImg }}></div> */}
        <div
          className="container pb-5 pt-3 mb-5 p-custom-2"
          style={{ ...backImg }}
        >
          <div
            className="jumbotron animated fadeIn text-custom-dark mb-3 p-0"
            style={{ borderRadius: "0", ...backImg }}
          >
            {this.props.loading && this.props.data.length === 0 ? (
              <div
                className="d-flex flex-row justify-content-center align-items-center"
                style={{ width: "100%", height: "350px" }}
              >
                <FontAwesomeIcon
                  icon={faSpinner}
                  size="3x"
                  spin
                  color="#000"
                  style={{ width: "100%" }}
                />
              </div>
            ) : null}
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row">
                <button
                  className="btn btn-primary m-3 buttonBackPC d-flex"
                  onClick={this.props.history.goBack}
                >
                  <IconContext.Provider value={{ size: "2em" }}>
                    <IoMdArrowBack />
                  </IconContext.Provider>
                </button>
              </div>
              <div className="d-flex flex-row">
                {isAuth && course_enroll_user ? (
                  <ButtonReadMore value={this.props.match.params.id} />
                ) : (
                  <ButtonEnroll value={this.props.match.params.id} />
                )}
              </div>
            </div>
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
  course_enroll_user: state.user.course_enroll_user,
  loading: state.course_about.loading
});

const mapDispatchToProps = {
  fetchAbout,
  fetchEnrollState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseAbout);
