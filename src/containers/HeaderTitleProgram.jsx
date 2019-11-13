import React from 'react';
// import ButtonEnroll from '../containers/ButtonEnroll';
// import ButtonReadMore from '../containers/ButtonReadMore';
// import ButtonPay from '../containers/ButtonPay';
import ButtonEnrollProgram from './ButtonEnrollProgram';

// let backImg = {
//   background: "url('http://itoo.urfu.ru/Content/images/bg.jpg') repeat center 0"
// };

const HeaderTitleProgram = props => (
  <React.Fragment>
    {/* <div
      className={`container-course_about container animated fadeIn mt-3 mb-3 ${
        props.class === undefined ? "top-txt-container" : props.class
      }`}
    > */}
    <div className="d-flex flex-row backImgCourse margin-custom-catalog">
      <div className={`container container-course_about p-custom-2 pb-4 pl-2 d-flex flex-column text-light animated fadeIn faster mb-3`}>
        <div className=" d-flex title_catalog align-items-start justify-content-start " style={{ textAlign: 'left' }}>
          <h2 className="d-flex align-items-start justify-content-start">{props.title}</h2>
        </div>
        {props.isAuth === undefined ? null : <ButtonProgram isAuth={props.isAuth} search={props.search} program_slug={props.program_slug} />}
        {props.description === undefined ? null : <HeaderDescription desc={props.description} />}
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

const ButtonProgram = props => {
  return (
    <div className="d-flex flex-row mt-5 justify-content-end">
      {props.isAuth && props.search === '?test=2' ? <ButtonEnrollProgram isAuth={props.isAuth} program_slug={props.program_slug} /> : null}
    </div>
  );
};
export default HeaderTitleProgram;
