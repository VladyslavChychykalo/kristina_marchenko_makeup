import React, { Component } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header/Header";
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import routes from "../routes/routes";
import menuTransition from "./App.module.css";
import { CSSTransition } from "react-transition-group";

export default class App extends Component {
  state = { isOpen: false };

  toggleMenu = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <HashRouter>
          <CSSTransition
            in={isOpen}
            timeout={1000}
            classNames={menuTransition}
            unmountOnExit
          >
            <Header onToggle={this.toggleMenu} />
          </CSSTransition>
          <ToggleMenu onToggle={this.toggleMenu} />
          <Switch>
            <Route
              path={routes.HOME_PAGE.path}
              component={routes.HOME_PAGE.component}
            />
            <Route
              path={routes.SERVICES_PAGE.path}
              component={routes.SERVICES_PAGE.component}
            />
            <Route
              path={routes.HAIRSTYLE_COURSE_PAGE.path}
              component={routes.HAIRSTYLE_COURSE_PAGE.component}
            />
            <Route
              path={routes.MAKEUP_FOR_YOUSELF_PAGE.path}
              component={routes.MAKEUP_FOR_YOUSELF_PAGE.component}
            />
            <Route
              path={routes.REFRESHER_COURSE_PAGE.path}
              component={routes.REFRESHER_COURSE_PAGE.component}
            />
            <Route
              path={routes.EXPRESS_MAKEUP_PAGE.path}
              component={routes.EXPRESS_MAKEUP_PAGE.component}
            />
            <Route
              path={routes.BASIC_COURSE_PAGE.path}
              component={routes.BASIC_COURSE_PAGE.component}
            />
            <Route
              path={routes.COURSES_PAGE.path}
              component={routes.COURSES_PAGE.component}
            />
            <Route
              path={routes.CONTACTS_PAGE.path}
              component={routes.CONTACTS_PAGE.component}
            />
            <Redirect to={routes.HOME_PAGE.path} />
          </Switch>
        </HashRouter>
      </>
    );
  }
}
