import React, { useState } from "react";
import styled from "styled-components";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./Footer.view";
import TopBar from "./TopBar.view";
import Home from "./pages/Home.page";
import SignUp from "./pages/SignUp.page";
import LogIn from "./pages/LogIn.page";
import Todos from "./pages/Todos.page";
import Me from "./pages/Me.page";
import { useSelector } from "react-redux";


const App = () => {
  const { loggedIn } = useSelector(state => state.users);

  return (
    <Box>
      <TopBar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login">{loggedIn ? <Redirect to="/me" /> : <LogIn />}</Route>
        <Route path="/todo" exact component={Todos} />
        <Route path="/me" exact component={Me} />
      </Switch>

      <Footer />
    </Box>

  );
};
export default App;

const Box = styled.div`
  /* min-height: 100vh; */
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
