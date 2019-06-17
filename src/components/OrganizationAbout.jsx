import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAboutOrg, fetchAboutOrgList } from '../store/organizations/action';
import 'animate.css/animate.min.css';
import CourseCard from'./CourseCard';
// import HeaderBackgroundLek from '../containers/HeaderBackgroundLek';
import AboutRender from '../containers/AboutRender';



class OrganizationAbout extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchAboutOrg(this.props.match.params.org)
    this.props.fetchAboutOrgList()
  }

    render(){
      let { data, match, course_data } = this.props

      let OrganizationAboutCourseListRender = course_data.map(element =>
          element.org_slug===match.params.org ? <CourseCard item={element.course} key={element.course.course_image_url} /> : null
        )

      return (
      <React.Fragment>
        <AboutRender 
          name={data.name}
          image_background={data.image_background}
          description={data.description}
        />
        <div className='container'>
        <h3 className='text-custom-dark mb-5'>Курсы</h3>
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