import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import '../static/css/CourseCard.css';
import 'animate.css/animate.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchAbout} from '../store/course_about/action';


class CourseCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.value.name,
            link: '//openedu.urfu.ru/files/courses_catalog/'+this.props.value.number+'.jpg',
            start_display: this.props.value.start_display,
            id: this.props.value.id,
            image: this.props.value.image
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
            <Link to={`/${this.state.id}`} onClick={this.postIdAPI.bind(this)}>
                <div className="card-catalog card animated fadeInUp">
                    <div className="hovereffect">
                        <img 
                            className="card-catalog-img card-img" 
                            src={this.state.image} 
                            alt={this.state.name} 
                            onError={ (e) => {
                                e.target.onerror = null;
                                e.target.src="https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                }}
                        />
                        <div className="overlay">
                        </div>
                    </div>
                    <div className="card-catalog-body card-body" data-toggle="tooltip" data-placement="left" title={this.props.name} >
                        <p className="d-inline-block"><small className="text-muted"><FontAwesomeIcon icon={faGraduationCap} size="1x"/> Ural Fediral University</small></p>
                        <p className="card-catalog-title card-title"><strong style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{this.truncate(this.state.name,6)}</strong></p>
                        <p className="card-catalog-text card-text"><FontAwesomeIcon icon={faClock} size="1x"/> Начало: {this.state.start_display}</p>
                    </div>
                </div>
            </Link>
        </div>
        )
    }
}

const mapStateToProps = (state) =>({
    data: state.cards.items
  })


export default connect(mapStateToProps)(CourseCard);