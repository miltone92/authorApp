import React from "react";
import "./App.scss";

//Dependencies
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componets
import AppContainer from "./components/app-container/AppContainer";
import MainContent from "./components/main-content/MainContent";
import SideNav from "./components/side-nav/SideNav";
import NavLink from "./components/side-nav/nav-link/NavLink";

//Pages
import Login from "./pages/login/Login";
import BookSearch from "./pages/BookSearch";
import BookRegistry from "./pages/BookRegistry";
import AuthorSearch from "./pages/AuthorSearch";
import AuthorRegistry from "./pages/AuthorRegistry";

/**********************************
 * APP
 * 
/**********************************/

function App() {
  return (
    <Router>
      <div key="app-container" className="app-container">
        <AppContainer>
          <Switch>
            <Route exact path="/Login">
              <Login></Login>
            </Route>
            <Route exact path="">
              <SideNav>
                <NavLink href="/AuthorSearch">
                  <i className="fas fa-search"></i> Search Authors
                </NavLink>
                <NavLink href="/AuthorRegistry">
                  <i className="fas fa-edit"></i> Register Author
                </NavLink>
                <NavLink href="/BookSearch">
                  <i className="fas fa-search"></i> Search books
                </NavLink>
                <NavLink href="/BookRegistry">
                  <i className="fas fa-book"></i> Register book
                </NavLink>
                <NavLink href="/Login">
                  <i className="fas fa-user"></i> Login
                </NavLink>
              </SideNav>
              <MainContent>
                <Switch>
                  <Route exact path="/AuthorSearch">
                    <AuthorSearch></AuthorSearch>
                  </Route>
                  <Route exact path="/AuthorRegistry">
                    <AuthorRegistry></AuthorRegistry>
                  </Route>
                  <Route exact path="/BookSearch">
                    <BookSearch></BookSearch>
                  </Route>
                  <Route exact path="/BookRegistry">
                    <BookRegistry></BookRegistry>
                  </Route>
                </Switch>
              </MainContent>
            </Route>
          </Switch>
        </AppContainer>
      </div>
    </Router>
  );
}

export default App;
