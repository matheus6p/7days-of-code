import React from "react";
import styled from "styled-components";

import Logo from "../../assets/logo.svg";

import "./navbar.css";

const Nav = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  margin-bottom: 100px;

  ul.menu {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: end;
  }

  @media (min-width: 920px) {
    ul.menu {
      flex-direction: row;
      padding: 0;
      padding-left: 16px;
    }
  }

  ul.menu li {
    margin: 0 5px;
  }

  ul.menu li::after {
    content: " /";
  }

  ul.menu li:last-child::after {
    content: "";
    color: #202020;
  }

  ul.menu li a {
    font-size: 16px;
    font-weight: 400;
    font-family: "Montserrat";
    text-decoration: none;
    color: #202020;
    transition: 0.2s;
  }

  ul.menu li a:hover {
    filter: opacity(0.6);
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
      <ul className="menu">
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
      </ul>
    </Nav>
  );
}
