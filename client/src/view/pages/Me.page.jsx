import React, { useState } from "react";
import styled from "styled-components";
// import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../state/slices/users.slice';


const Me = () => {
    const { me } = useSelector(state => state.users);
    const dispatch = useDispatch();



    return (
        <Main>
            <Title>My Profile</Title>

            {(Object.keys(me).length === 0) ?
                (<a href="/login">Log In</a>) :

                (<Section>
                    <label>Name:</label>
                    <h2>{me.firstName} </h2>
                    <br></br>

                    <label>Last Name:</label>
                    <h2>{me.lastName}</h2>
                    <br></br>

                    <label>Email: </label>
                    <h2>{me.email}</h2>
                    <br></br>

                    <label>Country: </label>
                    <h2>{me.country}</h2>
                    <br></br>

                    <button>Edit Profile</button>
                    <button onClick={() => dispatch(logout('aaa'))}>Log Out</button>
                </Section>)
            }
        </Main>
    )
}

export default Me;

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

const Section = styled.div`
    background: #aae2fc;
    border-radius: 1rem;
    width: 55%;
  padding: 4rem;
  border-radius: 1rem;
  border: 3px solid midnightblue;
  &:hover {
        filter: brightness(110%);
        transition: 0.1s;
    }
`;

const Button = styled.button`

`;