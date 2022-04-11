import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { FieldGroup } from "../UI/Input";
import homeImg from "../../assets/home.png";
import emailjs from "emailjs-com";

const WrapperAssinarNewsletter = styled.div`
  background-color: #ffe29a;
  padding: 16px;
  margin-top: 16px;
  position: relative;

  .WrapperAssinarNewsletter__container {
    max-width: 585px;
  }

  @media (min-width: 920px) {
    background-color: transparent;
    margin-top: 155px;

    &::after {
      content: "";
      display: block;
      width: 787px;
      height: 975px;
      background-image: url(${homeImg});
      position: absolute;
      --baseDistance: -287px;
      top: calc(var(--baseDistance) + 50px);
      left: 100%;
      z-index: -1;
      pointer-events: none;
    }
  }
`;

export default function AssinarNewsletter() {
  const [email, setEmail] = useState();
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  function sendEmail(data, e) {
    e.preventDefault();
    console.log(form);

    emailjs
      .sendForm('gmailMessage', 'template_2hzjuhj', form.current, '4u9al_Xc8R4PnlCIX')
      .then(
        (result) => {
          alert(
            `Obrigado pela assinatura, você receberá nossas novidades no e-mail ${data.email}`
          );
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

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
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <FieldGroup>
            <Input
              type="email"
              placeholder="Insira seu e-mail"
              onChange={(e) => handleChange(e)}
              value={email}
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
            />
            <Button type="submit">Assinar Newsletter</Button>
          </FieldGroup>
          {errors.email && (
            <span style={{ color: "red" }}>Insira um email valido</span>
          )}
        </form>
      </div>
    </WrapperAssinarNewsletter>
  );
}
