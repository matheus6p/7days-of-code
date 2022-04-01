import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { FieldGroup } from "../UI/Input";

const WrapperAssinarNewsletter = styled.div`
  background-color: #ffe29a;
  padding: 16px;
  margin-top: 16px;
  position: relative;

  WrapperAssinarNewsletter__container {
    max-width: 585px;
  }

  @media (min-width: 920px) {
    background-color: transparent;
    margin-top: 155px;

    &:after {
      content: "";
      display: block;
      width: 787px;
      height: 975px;
      background-image: url("../../assets/home.png");
      position: absolute;
      --baseDistance: -287px;
      top: calc(var(--baseDistance) + 50px);
      right: 0;
      z-index: -1;
      pointer-events: none;
    }
  }
`;

export default function AssinarNewsletter() {
  return (
    <WrapperAssinarNewsletter>
      <div className="WrapperAssinarNewsletter__container">
        <div className="txt">
          <div className="txt--regular">Sua casa com as</div>
          <div className="txt--large">
            melhores <br /> plantas
          </div>
          <div className="txt--regular" style={{ margin: "25px 0" }}>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </div>
        </div>
        <form className="">
          <FieldGroup>
            <Input type="email" placeholder="Insira seu e-mail" />
            <Button type="button">Assinar Newsletter</Button>
          </FieldGroup>
        </form>
      </div>
    </WrapperAssinarNewsletter>
  );
}
