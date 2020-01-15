import styled from "styled-components";

export const Container = styled.div`
  flex: 1 1 200px;
  margin: 10px;

  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  cursor: pointer;
`;

export const Title = styled.h4`
  margin: 10px;
  height: 30px;
  text-align: center;
  font-weight: normal;
`;

export const Price = styled.h3`
  font-weight: normal;
`;

export const Image = styled.img`
  display: block;
  width: 184px;
  height: 184px;
  max-width: 100%;
  margin: 20px;
  box-shadow: 0 -1px 30px 0 rgba(0, 0, 0, 0.2), 0 2px 3px 0 rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  position: relative;
  border-top: 1px solid rgba(51, 51, 51, 0.1);
  padding: 24px;
`;
