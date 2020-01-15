import React from "react";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

import { Container } from "./styles";

import ProductListItem from "../ProductListItem";

export default function ProductList() {
  const products = useSelector(state => state.products.data);
  const loading = useSelector(state => state.products.loading);

  return (
    <Container>
      {loading ? (
        <ReactLoading type="spin" color="#000" height={"20%"} width={"20%"} />
      ) : (
        products.results &&
        products.results.map(product => (
          <ProductListItem key={product.id} data={product} />
        ))
      )}
    </Container>
  );
}
