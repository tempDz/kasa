import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  padding: 50px;
`;

function Main({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

export default Main;
