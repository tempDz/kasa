import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/LOGO.svg';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position: absolute;
  width: 100%;
  height: 68px;
  left: 0;
  top: 40px;
  margin: 30px 0;
`;

const Logo = styled.img`
  height: 68px;
  margin-left: 4%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 34px;
  margin-right: 4%;
  margin-left: auto;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  color: #FF6060;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 142.6%;
  display: flex;
  align-items: center;
  text-align: right;
  margin-right: 20px;
  &:hover {
    text-decoration-line: underline;
  }
`;

const Accueil = styled(Link)`
  margin-right: 40px;
`;

const APropos = styled(Link)`
  white-space: nowrap;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo" />
      <Nav>
        <NavLinks>
          <Accueil href="/">Accueil</Accueil>
          <APropos href="/a-propos">A propos</APropos>
        </NavLinks>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
