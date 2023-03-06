import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/LOGO.svg';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 120px;
  max-width: 1240px;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 68px;
  margin-right: auto;
  margin-left: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  max-width: calc(100% - 88px);
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
`;

const StyledLink = styled(NavLink)`
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

  &.active {
    text-decoration-line: underline;
  }
`;

const Accueil = styled(StyledLink)`
  margin-right: 40px;
`;

const APropos = styled(StyledLink)`
  white-space: nowrap;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo" />
      <Nav>
        <NavLinks>
          <Accueil to="/">
            Accueil
          </Accueil>
          <APropos
            to="/about"
            onClick={(event) => {
              event.preventDefault();
              navigate('/about');
            }}
          >
            A propos
          </APropos>
        </NavLinks>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
