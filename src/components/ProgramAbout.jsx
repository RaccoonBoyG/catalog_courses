import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAboutProgram, fetchAboutProgramList } from '../store/programs/action';
import 'animate.css/animate.min.css';
import AboutRender from '../containers/AboutRender';
import CourseListRender from '../containers/CourseListRender';
import scroll from './scroll'
import ButtonScrollToTop from '../containers/ButtonScrollToTop';

class ProgramAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_local: []
    };
}

  async componentDidMount() {
    window.scrollTo(0, 0)
    await this.props.fetchAboutProgram(this.props.match.params.program)
    await this.props.fetchAboutProgramList(this.props.match.params.program)
    this.setState(prevState=>({ ...prevState,data_local: this.props.data_card.courses}) )
    scroll()
  }

    render(){
      const { data } = this.props
      return (
      <React.Fragment>
        <AboutRender 
          name={data.name}
          image_background={data.image_background}
          description={data.description}
          //button enroll program coming soon :)
        />
        <div className='container pb-3 mb-3'>
        <h3 className='text-custom-dark mb-5'>Курсы</h3>
          <div className="row d-flex">
            <CourseListRender  item={this.state.data_local} />
          </div>
        </div>
        <ButtonScrollToTop />
      </React.Fragment>
      
    )
  }
}

const mapStateToProps = state => ({
  data: state.programs.items_about,
  data_card: state.programs.items_card_about
})

const mapDispatchToProps = {
    fetchAboutProgram,
    fetchAboutProgramList
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ProgramAbout);