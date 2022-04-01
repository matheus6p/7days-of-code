import React from "react";
import styled from 'styled-components';

const Menu = styled.ul `
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: green;

`

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Menu>
      <li><a href="/">Como fazer</a></li>
      <li><a href="/">Ofertas</a></li>
      <li><a href="/">Depoimentos</a></li>
      <li><a href="/">Videos</a></li>
      <li><a href="/">Meu carrinho</a></li>
    </Menu>
  );
}
