import React, { Fragment } from 'react';

let backgroundUrl = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80 )"

let backgroundImg = {
  // backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80 )",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const HeaderBackground = (props) => (
  <Fragment>
    <div className="bg_img" 
    style={{ 
      ...backgroundImg, 
      backgroundImage: props.url_image === undefined ? `${backgroundUrl}` : `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.url_image})`, 
      "height": props.height === undefined ? `none` : `${props.height}px` 
      }} ></div>
  </Fragment>
);

export default HeaderBackground;
