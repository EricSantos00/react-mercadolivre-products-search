import React from "react";

import { Container, Image, Content, Title, Price } from "./styles";

import NumberFormat from "react-number-format";

export default function ProductListItem({ data }) {
  return (
    <Container onClick={() => window.open(data.permalink, "_blank")}>
      <Title>{data.title}</Title>
      <Image src={data.thumbnail} />
      <Content>
        <Price>
          <NumberFormat
            value={data.price}
            displayType={"text"}
            decimalSeparator={","}
            thousandSeparator={"."}
            isNumericString={true}
            prefix={"R$"}
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </Price>
      </Content>
    </Container>
  );
}
