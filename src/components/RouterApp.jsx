import React, { Component } from 'react';

import ProjectsAbout from './ProjectsAbout';
// import Programs from "./Programs";
import ProgramAbout from './ProgramAbout';
import Footer from './Footer';
import AboutUs from '../containers/AboutUs';
import Tech from '../containers/Tech';
import Privacy from '../containers/Privacy';
import OrganizationAbout from './OrganizationAbout';
import NotFound from '../containers/NotFound';
import Header from './Header';
import Catalog from './Catalog';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CourseAbout from './CourseAbout';
import Organization from './Organization';
import { connect } from 'react-redux';
import { fetchUserState, fetchEnrollState } from '../store/user/action';

class RouterApp extends Component {
  componentDidMount(){
    this.props.fetchUserState()
    // this.props.fetchEnrollState() 
  }
  render() {
    return (
      <main className="App" id="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route path="/about" component={AboutUs} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/tech" component={Tech} />
            <Route path="/404" component={NotFound} />
            <Route path="/orgs/:org" component={OrganizationAbout} />
            <Route path="/orgs" component={Organization} />
            {/* <Route path="/programs/:program" component={ProgramAbout} />
                <Route path="/programs" component={Programs} /> */}
            <Route path="/npr/:program" component={ProgramAbout} />
            <Route path="/npr" component={ProjectsAbout} />
            <Route path="/grant_test/:program" component={ProgramAbout} />
            <Route path="/grant_test" component={ProjectsAbout} />
            <Route path="/:id" component={CourseAbout} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </main>
    );
  }
}

const mapDispatchToProps = {
  fetchUserState,
  fetchEnrollState
};

export default 
  connect(
    null,
    mapDispatchToProps
  )(RouterApp)
