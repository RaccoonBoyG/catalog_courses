import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import '../static/css/CourseCard.css';
import 'animate.css/animate.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchAbout} from '../store/about/action';


class CourseCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.value.name,
            link: '//openedu.urfu.ru/files/courses_catalog/'+this.props.value.number+'.jpg',
            start_display: this.props.value.start_display,
            id: this.props.value.id

        }
    }

    postIdAPI(){
        this.props.dispatch(fetchAbout(this.props.value.id))
    }

    truncate(str,len){
        var dots='...'
        var object = str.split(" ")
        var str_truncate = ''
        if(object.length > len){
        str_truncate =  object.splice(0,len).join(" ")+dots
        }
        else {
        str_truncate =  object.splice(0,len).join(" ")
        }
        return str_truncate
    }
    // fadeInUp
    render(){
        return ( 
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
            <Link to={`${this.state.id}`} onClick={this.postIdAPI.bind(this)}>
                <div className="card animated fadeInUp">
                    <div className="hovereffect">
                        <img className="card-img" src={this.state.link} alt={this.state.name}/>
                        <div className="overlay">
                        </div>
                    </div>
                    <div className="card-body" data-toggle="tooltip" data-placement="left" title={this.state.name} >
                        <p className="d-inline-block"><small className="text-muted"><FontAwesomeIcon icon={faGraduationCap} size="1x"/> Ural Fediral University</small></p>
                        <p className="card-title"><strong style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{this.truncate(this.state.name,6)}</strong></p>
                        <p className="card-text"><FontAwesomeIcon icon={faClock} size="1x"/> Начало: {this.state.start_display}</p>
                    </div>
                </div>
            </Link>
        </div>
        )
    }
}

const mapStateToProps = (state) =>({
    state
  })

export default connect(mapStateToProps)(CourseCard);