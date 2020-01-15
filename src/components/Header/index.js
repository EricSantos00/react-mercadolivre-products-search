import React, { useState, useEffect, useRef } from "react";

import { Container, Logo, SearchForm } from "./styles";
import { MdSearch } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import { searchProduct } from "../../store/ducks/products";

export default function Header() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const focusSearch = useRef(null);

  useEffect(() => {
    focusSearch.current.focus();
  }, [products]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    dispatch(searchProduct(search));
  };

  return (
    <Container>
      <Logo />
      <SearchForm onSubmit={e => handleSearchSubmit(e)}>
        <input
          value={search}
          onChange={e => updateSearch(e)}
          ref={focusSearch}
          type="text"
          placeholder="Pesquisar algo..."
        />
        <button type="submit">
          <MdSearch size={24} color="#666" />
        </button>
      </SearchForm>
    </Container>
  );
}
