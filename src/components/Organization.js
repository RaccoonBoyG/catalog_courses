import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrg } from '../store/organizations/action';
import Header from './Header';
import Footer from './Footer';
import HeaderBackground from './HeaderBackground';
import 'animate.css/animate.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';
import '../static/css/Org.css';

class Organizations extends Component {
// _renderItems(element) {
//    this.props.data.name
//   }

  componentDidMount() {
    this.props.fetchOrg()
  }

  _renderItem(){
    return this.props.data.map((item, key)=>{
      if(item.active)
        return (
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4" key={key}>
            <div className="card ">
              <div className="hovereffect">
                  <img className="card-img" src={item.logo} alt={item.name}/>
                  <div className="overlay">
                  </div>
                <div className="card-body" data-toggle="tooltip" data-placement="left" title={item.name} >
                <p className="d-inline-block">
                  <FontAwesomeIcon icon={faGraduationCap} size="1x"/> {item.name}
                </p>
                </div>
              </div>
            </div>
          </div>
      )
    })
  }
    
    render(){
      return (
      <div>
        <HeaderBackground />
        <Header />
        <div className="container">
            {this._renderItem()}
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