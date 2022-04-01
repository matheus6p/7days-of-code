import React from "react";
import { Container } from "../components/Container/Container";
import { Row } from "../components/Container/Row";
import Navbar from "../components/Nav/Navbar";
import AssinarNewsletter from "../components/AssinarNewsletter/AssinarNewsletter";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Container>
        <Row>
          <AssinarNewsletter />
        </Row>
      </Container>
    </main>
  );
}
