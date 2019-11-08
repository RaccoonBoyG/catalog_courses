import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchPrograms, fetchAboutProgram } from '../store/programs/action';
import { fetchProjects } from "../store/projects/action";
import AboutRender from "../containers/AboutRender";
import "animate.css/animate.min.css";

// import Header from './Header';
// import ListCard from '../containers/ListCard';
import scroll from "./scroll";
import ButtonScrollToTop from "../containers/ButtonScrollToTop";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProjectsAbout extends Component {
  constructor(props) {
    super(props);

    this.postIdAPI = this.postIdAPI.bind(this);
  }

  componentDidMount() {
    // this.props.fetchProjects();
    this.props.fetchProjects();
    scroll();
  }

  postIdAPI(id) {
    // this.props.fetchAboutProgram(id);
  }

  render() {
    const { loading, data } = this.props;
    const ProjectAbout = data.map(item => {
      return (
        //   key={item.name + item.slug}
        //   name={item.name}
        //   slug={item.slug_program}
        //   logo={item.logo}
        //   image_background={item.image_background}
        //   url={this.props.match.url}
        //   handleClick={this.postIdAPI}
        <AboutRender
          name={item.name}
          image_background={item.image_background}
          height={100}
          class={"top-txt-container-sub"}
        />
      );
    });
    return (
      <React.Fragment>
        {ProjectAbout}
        <div className="d-flex flex-column margin-custom-catalog">
          {loading && data.length === 0 ? (
            <div
              className="d-flex flex-row justify-content-center align-items-center "
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
          <div className="container d-flex flex-wrap flex-row"></div>
        </div>
        <ButtonScrollToTop />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.projects.items,
  loading: state.projects.loading
});

const mapDispatchToProps = {
  fetchProjects
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsAbout);
