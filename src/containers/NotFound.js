import React from 'react';
import Header from '../components/Header';

const NotFound = () => (
  <React.Fragment>
    <Header />
    <div className="d-flex flex-column container p-5 mt-5 mb-3 text-custom-dark">
      <h3>404 page not found</h3>
      <p>К сожалению, страница, которую вы ищете, не существует.</p>
    </div>
  </React.Fragment>
);
export default NotFound;
