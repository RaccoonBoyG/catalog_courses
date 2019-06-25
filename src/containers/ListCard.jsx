import React from 'react';
import { Link } from 'react-router-dom';
import { backgroundUrl } from './HeaderBackground';

let backgroundImg = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'top',
  }

const ListCard = (props) => {
    return (
        <React.Fragment>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 card-height mb-3 mt-3" key={props.name+props.slug} style={{maxHeight: '250px'}}>
        <Link to={{pathname: `${props.url}/${props.slug}`}} onClick={props.handleClick(props.slug)} className='text-white' style={{textDecoration: 'none'}} >
            <div className="d-flex flex-row animated fadeIn faster bg-dark-texts" style={{minHeight: '250px',maxHeight: '250px', ...backgroundImg, backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.95) 100% ), url(${props.image_background===undefined ? backgroundUrl : props.image_background})` }}>
              <div className="d-flex-row container-fluid p-0 shadow-effect">
                <div className="flex-row d-flex p-3">
                  <img className="img-fluid img_org_logo" src={props.logo} alt={props.logo} style={{ maxHeight: '130px', maxWidth: '200px', "background":"white","boxShadow":"0px 0px 30px -13px #e1e1e1" }} />
                </div>
                <div className="flex-row d-flex flex-wrap text-wrap p-3" style={{ minHeight: '50px', "position": "absolute","bottom":"0px",'whiteSpace': 'pre-wrap' }}>
                  <h4 className="card-title text-wrap" style={{"margin":"auto", 'whiteSpace': 'pre-wrap'}}>{props.name}</h4>
                </div>
                {/* <div className="flex-row d-flex justify-content-center button-custom pt-3 pb-3">
                  <Link to={{pathname: `${props.url}/${props.slug}`}} onClick={props.handleClick(props.slug)}>
                    <button className='btn btn-primary'>Подробнее</button>
                  </Link>
                </div> */}
              </div>
            </div>
            </Link>
          </div>
          
        </React.Fragment>
    )
}

export default ListCard
