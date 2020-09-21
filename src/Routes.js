import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Pages/Detail/Detail";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import Product from "./Pages/Product/Product";
import SignUp from "./Pages/SignUp/SignUp";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Main} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/product/:title" component={Product} />
            <Route exact path="/product/:title/:category" component={Product} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default Routes;
