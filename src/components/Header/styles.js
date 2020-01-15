import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: #fff159;
  color: rgba(51, 51, 51, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SearchForm = styled.form`
  display: flex;

  input {
    border-radius: 2px;
    background-color: #fff;
    border: 0 rgba(0, 0, 0, 0.2);
    margin-left: 20px;
    padding: 7px 60px 9px 15px;
    height: 39px;
    width: 600px;
    font-size: 16px;
    ::placeholder {
      color: #9e9e9e;
    }
  }

  button {
    color: #fff;
    background: #fff;
    height: 39px;
    width: 39px;
    border-top-right-radius: 2px;
    border: 0;
    border-left: 1px solid rgba(230, 230, 230, 0.5);
    cursor: pointer;
  }
`;

export const Logo = styled.a`
  background-image: url("https://http2.mlstatic.com/ui/navigation/5.3.7/mercadolibre/logo-pt__large_plus.png");
  height: 34px;
  width: 134px;
`;
