import React,{useState,useRef} from 'react';
import ReactDom from 'react-dom';
import styled from  'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAlignLeft, faWindowClose} from "@fortawesome/free-solid-svg-icons";

const Div=styled.div`
position: fixed;
top: 0;
right: 0;
height:100%;
overflow: scroll;
z-index: 3;
background: rgb(231, 226, 221);
padding:20px;
width:35%;
`
const H2=styled.h2`
text-transform:capitalize;
align-items:center;
margin-top:10px;
font-size:24px;
`
const H3=styled.h3`
text-transform:capitalize;
align-items:center;
margin-top:30px;
font-size:20px;
`
const Button=styled.button`
padding: 10px;
color: black;
width:180px;
text-transform: uppercase;
cursor: pointer;
border: 1px solid #f09d51;
background: #f09d51;
margin-top:10px;

&:hover {
  background: transparent;
  color: #f09d51;
  transition: 1s;
}
`

export default function Modal() {
    // const body=useRef('body');
     
    const [close,setClose]=useState('open');

    const handleClick=()=>{
        setClose('close');
    }

    return (
        <div>
            {close==='open'&&
            <Div>
                <div className="col-md-3">
                  <FontAwesomeIcon icon={faWindowClose} className="fa-lg" style={{cursor:"pointer"}} onClick={handleClick}/> 
                </div>

                <H2>your cart</H2>
                <H3>your total:&nbsp;$ 0</H3>
                <Button onClick={handleClick}>clear cart</Button>

            </Div>}
            {close==='close' && ''}
        </div>
    )
   
}

// ReactDom.createPortal(<Modal/>,body)
