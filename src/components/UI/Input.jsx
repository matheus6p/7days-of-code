import React from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 75px;
  width: 67%;
  padding: 0 8px;
  font-size: 16px;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  outline: 0;
  color: #202020;
  opacity: ${props => props.placeholder ? 0.3 : ""};
`;

export default (props) => {
  return <Input placeholder={props.placeholder}/>;
};
