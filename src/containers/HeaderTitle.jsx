import React from 'react';
import ButtonEnroll from '../containers/ButtonEnroll';
import ButtonReadMore from '../containers/ButtonReadMore';
import ButtonPay from '../containers/ButtonPay';

// let backImg = {
//   background: "url('http://itoo.urfu.ru/Content/images/bg.jpg') repeat center 0"
// };

const HeaderTitle = props => (
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
        {props.isAuth === undefined ? null : (
          <ButtonEnrollRead
            isAuth={props.isAuth}
            course_enroll_user={props.course_enroll_user}
            params={props.params}
            modes_data={props.modes_data}
            search={props.search}
          />
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

const ButtonEnrollRead = props => {
  let course_modes_slug = '';
  let user_mode = '';
  if (props.modes_data.length > 0) {
    course_modes_slug = props.modes_data.find(i => i.course_modes_slug).course_modes_slug;
    user_mode = props.modes_data.find(i => i.user_mode).user_mode;
  }
  return (
    <div className="d-flex flex-row mt-5 justify-content-between">
      {props.isAuth && props.course_enroll_user ? <ButtonReadMore value={props.params.id} /> : <ButtonEnroll value={props.params.id} />}
      {props.isAuth && props.course_enroll_user && props.search === '?test=1' && course_modes_slug === 'verified' && user_mode !== 'verified' ? (
        <ButtonPay isAuth={props.isAuth} course_enroll_user={props.course_enroll_user} params={props.params} modes_data={props.modes_data} />
      ) : null}
    </div>
  );
};
export default HeaderTitle;
