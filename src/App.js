import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Courses from "./components/Courses";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App () {
  return (
    <>
      
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
