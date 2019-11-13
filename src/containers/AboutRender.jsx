import React from 'react';

import Header from '../components/Header';
// import HeaderBackground from "../containers/HeaderBackground";
import HeaderTitle from '../containers/HeaderTitle';
import HeaderTitleProgram from '../containers/HeaderTitleProgram';

// 'top-txt-container'
const AboutRender = props => {
  return (
    <React.Fragment>
      <Header />
      {/* <HeaderBackground
        url_image={props.image_background}
        height={props.height}
      /> */}
      {props.modes_data !== undefined ? (
        <HeaderTitle
          title={props.name}
          class={props.class}
          description={props.description}
          isAuth={props.isAuth}
          course_enroll_user={props.course_enroll_user}
          params={props.params}
          modes_data={props.modes_data}
          search={props.search}
          program_slug={props.program_slug}
        />
      ) : (
        <HeaderTitleProgram
          title={props.name}
          class={props.class}
          description={props.description}
          isAuth={props.isAuth}
          search={props.search}
          program_slug={props.program_slug}
        />
      )}
    </React.Fragment>
  );
};

export default AboutRender;
