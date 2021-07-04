import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import Footer from "./Footer.view";
import TopBar from "./TopBar.view";
import Home from "./pages/Home.page";
import SignUp from "./pages/SignUp.page";
import LogIn from "./pages/LogIn.page";
import Todos from "./pages/Todos.page";


const App = () => {
  return (
    <Box>
      <TopBar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignUp} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/todo" exact component={Todos} />
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
