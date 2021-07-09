import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { login } from '../../state/slices/users.slice'
import { Redirect } from "react-router-dom";


const LogIn = ({ setToken }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [redirect, setRedirect] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(login(data));
  }

  return (
    <Main>
      <Title>Log In</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>Email: </label>
        <Input
          name="email"
          placeholder="Email"
          {...register('email', { required: true, minLength: 8 })}
        ></Input>
        <br></br>

        <label>Password: </label>
        <Input
          name="password"
          type='password'
          placeholder="Password"
          {...register('password', { required: true, minLength: 6 })}
        ></Input>

        <Button>Log In</Button>

      </Form>

      <p>No account yet?</p>
      <button onClick={() => setRedirect(true)}>Sign Up</button>
      {redirect ? (<Redirect to="/signup" />) : null}
    </Main>
  )
}

export default LogIn;

const Main = styled.div`
  height: 100%;
  width: 100%;
  padding: 7rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
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
        filter: brightness(110%);
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