import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrograms, fetchAboutProgram } from '../store/programs/action';
import 'animate.css/animate.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Header from './Header';
import HeaderBackground from '../containers/HeaderBackground';

class Programs extends Component {

  componentDidMount() {
    this.props.fetchPrograms()
  }

  postIdAPI(id){
    this.props.fetchAboutProgram(id)
  }

    render(){
      const { data } = this.props
      const ProgramsList = (
        data.map(item =>{
          return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4" key={item.id}>
            <Link to={{pathname: `${this.props.match.url}/${item.slug_program}`}} onClick={this.postIdAPI.bind(this,item.slug_program)}>
              <div className="card card-org">
                <div className="hovereffect">
                    <img className="card-img card-org-img" src={item.logo} alt={item.name}/>
                    <div className="overlay">
                    </div>
                  <div className="card-body card-org-body" data-toggle="tooltip" data-placement="left" title={item.name} >
                  <p className="d-inline-block">
                    <FontAwesomeIcon icon={faGraduationCap} size="1x"/> {item.name}
                  </p>
                  </div>
                </div>
              </div>
            </Link>
            </div>
          )
        })
      )
      return (
        <React.Fragment>
          <HeaderBackground height={350} />
          <Header />
          <div className="container mb-5 p-5">
              <div className="row ">
                  {ProgramsList}
              </div>
          </div>
        </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>({
  data: state.programs.items
})

const mapDispatchToProps = {
  fetchPrograms,
  fetchAboutProgram
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Programs);