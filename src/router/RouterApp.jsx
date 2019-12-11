import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../layout/HomePage';
import Header from '../components/Header';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <main className="App" id="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/about" component={AboutUs} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/tech" component={Tech} />
            <Route path="/404" component={NotFound} />
            <Route path="/orgs/:org" component={OrganizationAbout} />
            <Route path="/orgs" component={Organization} />
            <Route path="/programs/:program" component={ProgramAbout} />
            <Route path="/programs" component={Programs} />
            <Route path="/npr/:program" component={ProgramAbout} />
            <Route path="/npr" component={ProjectsAbout} />
            <Route path="/:id" component={CourseAbout} /> */}
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default RouterApp;
