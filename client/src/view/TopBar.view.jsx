import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcTodoList } from 'react-icons/fc';
import { useSelector } from "react-redux";

const TopBar = () => {
  const { firstName } = useSelector(state => state.users.me);
  let user = firstName ? firstName : 'guest';
  return (
    <Header>
      <div>
        <SLink to="/">Home</SLink>
        <SLink to="/todo">ToDo</SLink>
      </div>
      <Section>
        {(user === 'guest') ? (
          <>
            <SLink to="/login">Log In</SLink>
            <SLink to="/signup">Sign Up</SLink>
          </>
        ) : (null)}
        <Hello to="/me">Hi, {user}</Hello>
        <Logo src="logo.jpeg"></Logo>
      </Section>
    </Header>
  );
};
export default TopBar;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
  z-index: 100;

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

const Hello = styled(Link)`
  color: #aae2fc;
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  margin-right: 1rem;
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


