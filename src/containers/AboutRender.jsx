import React from "react";

import Header from "../components/Header";
// import HeaderBackground from "../containers/HeaderBackground";
import HeaderTitle from "../containers/HeaderTitle";

// 'top-txt-container'
const AboutRender = props => {
  return (
    <React.Fragment>
      <Header />
      {/* <HeaderBackground
        url_image={props.image_background}
        height={props.height}
      /> */}
      <HeaderTitle
        title={props.name}
        class={props.class}
        description={props.description}
        isAuth={props.isAuth}
        course_enroll_user={props.course_enroll_user}
        params={props.params}
      />
    </React.Fragment>
  );
};

export default AboutRender;
