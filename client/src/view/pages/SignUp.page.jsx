import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import countries from '../../data/countries';
import { registration } from '../../state/slices/users.slice'
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const password = useRef('');

  const [redirect, setRedirect] = useState(false);
  const [redirectLog, setRedirectLog] = useState(false);

  const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})&/;

  const error_messages = {
    first_name: {
      required: "First name is required",
      minLength: "First name is too short"
    },
    last_name: {
      required: "Last name is required",
      minLength: "Last name is too short"
    },
    country: {
      required: "Country is required"
    },
    email: {
      required: "Email is required",
      minLength: "Email is too short",
      pattern: "Email address is not valid"
    },
    description: {
      required: "Description is required",
      minLength: "Description is too short"
    },
    password: {
      required: "Password is required",
      minLength: "Password is too short",
      pattern: "Password is not strong! \n Must contain at least 1 lowercase, 1 uppercase, 1 numeric, 1 special character "
    },
    cpassword: {
      required: "Password is required",
      minLength: "Password is too short",
      validate: "The passwords do not match!"
    }
  };
  const get_error_msg = (errors, error_messages, field_name) => {
    const generate = (name) => {
      if (errors[name]) {
        switch (errors[name].type) {
          case "required":
            return error_messages[name].required;
          case "minLength":
            return error_messages[name].minLength;
          case "pattern":
            return error_messages[name].pattern;
          default:
            return "";
        }
      }
    };
    return generate(field_name);
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(registration(data));
    setRedirectLog(true);
  }

  const onValidate = (value) => {
    console.log("boom");
    // console.log(value);
    const match = value === password.current;
    console.log(password.current);
    console.log(match);
    // value => value === password.current || "the passwords..."
  }

  return (
    <Main>
      <Title>Sign Up</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>

        <label>Name: </label>
        <Input
          name="first_name"
          placeholder="First Name"
          {...register('first_name', { required: true, minLength: 2 })}
          error_styled={errors?.first_name}
        ></Input>
        <Error show={errors?.first_name}>
          {get_error_msg(errors, error_messages, "first_name")}
        </Error>
        <br></br>

        <label>Last Name: </label>
        <Input
          name="last_name"
          placeholder="Last Name"
          {...register('last_name', { required: true, minLength: 2 })}
          error_styled={errors?.last_name}
        ></Input>
        <Error show={errors.last_name}>
          {get_error_msg(errors, error_messages, "last_name")}
        </Error>
        <br></br>

        <label>Country: </label>
        <WraperSelect>
          <Select
            type="select"
            name="country"
            {...register('country', { required: true })}
          >
            <option value="">Please select country</option>
            {Object.keys(countries).map((country) => {
              const { name, emoji } = countries[country];
              return (
                <option key={country} value={name}>
                  {emoji} &nbsp; {name}{" "}
                </option>
              );
            })}
          </Select>
        </WraperSelect>
        <Error show={errors.country}>
          {get_error_msg(errors, error_messages, "country")}
        </Error>
        <br></br>

        <label>Email: </label>
        <Input
          name="email"
          placeholder="Email"
          {...register('email', { required: true, minLength: 8, pattern: email_regex })}
          error_styled={errors.email}
        ></Input>
        <Error show={errors.email}>
          {get_error_msg(errors, error_messages, "email")}
        </Error>
        <br></br>

        <label>Password: </label>
        <Input
          name="password"
          type='password'
          placeholder="Password"
          ref={password}
          {...register('password', {
            required: true,
            minLength: 8,
            pattern: strongRegex
          })}
        // error_styled={errors.password}
        ></Input>
        <Error show={errors.password}>
          {get_error_msg(errors, error_messages, "password")}
        </Error>
        <br></br>

        <label>Confirm Password: </label>
        <Input
          name="cpassword"
          type='password'
          placeholder="Confirm Password"
          // {...register('cpassword', { required: true, minLength: 8 })}
          {...register('cpassword', {
            required: true,
            // minLength: 8, 
            validate: onValidate
          })}

          error_styled={errors.password}
        ></Input>
        <Error show={errors.cpassword}>
          {get_error_msg(errors, error_messages, "cpassword")}

        </Error>
        <br></br>

        <Button>Sign Up</Button>
      </Form>

      <p>Already have an account?</p>
      <button onClick={() => setRedirect(true)}>Log In</button>
      {redirect ? (<Redirect to="/login" />) : null}
      {redirectLog ? (<Redirect to="/login" />) : null}
    </Main>
  )
}

export default SignUp;

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
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

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

const Error = styled.div`
  color: red;
  display: ${({ show }) => (show ? "block" : "none")};
  font-size: 1rem;
`;

const Select = styled.select`
  background: ${({ error_styled }) => (error_styled ? "pink" : "white")};
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1rem;
  padding: 1rem;
  color: #aaa;
  font-family: Arial;
`;

const Textarea = styled.textarea`
//   background: ${({ error_styled }) => (error_styled ? "pink" : "white")};
//   border-radius: 1rem;
//   width: 100%;
//   font-size: 1rem;
//   padding: 1rem;
//   font-family: Arial;
// `;

const WraperSelect = styled.div`
  select {
    background: ${({ error_styled }) => (error_styled ? "pink" : "white")};
  }
`;
