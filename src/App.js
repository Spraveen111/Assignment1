// App.js

import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Header from "./Header";
import SignIn from "./SignIn";
import Cart from "./Cart";

import Products from "./Products";
import Contact from "./Contact";
import ProductCard from "./ProductCard";

import "./App.css";
import ItemDetails from "./ItermDetails";

const App = () => (
  <>
    <div className="mainClass">
      <HashRouter>
        {/* <Header/>  */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/sign" component={SignIn} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/singleProduct/:itemID" component={ItemDetails} />
          {/* <Route exact path="/"  ><Home/></Route>
      <Route exact path="/home"  ><Home/></Route>
      <Route exact path="/products"  ><Products/></Route>
      <Route exact path="/contact" ><Contact/></Route> */}
        </Switch>
      </HashRouter>
    </div>
  </>
);

export default App;
