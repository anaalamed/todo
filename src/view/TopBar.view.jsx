import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcTodoList } from 'react-icons/fc';

const TopBar = () => {
  return (
    <Header>
      <div>
        <SLink to="/">Home</SLink>
        <SLink to="/todo">ToDo</SLink>
      </div>
      <Section>
        <h3>Hello, guest</h3>
        <SLink to="/signin">Sign Up</SLink>
        <SLink to="/login">Log In</SLink>
        <Logo src="logo.jpeg"></Logo>
      </Section>
    </Header>
  );
};
export default TopBar;

const Header = styled.header`
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  background: #d39c26;
  position: fixed;
  left: 0;
  right: 0;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const SLink = styled(Link)`
  color: #1114e7;
  font-size: 3rem;
  font-weight: bold;
  text-decoration: none;
  margin-right: 2rem;
  :hover {
    text-decoration: underline;
    /* background: red; */
  }
`;
const Logo = styled.img`
  width: 10rem;
  cursor: pointer;
  border-radius: 1rem;
  /* margin-left: 50%; */
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
