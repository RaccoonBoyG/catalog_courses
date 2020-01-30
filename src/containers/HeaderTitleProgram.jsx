import React from 'react';
// import ButtonEnroll from '../containers/ButtonEnroll';
// import ButtonReadMore from '../containers/ButtonReadMore';
// import ButtonPay from '../containers/ButtonPay';
import ButtonEnrollProgram from './ButtonEnrollProgram';
import { MEDIA_LS_URL } from '../services/openurfu';

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
    <div className="d-flex flex-row backImgCourse margin-custom-catalog p-5">
      <div className={`container container-course_about d-flex flex-column text-light animated fadeIn faster`}>
        <div className=" d-flex title_catalog align-items-start justify-content-start " style={{ textAlign: 'left' }}>
          <h2 className="d-flex align-items-start justify-content-start">{props.title}</h2>
        </div>
        {props.isAuth === undefined ? null : (
          <ButtonProgram isAuth={props.isAuth} search={props.search} program_slug={props.program_slug} data_enroll={props.data_enroll} />
        )}
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

const ButtonEnrollProgramFalse = props => (
  <React.Fragment>
    <div className="d-flex flex-row mt-5 justify-content-between">
      <div className="d-flex flex-row ">
        <a
          href={`${MEDIA_LS_URL}/api/itoo_api/verified_profile/profile/edit_exist/?program_slug=${props.program_slug}`}
          id="href"
          style={{ borderRadius: 0, textDecoration: 'none' }}
        >
          <button className="btn btn-light btn-lg mt-2 d-flex shadow" style={{ borderRadius: 0 }}>
            Редактировать анкету
          </button>
        </a>
      </div>
      <div className="d-flex flex-row ">
        <button type="button" className="btn btn-secondary btn-lg mt-2 d-flex disabled shadow" style={{ borderRadius: 0 }} disabled>
          Вы уже записаны на программу
        </button>
      </div>
    </div>
  </React.Fragment>
);

const ButtonProgram = props => {
  return (
    <>
      {!props.data_enroll.is_active ? (
        <ButtonEnrollProgram isAuth={props.isAuth} program_slug={props.program_slug} />
      ) : (
        <ButtonEnrollProgramFalse program_slug={props.program_slug} />
      )}
    </>
  );
};
export default HeaderTitleProgram;
