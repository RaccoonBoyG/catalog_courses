import React from "react";
import ButtonEnroll from "../containers/ButtonEnroll";
import ButtonReadMore from "../containers/ButtonReadMore";

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
    <div
      className="d-flex flex-row"
      style={{ backgroundImage: "linear-gradient(90deg, #00A9C4, #39B1C5)" }}
    >
      <div
        className={`container container-course_about p-custom-2 d-flex flex-column text-light animated fadeIn faster mt-3 mb-3`}
      >
        <div className=" d-flex title_catalog" style={{ textAlign: "left" }}>
          <h2>{props.title}</h2>
        </div>
        {props.isAuth === undefined ? null : (
          <ButtonEnrollRead
            isAuth={props.isAuth}
            course_enroll_user={props.course_enroll_user}
            params={props.params}
          />
        )}
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

const ButtonEnrollRead = props => (
  <div className="d-flex flex-row">
    {props.isAuth && props.course_enroll_user ? (
      <ButtonReadMore value={props.params.id} />
    ) : (
      <ButtonEnroll value={props.params.id} />
    )}
  </div>
);
export default HeaderTitle;
