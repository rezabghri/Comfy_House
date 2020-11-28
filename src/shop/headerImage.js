import React from "react";
import TitleWrapper from "./titleWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import bedroom from "../imgs/l.jpg";
import '../imgs/l.jpg'

const Image = styled.img`

  display: inline-block;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  margin-top:60px;
`;

const Div=styled.div`
   text-align: center;
   background:#ffffffcc;
   display:inline-block;
   padding:2rem;
`

const H1=styled.h1`
text-transform: uppercase;
margin-bottom:25px;
`

const Button = styled.button`
  padding: 10px;
  color: black;
  width:180px;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #f09d51;
  background: #f09d51;

  &:hover {
    background: transparent;
    color: #f09d51;
    transition: 1s;
  }
`;

export default function HeaderImage() {
  return (
    <div>
      <Image src={bedroom} />
      <TitleWrapper></TitleWrapper>

      {/* <Image style={{backgroundImage:l.jpg}} >
        <Div>
          <H1>furniture collection</H1>
          <Button>shop now</Button>
        </Div>
      </Image> */}
    </div>
  );
}
