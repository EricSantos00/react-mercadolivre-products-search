import React from "react";

import { Container, Image } from "./styles";

export default function Card({ data }) {
  return (
    <Container>
      <h5>{data.title}</h5>
      <Image src={data.thumbnail} />
      <h3>R${data.price}</h3>
    </Container>
  );
}
