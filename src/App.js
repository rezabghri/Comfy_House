import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ReactDOM from "react-dom";
import "./App.css";
//import Header from "./shop/header";
//import List from './catApi/list';
import Head from "./shop/head";
import HeaderImage from "./shop/headerImage";
import Products from "./shop/products";
import Tag from "./shop/tag";
import Product1 from './shop/product1';
import Product2 from './shop/product2';
import Modal from './shop/modal';

function App() {
  const [show, setShow] = useState(false);

  const handleMouseOver = () => {
    setShow(true);
  };

  // const body=useRef(document.body);
  //  const body=React.createElement('body');

  return (
    <div className="App">
      {/* {ReactDOM.createPortal(<Head/>,body)} */}
      <Head />
      <HeaderImage />
      <Products onMouse={handleMouseOver} show={show} />
      {/* <Modal/> */}

      <Router>
        <Switch>
          <Route exact path="/product1/:id">
            <Product1/>
          </Route>
          <Route exact path="/product2/:id?">
            <Product2 />
          </Route>
          {/* <Route exact path="/">
            <Products/>
          </Route> */}
        </Switch>
      </Router>

      {/* <Tag/> */}

      {/* <List /> */}
    </div>
  );
}

export default App;
