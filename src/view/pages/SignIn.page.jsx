import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Main>
      <Title>Log In</Title>

      <Form>
        <label>Email: </label>
        <Input
          name="email"
          placeholder="Email"
        ></Input>

        <label>Password: </label>
        <Input
          name="password"
          type='password'
          placeholder="Password"
        ></Input>
      </Form>
    </Main>
  )
}

export default SignIn;

const Main = styled.div`
  /* margin-bottom: 5rem; */
  /* line-height: 1.15; */

  height: 100%;
  width: 100%;
  padding: 7rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(54,25,218);
  background: linear-gradient(0deg, rgba(54,25,218,1) 18%, rgba(253,187,45,1) 100%);
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  /* color: #1114e7; */
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
  background-color: white;
  padding: 2.2rem 4.4rem;
  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.2rem 2rem rgba(184, 187, 200, 0.3);
`;

const Form = styled.form`
  padding: 4rem;
  border-radius: 1rem;
  border: 3px solid midnightblue;
  &:hover {
        filter: brightness(150%);
        transition: 0.1s;
    }
`;

const Input = styled.input`
  width: 100%;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, midnightblue 0%, thistle 100%);
  padding: 1rem;
  color: white;
  font-family: cursive;
  font-size: 2rem;
  border-radius: 1rem;
  margin: 0;
  position: relative;
  left: 50%;
  transform: translate(-50%, 15%);
`;