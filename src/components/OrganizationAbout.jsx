import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAboutOrg, fetchAboutOrgList } from '../store/organizations/action';
import 'animate.css/animate.min.css';
import AboutRender from '../containers/AboutRender';
import CourseListRender from '../containers/CourseListRender';


class OrganizationAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_local: []
    };
}

  async componentDidMount() {
    window.scrollTo(0, 0)
    await this.props.fetchAboutOrg(this.props.match.params.org)
    await this.props.fetchAboutOrgList(this.props.match.params.org)
    this.setState(prevState=>({ ...prevState,data_local: this.props.data_card.courses}) )
  }

    render(){
      let { data } = this.props
      return (
      <React.Fragment>
        <AboutRender 
          name={data.name}
          image_background={data.image_background}
          description={data.description}
        />
        <div className='container pb-3 mb-3'>
        <h3 className='text-custom-dark mb-5'>Курсы</h3>
          <div className="row d-flex">
            <CourseListRender item={this.state.data_local} />
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