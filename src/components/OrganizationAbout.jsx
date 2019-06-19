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
    this.props.fetchAboutOrgList(this.props.match.params.org)
  }

    render(){
      let { data, data_card, match, course_data } = this.props

      let test = data_card.courses
      // TODO : return data from api 
      // let test = data_card.course.map(function(element){
      //   // console.log(element)
      //   return element
      // })
      console.log(test);
      
      test.forEach((e,k)=>{console.log(e) })
      
      console.log(typeof(data_card))
      

      // let OrganizationAboutCourseListRender = data_card.map(element =><CourseCard item={element.course.map(e=> e)} key={element.course.course_image_url} />)
      // let OrganizationAboutCourseListRender = data_card.course.map(element => <CourseCard item={element} key={element.course_image_url} /> )

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
            {/* {OrganizationAboutCourseListRender} */}
          </div>
        </div>
      </React.Fragment>
      
    )
  }
}

const mapStateToProps = state => ({
  data: state.organizations.items_about,
  data_card: state.organizations.items_card_about,
})

const mapDispatchToProps = {
    fetchAboutOrg,
    fetchAboutOrgList
}
  
export default connect(mapStateToProps,mapDispatchToProps)(OrganizationAbout);