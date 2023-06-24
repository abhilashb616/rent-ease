import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const [isHover, setHover] = useState(false);
  return (
    <HeaderContainer>
      <NavigationContainer>
        <LogoContainer>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>RentEase</Logo>
          </Link>
        </LogoContainer>
        <Nav>
          <Ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Li>Home</Li>
            </Link>
            <Link to="buy" style={{ textDecoration: "none" }}>
              <Li>Buy</Li>
            </Link>
            <Link to="rent" style={{ textDecoration: "none" }}>
              <Li>Rent</Li>
            </Link>
            <Link to="sell" style={{ textDecoration: "none" }}>
              <Li>Sell</Li>
            </Link>
          </Ul>
        </Nav>
      </NavigationContainer>
      <FormContainer>
        <form action="" method="post">
          <LoginBtn
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Log in
          </LoginBtn>
          <SignupBtn isHover={isHover}>Sign up</SignupBtn>
        </form>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  //border: 5px solid;
  background-color: var(--nav-bg-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
`;
const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LogoContainer = styled.div``;
const Logo = styled.h1`
  color: var(--logo-color);
`;
const Nav = styled.nav`
  margin-left: 35px;
`;
const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;
const Li = styled.li`
  margin-right: 25px;
  padding: 8px 16px;
  font-weight: 500;
  background-color: var(--nav-bg-color);
  border-radius: 8px;
  color: var(--nav-text-color);
  &:hover {
    color: var(--nav-text-after-hover);
    background-color: var(--nav-bg-after-hover);
  }
`;
const FormContainer = styled.div``;
const LoginBtn = styled.button`
  margin-right: 20px;
  padding: 8px 16px;
  border-radius: 8px;
  color: var(--login-btn);
  background-color: var(--bg-login-btn);
  border: 1px solid var(--btn-border-color);
  &:hover {
    color: var(--signup-btn);
    background-color: var(--btn-border-color);
  }
`;
const SignupBtn = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: ${(props) =>
    props.isHover ? "1px solid var(--btn-border-color);" : 0} !important;
  color: ${(props) =>
    props.isHover ? "var(--login-btn);" : "var(--signup-btn);"} !important;
  background-color: ${(props) =>
    props.isHover ? "var(--signup-btn)" : "var(--bg-signup-btn)"} !important;
`;
