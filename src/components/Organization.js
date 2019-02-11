import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrg } from '../store/organizations/action';
import '../static/css/CourseAbout.css';
import Header from './Header';
import Footer from './Footer';
import 'animate.css/animate.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';

class Organizations extends Component {
// _renderItems(element) {
//    this.props.data.name
//   }

  componentDidMount() {
    this.props.fetchOrg()
  }

  _renderItem(){
    this.props.data.map((item, key)=>{
      return (
        <div className="card ">
          <div className="hovereffect">
              <img className="card-img" src={'#'} alt={item.name}/>
              <div className="overlay">
              </div>
          </div>
          <div className="card-body" data-toggle="tooltip" data-placement="left" title={item.name} >
              <p className="d-inline-block"><small className="text-muted"><FontAwesomeIcon icon={faGraduationCap} size="1x"/> Ural Fediral University</small></p>
              <p className="card-title"><strong style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.description}</strong></p>
          </div>
        </div>
      )
    })
  }
    
    render(){
      return (
      <div>
        <Header />
        <div className="container">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
            {this._renderItem()}
          </div>
        </div>
        <Footer />
      </div>
      
    )
  }
}

const mapStateToProps = (state) =>({
  data: state.organizations.items
})

const mapDispatchToProps = {
  fetchOrg
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Organizations));