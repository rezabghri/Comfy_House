import React,{useEffect,useState} from 'react';
import ReactDom from "react-dom";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import logo from '../imgs/logo.svg';
import Modal from './modal';


const Header=styled.nav`
  background-color:rgb(231, 226, 221);
  height:60px;
  width:100%;
  display:flex;
  align-items:center;
  position:fixed;
  z-index:1;
`

export default function Head() {
  const [open,setOpen]=useState('close');

  const handleClick=()=>{
    setOpen('open');
  }

  // useEffect(()=>{

  // })
    return (
        <div>
          {open==='open' && <Modal/>}
            <Header className="row">
               <div className="col-md-3">
                 <FontAwesomeIcon icon={faBars} className="fa-lg"  />
               </div>
               <div className="col-md-6">
                 <img src={logo} />
               </div>
               <div className="col-md-3">
                  <FontAwesomeIcon icon={faShoppingCart} className="fa-lg" style={{cursor:"pointer"}} onClick={handleClick}/>
               </div>
            </Header>
        </div>
    )

}

