import styled from "styled-components";

export const Input = styled.input`
  padding: 27px;
  padding-left: 55px;
  flex: 1;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  background-image: url("../../assets/mail.svg");
  outline-color: #ffcb47;
  box-shadow: 10px 10px 30px 0px #0000000f;
  border: 0;
  color: #202020;

  &::placeholder {
    opacity: 0.3;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;
