import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Pages/Detail/Detail";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import Product from "./Pages/Product/Product";
import SignUp from "./Pages/SignUp/SignUp";
import Cart from "./Pages/Cart/Cart";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Main} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default Routes;
