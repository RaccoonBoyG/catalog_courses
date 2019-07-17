import React from "react";

let backImg = {
  background: "url('http://itoo.urfu.ru/Content/images/bg.jpg') repeat center 0"
};

const HeaderTitle = props => (
  <React.Fragment>
    {/* <div
      className={`container-course_about container animated fadeIn mt-3 mb-3 ${
        props.class === undefined ? "top-txt-container" : props.class
      }`}
    > */}
    <div
      className={`container container-course_about p-custom-2 d-flex flex-column text-custom-dark animated fadeIn faster mt-3 mb-3`}
      style={{ ...backImg }}
    >
      <div className=" d-flex title_catalog">
        <h1>{props.title}</h1>
      </div>

      {props.description === undefined ? null : (
        <HeaderDescription desc={props.description} />
      )}
    </div>
    {/* </div> */}
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
