import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2%;

  display: ${(props) => (props.display == "flex" ? "flex" : "")};
  justify-content: space-between;
  align-items: center;
`;

export default (props) => {
  return <Container display={props.display}>{props.children}</Container>;
};