import React from 'react';

const HeaderTitle = props => (
  <React.Fragment>
    <div
      className={`container-course_about container animated fadeIn ${
        props.class === undefined ? 'top-txt-container' : props.class
      }`}
    >
      <div className={`d-flex flex-column bg-dark p-custom-2`}>
        <div className="d-flex title_catalog">
          <h1>{props.title}</h1>
        </div>

        {props.description === undefined ? null : (
          <HeaderDescription desc={props.description} />
        )}
      </div>
    </div>
  </React.Fragment>
);

const HeaderDescription = props => (
  <React.Fragment>
    <div className="d-flex mobile-action">
      <div className="container mt-5">
        <p>{props.desc}</p>
      </div>
    </div>
  </React.Fragment>
);
export default HeaderTitle;
