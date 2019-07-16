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
    const { data } = this.props;
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
        <div className="flex-row p-5 ">
          <div className="d-flex flex-wrap flex-row">{OrgList}</div>
        </div>
        <ButtonScrollToTop />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.organizations.items
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
