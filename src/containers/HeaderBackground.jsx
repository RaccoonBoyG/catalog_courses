import React, { Fragment } from 'react';

let backgroundImg = {
  backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80 )",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const HeaderBackground = (props) => (
  <Fragment>
    <div className="bg_img" style={{ ...backgroundImg, "height": props.height===undefined ? `700px` : `${props.height}px` }} ></div>
  </Fragment>
);
  
export default HeaderBackground;
