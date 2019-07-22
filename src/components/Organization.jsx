import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchOrg,
  fetchAboutOrg,
  fetchAboutOrgList
} from "../store/organizations/action";
import "animate.css/animate.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Header from "./Header";
// import HeaderBackground from '../containers/HeaderBackground';
// import HeaderTitle from '../containers/HeaderTitle';
import ListCard from "../containers/ListCard";
import scroll from "./scroll";
import ButtonScrollToTop from "../containers/ButtonScrollToTop";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Organizations extends Component {
  componentDidMount() {
    this.props.fetchOrg();
    scroll();
  }

  postIdAPI(id) {
    this.props.fetchAboutOrg(id);
    this.props.fetchAboutOrgList(id);
  }

  render() {
    const { data, loading } = this.props;
    const OrgList = data.map(item => {
      return (
        <ListCard
          key={item.name + item.slug}
          name={item.name}
          slug={item.slug}
          logo={item.logo}
          image_background={item.image_background}
          url={this.props.match.url}
          handleClick={this.postIdAPI.bind(this)}
        />
      );
    });

    return (
      <React.Fragment>
        <Header />
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
          <div className="container d-flex flex-wrap flex-row">{OrgList}</div>
        </div>
        <ButtonScrollToTop />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.organizations.items,
  loading: state.organizations.loading
});

const mapDispatchToProps = {
  fetchOrg,
  fetchAboutOrg,
  fetchAboutOrgList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Organizations);
