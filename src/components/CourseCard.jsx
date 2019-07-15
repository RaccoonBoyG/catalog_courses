import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAbout } from '../store/course_about/action';

let backgroundImg = {
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPositionY: 'top'
};

class CourseCard extends Component {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         name: this.props.value===undefined ? this.props.item.display_name : this.props.value.name,
  //         start_display: this.props.value===undefined ? this.props.item.start_display : this.props.value.start_display,
  //         id: this.props.value===undefined ? this.props.item.id : this.props.value.id,
  //         image: this.props.value===undefined ? `https://courses.openedu.urfu.ru/${this.props.item.course_image_url}` : this.props.value.image,
  //     }
  //     console.log(this.props)
  // }

  postIdAPI() {
    this.props.fetchAbout(this.props.value.id);
  }

  truncate(str, len) {
    var dots = '...';
    var object = str.split(' ');
    var str_truncate = '';
    if (object.length > len) {
      str_truncate = object.splice(0, len).join(' ') + dots;
    } else {
      str_truncate = object.splice(0, len).join(' ');
    }
    return str_truncate;
  }

  async imageOnError(url) {
    let url_image = `https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`;
    let test = await fetch(url);
    if (test.ok) {
      return await url;
    } else {
      return await url_image;
    }
  }

  async componentDidMount() {
    let img = await this.imageOnError(this.props.value.image);
    this.setState(prevState => ({ ...prevState, image: img }));
  }

  // fadeInUp
  render() {
    let { name, start_display, id, image } = this.props.value;
    // fetch(`${this.state.image}`)
    //     .then(res => res.ok===true ? this.setState(prevState => ({...prevState, ...this.state.image}) ) : this.setState(prevState => ({...prevState, image: url_image}) ))
    // console.log(this.props.item, this.props.value); style={{borderRadius: '10px'}}

    return (
      <div
        className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 card-height mb-3 mt-3 animated pulse faster"
        key={name}
        style={{ minHeight: '450px', borderRadius: '10px' }}
        data-toggle="tooltip"
        data-placement="left"
        title={name}
      >
        <Link
          to={{ pathname: `/${id}` }}
          onClick={this.postIdAPI.bind(this)}
          className="text-white"
          style={{ textDecoration: 'none' }}
        >
          <div
            className="d-flex flex-row animated fadeIn faster"
            style={{
              minHeight: '450px',
              ...backgroundImg,
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0) 100% ), url(${image})`
            }}
          >
            <div className="d-flex-row container-fluid p-0 shadow-effect">
              {/* <div className="flex-row d-flex p-3">
                        <img className="img-fluid" src={props.logo} alt={props.logo} style={{ maxHeight: '150px', maxWidth: '150px' }} />
                    </div> */}
              <div
                className="flex-row d-flex flex-column p-3"
                style={{ position: 'absolute', bottom: '50px' }}
              >
                <p className="card-catalog-text m-0 p-1">
                  <small>
                    <FontAwesomeIcon icon={faGraduationCap} size="1x" /> Ural
                    Fediral University
                  </small>
                </p>
                <p className="card-catalog-title p-1 mb-0 card-title">
                  <strong
                    style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {this.truncate(name, 6)}
                  </strong>
                </p>
                <p className="card-catalog-text p-1 m-0 card-text">
                  <FontAwesomeIcon icon={faClock} size="1x" /> Начало:{' '}
                  {start_display}
                </p>
              </div>
              <div
                className="flex-row d-flex flex-column pl-3 "
                style={{ position: 'absolute', bottom: '0px' }}
              >
                <p className="nav-link text-primary p-1 show-about">
                  Подробнее
                </p>
              </div>
              {/* <div className="flex-row d-flex justify-content-center button-custom pt-3 pb-3">
                        <Link to={{pathname: `${props.url}/${props.slug}`}} onClick={props.handleClick(props.slug)}>
                        <button className='btn btn-primary'>Подробнее</button>
                        </Link>
                    </div> */}
              <hr className="line" />
            </div>
          </div>
        </Link>
      </div>
      // <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
      //     <Link to={`/${id}`} onClick={this.postIdAPI.bind(this)}>
      //         <div className="card-catalog card mb-3 mt-3 animated pulse faster" style={{boxShadow:'0px 0px 20px -10px rgba(0,0,0,0.5)'}}>
      //             <div className="hovereffect">
      //                 <img
      //                     className="card-catalog-img card-img"
      //                     src={image}
      //                     alt={name}
      //                     onError={ (e) => {
      //                         e.target.onerror = null;
      //                         e.target.src="https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      //                         }}
      //                 />
      //                 <div className="overlay">
      //                 </div>
      //             </div>
      //             <div className="card-catalog-body card-body" data-toggle="tooltip" data-placement="left" title={name} >
      //                 <p className="d-inline-block"><small className="text-muted"><FontAwesomeIcon icon={faGraduationCap} size="1x"/> Ural Fediral University</small></p>
      //                 <p className="card-catalog-title card-title"><strong style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{this.truncate(name,6)}</strong></p>
      //                 <p className="card-catalog-text card-text"><FontAwesomeIcon icon={faClock} size="1x"/> Начало: {start_display}</p>
      //             </div>
      //         </div>
      //     </Link>
      // </div>
    );
  }
}

const mapDispatchToProps = {
  fetchAbout
};

export default connect(
  null,
  mapDispatchToProps
)(CourseCard);
