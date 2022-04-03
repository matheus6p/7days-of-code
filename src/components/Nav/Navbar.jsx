import React from "react";
import styled from "styled-components";

import Logo from "../../assets/logo.svg";

import "./navbar.css";

const Nav = styled.nav`
  max-width: 100%;
  margin-top: 10px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 100px;

  @media (min-width: 920px) {
    flex-direction: row;
    padding: 0;
    padding-left: 16px;
  }
`;

export const NavMenu = styled.ul`
  max-width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 920px) {
    justify-content: flex-end;
  }

  li {
    list-style: none;
    font-size: 12px;
    @media (min-width: 920px) {
      font-size: 16px;
    }
  }

  li::after {
    content: " /";
  }
  li a {
    display: inline-block;
    font-weight: 400;
    font-size: inherit;
    line-height: 1.1;
    text-decoration: none;
    color: #202020;
    padding: 8px;
    @media (min-width: 920px) {
      padding: 16px;
    }
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="logo da loja" />
        </a>
      </div>
      <NavMenu className="menu">
        <li>
          <a href="/">Como fazer</a>
        </li>
        <li>
          <a href="/">Ofertas</a>
        </li>
        <li>
          <a href="/">Depoimentos</a>
        </li>
        <li>
          <a href="/">Videos</a>
        </li>
        <li>
          <a href="/">Meu carrinho</a>
        </li>
      </NavMenu>
    </Nav>
  );
}
