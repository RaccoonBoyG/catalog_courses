import React from 'react';
import { Link } from 'react-router-dom';
import { backgroundUrl } from './HeaderBackground';
// linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(250, 250, 250) 30%, rgba(247, 247, 247, 0) 0%)
let backgroundImg = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPositionY: 'top'
};

const ListCard = props => {
  return (
    <React.Fragment>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 card-height-list mb-3 mt-3" key={props.name + props.slug}>
        <Link
          to={{ pathname: `${props.url}/${props.slug}` }}
          onClick={props.handleClick(props.slug)}
          className="text-custom-dark"
          style={{
            textDecoration: 'none'
          }}
        >
          <div className="d-flex-column animated fadeIn faster shadow-effect" style={{ boxShadow: '0px 0px 20px -8px rgba(169, 169, 169, 0.4)' }}>
            <div
              className="d-flex flex-row bg-dark-texts"
              style={{
                minHeight: '200px',
                maxHeight: '200px',
                ...backgroundImg,
                backgroundImage: `url(${props.image_background === undefined ? backgroundUrl : props.image_background})`
              }}
            >
              <div className="d-flex container-fluid p-0 justify-content-between flex-column">
                <div className="flex-row d-flex p-3">
                  <img
                    className="img-fluid"
                    src={props.logo}
                    alt={props.logo}
                    style={{
                      maxHeight: '100px',
                      maxWidth: '180px',
                      background: 'white',
                      boxShadow: '0px 0px 30px -13px #e1e1e1'
                    }}
                  />
                </div>
              </div>
              {/* <div className="flex-row d-flex justify-content-center button-custom pt-3 pb-3">
                  <Link to={{pathname: `${props.url}/${props.slug}`}} onClick={props.handleClick(props.slug)}>
                    <button className='btn btn-primary'>Подробнее</button>
                  </Link>
                </div> */}
            </div>
            <div className="flex-row d-flex flex-column p-3 text-custom-dark bg-light" style={{ minHeight: '200px', maxHeight: '200px' }}>
              <h5 className=" p-1 card-title">{props.name}</h5>
              <div className="flex-row d-flex flex-column" style={{ position: 'absolute', bottom: '0px' }}>
                <p className="nav-link text-primary p-1 show-about">Подробнее</p>
              </div>
              <hr className="line bg-primary" />
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ListCard;
