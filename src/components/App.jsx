import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "../store/reducers";
import thunk from "redux-thunk";
import Catalog from "./Catalog";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CourseAbout from "./CourseAbout";
import Organization from "./Organization";
// import { composeWithDevTools } from 'redux-devtools-extension';
import Programs from "./Programs";
import ProgramAbout from "./ProgramAbout";
import Footer from "./Footer";
import AboutUs from "../containers/AboutUs";
import Tech from "../containers/Tech";
import Privacy from "../containers/Privacy";
import OrganizationAbout from "./OrganizationAbout";
import NotFound from "../containers/NotFound";

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <main className="App" id="app">
            <Switch>
              <Route exact path="/" component={Catalog} />
              <Route path="/about" component={AboutUs} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/tech" component={Tech} />
              <Route path="/404" component={NotFound} />
              <Route path="/orgs/:org" component={OrganizationAbout} />
              <Route path="/orgs" component={Organization} />
              <Route path="/programs/:program" component={ProgramAbout} />
              <Route path="/programs" component={Programs} />
              <Route path="/:id" component={CourseAbout} />
            </Switch>
            <Footer />
          </main>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
