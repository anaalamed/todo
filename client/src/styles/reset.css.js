import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  html,body,#root{min-height:100%}
  html{font-size:10px;}
  body{
    /* border:deeppink 1px solid; */
    font-size:1.6rem;
    background: linear-gradient(336deg, rgba(54,25,218,1) 18%, rgba(253,187,45,1) 80%);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .home {
    width: 70%;
    z-index: 1;
    border-radius: 1rem;
    border: 1px dotted midnightblue;
    /* padding: 3rem; */
  }

  label {
    font-size: 3rem;
    color: midnightblue;
    font-weight: bold;
  }

  input {
  /* width: 100%; */
  font-size: 1rem;
  padding: 1.5rem 0.5rem;
  margin: 1rem 0;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  font-family: Arial;
  opacity: 0.8;
  &:hover {
    /* filter: brightness(200%)  */
    /* background: white; */
    /* filter: brightness(150%); */
  }
  }

  input::placeholder, :valid {
    font-size: large;
    padding-left: 1rem;
  }

  h1 {
    font-size: 8rem;
    font-weight: bold;
    color: #1114e7;
    /* align-content: center; */
  }

  h2 {
    font-size: 4rem;
    font-weight: bold;
    color: white
  }

  /* h3 {
    text-align: center;
  } */

  span {
    color: midnightblue;
    font-weight: bold;
    padding: 1rem;
  }

  button {
    background: #1114e7;
    color: white;
    padding: 10px;
    margin: 0.3rem;
    border-radius: 1rem;
  }

  form { 
    background: #aae2fc;
    border-radius: 1rem;
  }

  a {
    font-size: large;
    padding: 1rem;
  }
`;
