import React from 'react';

//local imports
import HomeContent from "./HomeContent";
import LoginForm from "./LoginForm";
import NewsList from "./NewsList";
import Home from "./Home";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";


export default function Layout(){
  return (
  <Router className="Layout">
      <header>
         <div className="header-brand">
         <NavLink  to="/" exact className="header-brand-text">
             <h1 > Ma 3 </h1>
         </NavLink>
        </div>

             <div className="main-navigation">
                <NavLink to="/" exact className="nav-item">
                       Home
                </NavLink>
                <NavLink to="/news"  className="nav-item">
                       News
                </NavLink>
                <NavLink to="/login"  className="nav-item">
                       LogIn
                </NavLink>
            </div>
      </header>

      <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/news" component={NewsList} />
         <Route path="/" component={LoginForm} />
      </Switch>

  </Router>

  );
}
