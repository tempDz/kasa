import React from 'react';
import styled from 'styled-components';
import logoFooter from '../../assets/LOGO footer.png';

const FooterContainer = styled.div`
  height: 209px;
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: auto;
  margin-left: auto;
`;

const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 24px;
  line-height: 34.22px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 20px;
  margin-bottom: 20px;
`;

function Footer() {
  return (
    <FooterContainer>
      <Logo src={logoFooter} alt="Logo Footer" />
      <Text>© 2022 Kasa. All rights reserved.</Text>
    </FooterContainer>
  );
}

export default Footer;
