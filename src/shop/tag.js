import React from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Div=styled.div`
  width:15%;
  height:30px;
  background-color:#f09d51;
  color:black;
  cursor:pointer;
  align-items:center;

  &:hover{
      color:white;
  }
`
const H6=styled.h6`
text-transform:uppercase;
font-size:11px;
font-weight:600;

`

export default function Tag() {
    return (
        <div>
            <Div className="row">
                <div className="col-md-3">
                    <FontAwesomeIcon icon={faShoppingCart} className="fa-xs"/>
                </div>
                <div className="col-md-6">
                      <H6>add to cart</H6>
                </div>
                <div className="col-md-3">
                    <FontAwesomeIcon icon={faShoppingCart} className="fa-xs"/>

                </div>

            </Div>
        </div>
    )
}
