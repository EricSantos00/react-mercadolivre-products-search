import React from "react";

import { Provider } from "react-redux";

import store from "./store";

import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
