import React from "react";

import { Provider } from "react-redux";

import store from "./store";

import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import List from "./components/List";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <List />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
