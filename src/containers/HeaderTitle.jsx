import React, { } from 'react';


const HeaderTitle = (props) => (
  <React.Fragment>
      <div className={`${props.class}`}>
          <div className='d-flex'>
              <div className='title_catalog'>
                  <h1>{props.title}</h1>
              </div>
          </div>
      </div>
  </React.Fragment>
  
);

export default HeaderTitle