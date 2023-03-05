import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/LOGO.svg';

const StyledLogo = styled.img`
  height: 68px;
  margin-left: 4%;
`;

function Logo() {
  return (
    <StyledLogo src={logo} alt="Logo" />
  );
}

export default Logo;
