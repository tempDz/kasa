import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
`;

const Text = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 288px;
  line-height: 142.6%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FF6060;
`;

function Error404() {
  return (
    <Container>
      <Text>404</Text>
    </Container>
  );
}

export default Error404;
