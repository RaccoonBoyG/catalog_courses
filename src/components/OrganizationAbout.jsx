import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAboutOrg,
  fetchAboutOrgList
} from "../store/organizations/action";
import "animate.css/animate.min.css";
import AboutRender from "../containers/AboutRender";
import CourseListRender from "../containers/CourseListRender";
import scroll from "./scroll";
import ButtonScrollToTop from "../containers/ButtonScrollToTop";

let backImg = {
  background: "url('http://itoo.urfu.ru/Content/images/bg.jpg') repeat center 0"
};

class OrganizationAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_local: []
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    await this.props.fetchAboutOrg(this.props.match.params.org);
    await this.props.fetchAboutOrgList(this.props.match.params.org);
    this.setState(prevState => ({
      ...prevState,
      data_local: this.props.data_card.courses
    }));
    scroll();
  }

  render() {
    let { data } = this.props;

    return (
      <React.Fragment>
        <AboutRender
          name={data.name}
          image_background={data.image_background}
          height={100}
          class={"top-txt-container-sub"}
        />
        <div
          className="container text-custom-dark p-3 mb-3"
          style={{ ...backImg }}
        >
          <h3 className="mb-5">Курсы</h3>
          {this.state.data_local.length <= 0 ? (
            <div style={{ height: "500px" }}>
              <h2>У данной организации пока нет курсов</h2>
            </div>
          ) : (
            <div className="row d-flex">
              <CourseListRender item={this.state.data_local} />
            </div>
          )}
        </div>
        <ButtonScrollToTop />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.organizations.items_about,
  data_card: state.organizations.items_card_about
});

const mapDispatchToProps = {
  fetchAboutOrg,
  fetchAboutOrgList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationAbout);
