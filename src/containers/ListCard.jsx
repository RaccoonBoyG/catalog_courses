import React from 'react'
import { Link } from 'react-router-dom';

let backgroundImg = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'top',
  }

const ListCard = (props) => {
    return (
        <React.Fragment>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 card-height mb-3 mt-3" key={props.name+props.slug} style={{minHeight: '250px'}}>
        <Link to={{pathname: `${props.url}/${props.slug}`}} onClick={props.handleClick(props.slug)} className='text-white' style={{textDecoration: 'none'}} >
            <div className="d-flex flex-row animated fadeIn faster bg-dark-texts" style={{minHeight: '250px', borderBottom: '1px solid #000',...backgroundImg, backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.image_background})` }}>
              <div className="d-flex-row container-fluid p-0 shadow-effect">
                <div className="flex-row d-flex p-3 bg-dark">
                  <img className="img-fluid" src={props.logo} alt={props.logo} style={{ maxHeight: '150px', maxWidth: '150px' }} />
                </div>
                <div className="flex-row d-flex p-3" style={{ minHeight: '50px' }}>
                  <h4 className="card-title">{props.name}</h4>
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