import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsImage from "./productsImage";


const Row = styled.div`
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 45px;
  margin-top: 45px;
`;



export default function Products({onMouse,show}) {
  return (
    <div>
      <Row>
        <h2>our products</h2>
      </Row>
       
       <ProductsImage onOver={()=>onMouse()} show={show}/>
   
    </div>
  );
}
