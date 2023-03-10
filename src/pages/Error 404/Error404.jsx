import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Montserrat';
  font-style: normal;
  color: #FF6060;
`;

const Text = styled.h1`
  margin: 0;
  font-size: 288px;
  line-height: 142.6%;
`;

const OopsMessage = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 142.6%;
  align-items: flex-end;
  margin: 0;
`;

const RetourAccueil = styled(Link)`
  font-size: 18px;
  line-height: 142.6%;
  margin-top: 150px;
  color: #FF6060;
  text-decoration: none;
  border-bottom: 2px solid #FF6060;
`;

function Error404() {
  return (
    <Container>
      <Text>404</Text>
      <OopsMessage>Oups! La page que vous demandez n'existe pas.</OopsMessage>
      <RetourAccueil to="/">Retourner sur la page d’accueil</RetourAccueil>
    </Container>
  );
}

export default Error404;
