import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrg } from '../store/organizations/action';
import '../static/css/CourseAbout.css';
import Header from './Header';
import Footer from './Footer';
import 'animate.css/animate.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

class CourseAbout extends Component {
    // _renderItems(element) {
    //    this.props.data.name
    //   }
    
      componentDidMount() {
        this.props.dispatch(fetchOrg())
      }

      componentWillUnmount(){
        this.props.dispatch(fetchOrg())
      }
    
        render(){
          return (
          <div>
            <Header />
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                <div className="card animated fadeInUp">
                    <div className="hovereffect">
                        <img className="card-img" src={'#'} alt={this.props.data.name}/>
                        <div className="overlay">
                        </div>
                    </div>
                    <div className="card-body" data-toggle="tooltip" data-placement="left" title={this.props.data.name} >
                        <p className="d-inline-block"><small className="text-muted"><FontAwesomeIcon icon={faGraduationCap} size="1x"/> Ural Fediral University</small></p>
                        <p className="card-title"><strong style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{this.truncate(this.props.data.description,6)}</strong></p>
                    </div>
                </div>
            </div>
            <Footer />
          </div>
          
        )
      }
    }
    
    const mapStateToProps = (state) =>({
      data: state.about.items
    })
    
      
    export default connect(mapStateToProps)(CourseAbout);