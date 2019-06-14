import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAboutOrg, fetchAboutOrgList } from '../store/organizations/action';
import 'animate.css/animate.min.css';
import CourseCard from'./CourseCard';
import Header from './Header';
// import HeaderBackgroundLek from '../containers/HeaderBackgroundLek';

class OrganizationAbout extends Component {

  componentDidMount() {
    this.props.fetchAboutOrg(this.props.match.params.org)
    this.props.fetchAboutOrgList()
  }

    render(){
        const { data,course_data,match } = this.props
        // console.log(data_card.map(item=>item.program===match.params.program));
        // console.log(match.params);
        const OrganizationAboutRenderLektorium = (
          <React.Fragment>
            <Header />
            {/* <HeaderBackgroundLek /> */}
          <div className="animated fadeIn" key={data.short_name}>
          <div className="container">
            <h1 className="text-white">{data.name}</h1>
            <p className="text-white">{data.description}</p>
          </div>
        </div>
        </React.Fragment>
        )
        const OrganizationAboutRender = (
            <React.Fragment>
              <Header />
              <div className=" animated fadeIn" key={data.short_name}>
              <div className="container">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
              </div>
            </div>
            </React.Fragment>
            )

        let OrganizationAboutCourseListRender = course_data.map(element =>
            element.org_slug===match.params.org ? <CourseCard item={element.course} key={element.course.course_image_url} /> : null
          )

      return (
      <React.Fragment>
        {match.params.org==='lek' ? OrganizationAboutRenderLektorium : OrganizationAboutRender }
        <div className='container'>
          <div className="row d-flex">
            {OrganizationAboutCourseListRender}
          </div>
        </div>
      </React.Fragment>
      
    )
  }
}

const mapStateToProps = state => ({
  data: state.organizations.items_about,
  data_card: state.organizations.items_card_about,
  course_data: state.organizations.items_card_about.map(item => item)
})

const mapDispatchToProps = {
    fetchAboutOrg,
    fetchAboutOrgList
}
  
export default connect(mapStateToProps,mapDispatchToProps)(OrganizationAbout);