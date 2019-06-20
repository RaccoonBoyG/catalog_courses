import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrg, fetchAboutOrg, fetchAboutOrgList } from '../store/organizations/action';
import 'animate.css/animate.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';
import HeaderBackground from '../containers/HeaderBackground';
import HeaderTitle from '../containers/HeaderTitle';
import ListCard from '../containers/ListCard';


class Organizations extends Component {
  // _renderItems(element) {
  //    this.props.data.name
  //   }

  componentDidMount() {
    this.props.fetchOrg()
  }

  postIdAPI(id) {
    this.props.fetchAboutOrg(id)
    this.props.fetchAboutOrgList(id)
  }

  render() {
    const { data } = this.props
    const OrgList = (
      data.map(item => {
        return (
          <ListCard 
            key={item.name+item.slug}
            name={item.name}
            slug={item.slug}
            logo={item.logo}
            image_background={item.image_background}
            url={this.props.match.url}
            handleClick={this.postIdAPI.bind(this)}
          />
        )
      })
    )

    return (
      <React.Fragment>
        <HeaderBackground height={350} />
        <Header />
        <HeaderTitle title={'Организации'} class={'top-txt-container-sub'} />
        <div className='flex-row p-5 '>
          <div className='d-flex flex-wrap flex-row'>
            {OrgList}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.organizations.items
})

const mapDispatchToProps = {
  fetchOrg,
  fetchAboutOrg,
  fetchAboutOrgList
}

export default connect(mapStateToProps, mapDispatchToProps)(Organizations);