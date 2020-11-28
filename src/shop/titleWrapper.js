import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  background-color: rgb(255, 255.255);
  display: inline-block;
`;
const Div = styled.div`
  text-transform: uppercase;
  font-size: 25px;
  margin-bottom:25px;
`;

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

export default function TitleWrapper() {
  return (
    <div>
      <Wrapper>
        <Div>
          <h1>furniture collection</h1>
        </Div>
        <div>
          <Button>shop now</Button>
        </div>
      </Wrapper>
    </div>
  );
}
