import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrg } from '../store/organizations/action';
import 'animate.css/animate.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import '../static/css/Org.css';

class Organizations extends Component {
// _renderItems(element) {
//    this.props.data.name
//   }

  componentDidMount() {
    this.props.fetchOrg()
  }
    
    render(){
      const { data } = this.props
      const OrgList = (
        data.map(item =>{
          return(
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4" key={item.id}>
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
          </div>
          )
        })
      )

      return (
      <div>
        <div className="container mb-5">
          <div className="row ">
              {OrgList}
          </div>
        </div>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Organizations);