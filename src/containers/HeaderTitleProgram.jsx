import React from 'react';
// import ButtonEnroll from '../containers/ButtonEnroll';
// import ButtonReadMore from '../containers/ButtonReadMore';
// import ButtonPay from '../containers/ButtonPay';
// import ButtonEnrollProgram from './ButtonEnrollProgram';
import { MEDIA_LS_URL } from '../services/openurfu';

// let backImg = {
//   background: "url('http://itoo.urfu.ru/Content/images/bg.jpg') repeat center 0"
// };

const HeaderTitleProgram = props => {
  return (
    <>
      {/* <div
      className={`container-course_about container animated fadeIn mt-3 mb-3 ${
        props.class === undefined ? "top-txt-container" : props.class
      }`}
    > */}
      <div className="d-flex flex-row backImgCourse margin-custom-catalog p-5">
        <div className={`container container-course_about d-flex flex-column text-light animated fadeIn faster`}>
          <div className=" d-flex title_catalog align-items-start justify-content-start " style={{ textAlign: 'left' }}>
            <h1 className="d-flex align-items-start justify-content-start">{props.title}</h1>
          </div>
          {<ButtonsProgramsEnroll isAuth={props.isAuth} search={props.search} program_slug={props.program_slug} data_enroll={props.data_enroll} />}
          {props.description === undefined ? null : <HeaderDescription desc={props.description} />}
        </div>
      </div>
    </>
  );
};

const HeaderDescription = props => (
  <>
    <div className="d-flex mobile-action">
      <div className="container mt-5">
        <p>{props.desc}</p>
      </div>
    </div>
  </>
);

const ButtonEnrollProgramFalse = props => (
  <>
    <div className="d-flex flex-row mt-5 justify-content-end">
      <div className="d-flex flex-row ">
        <a
          href={`${MEDIA_LS_URL}/api/itoo_api/verified_profile/profile/edit_exist/?program_slug=${props.program_slug}`}
          id="href"
          style={{ borderRadius: 0, textDecoration: 'none' }}
          target="blank"
        >
          <button className="btn btn-light btn-lg mt-2 d-flex shadow" style={{ borderRadius: 0 }}>
            Редактировать анкету
          </button>
        </a>
      </div>
      <div className="d-flex flex-row ">
        <p className="d-flex disabled shadow" style={{ borderRadius: 0 }} disabled>
          Вы уже записаны на программу
        </p>
      </div>
    </div>
  </>
);

const ButtonProgram = props => {
  return <ButtonsCoursesEnroll program_slug={props.program_slug} isAuth={props.isAuth} />
};

const button_enroll_program = props => (
  <div className="d-flex flex-row justify-content-end">
    <a
      className="btn btn-light btn-lg mt-2 d-flex shadow"
      href={`${MEDIA_LS_URL}/api/itoo_api/verified_profile/profile/?program_slug=${props.program_slug}`}
      style={{ borderRadius: 0 }}
    >
      Записаться на<br /> программу
    </a>
  </div>
);

const button_auth = props => (
  <div className="d-flex flex-row justify-content-end">
    <a href={`${MEDIA_LS_URL}/api/itoo_api/verified_profile/profile/?program_slug=${props.program_slug}`} id="href" style={{ borderRadius: 0, textDecoration: 'none' }}>
      <button className="pr-4 pl-4 btn btn-light btn-lg mt-2 d-flex shadow" style={{ borderRadius: 0 }}>
        Записаться на<br /> программу
      </button>
    </a>
  </div>
);

const withEither = (conditionalRenderingFn, EitherComponent) => Component => props => {
  return conditionalRenderingFn(props) ? (
    <>
      <EitherComponent isAuth={props.isAuth} search={props.search} program_slug={props.program_slug} data_enroll={props.data_enroll} />
    </>
  ) : (
    <>
      <Component isAuth={props.isAuth} search={props.search} program_slug={props.program_slug} data_enroll={props.data_enroll} />
    </>
  );
};

const isViewConditionFn = props => !props.data_enroll.is_active;
const isViewAuthConditionFn = props => props.isAuth;

const withEditContionalRendering = withEither(isViewConditionFn, ButtonProgram);
const ButtonsProgramsEnroll = withEditContionalRendering(ButtonEnrollProgramFalse);

const withAuthContionalRendering = withEither(isViewAuthConditionFn, button_enroll_program);
const ButtonsCoursesEnroll = withAuthContionalRendering(button_auth);


export default HeaderTitleProgram;
