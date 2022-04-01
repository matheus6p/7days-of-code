import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

export default function AssinarNewsletter() {
  return (
    <div>
      <form className="newsletter__form">
        <Input type="text" placeholder="Insira seu e-mail" />
        <Button>Assinar Newsletter</Button>
      </form>
    </div>
  );
}
