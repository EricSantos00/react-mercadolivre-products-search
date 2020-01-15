import React from "react";

import { Container } from "./styles";

import Card from "../Card";

import { useSelector } from "react-redux";

import ReactLoading from "react-loading";

export default function List() {
  const products = useSelector(state => state.products.data);
  const loading = useSelector(state => state.products.loading);

  return (
    <Container>
      {loading && (
        <ReactLoading type="spin" color="#000" height={"30%"} width={"30%"} />
      )}
      {products.results &&
        products.results.map(product => (
          <Card key={product.id} data={product} />
        ))}
    </Container>
  );
}
