import React, { useRef } from "react";
import ReactDom from "react-dom";
import {BrowserRouter as Router,Route,Switch, Link} from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import ax1 from "../imgs/product-1.jpg";
import ax2 from "../imgs/product-2.jpg";
import ax3 from "../imgs/product-3.jpg";
import ax4 from "../imgs/product-4.jpg";
import ax5 from "../imgs/product-5.jpg";
import ax6 from "../imgs/product-6.jpg";
import ax7 from "../imgs/product-7.jpg";
import ax8 from "../imgs/product-8.jpg";
import Tag from "./tag";
import Product1 from "./product1";
import Product2 from './product2';


const Card = styled.img`
  display: flex;
  width: 266px;
  height: 192px;
  margin-left: 70px;
  margin-right:1px;

  &:hover{
   box-shadow:2px 2px 2px 1px;
   {ReactDom.createPortal(<Tag/>,imgRef)}
   
  }
`;

const H3 = styled.h3`
  text-transform: capitalize;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 18px;
  margin-left: 30px;
`;

export default function ProductsImage({ onOver, show }) {
  const imgRef = useRef("img");

  return (
    <Router>
      <div>
        <div className="row" style={{ marginBottom: "40px" }}>
          <div>
            <Link to="/product1/1">
              <Card src={ax1} onMouseOver={() => onOver()}></Card>
            </Link>
              <H3>queen panel bed</H3>
          </div>

          <div>
            <Link to="/product2/2">
            <Card src={ax2} />
            </Link>
            <H3>king panel bed</H3>
          </div>

          <div>
            <Card src={ax3} />
            <H3>single panel bed</H3>
          </div>

          <div>
            <Card src={ax4} />
            <H3>twin panel bed</H3>
          </div>
        </div>
        <div className="row">
          <div>
            <Card src={ax5} />
            <H3>fridge</H3>
          </div>

          <div>
            <Card src={ax6} />
            <H3>dresser</H3>
          </div>

          <div>
            <Card src={ax7} />
            <H3>couch</H3>
          </div>

          <div>
            <Card src={ax8} />
            <H3>table</H3>
          </div>
        </div>
      </div>

    

      </Router>
  );

}

{/* // const container=React.createElement('div');
// Card.appendChild(container);
// ReactDOM.createPortal(<Tag/>,container) */}
