import React from "react";
import { Route } from "react-router-dom";
import Signup from "./auth/container/Signup";
import "antd/dist/antd.css";
import Login from "./auth/container/Login";
import Club from "./club/container/Club";
import Header from "./components/header";
import { ThemeProvider } from "styled-components";
import theme from "./common/commonCss";
import ClubIntro from "./common/ClubIntro";
import CreateClubIntro from "./midAdPage/createClubIntro";
import ShowResume from "./midAdPage/ShowResume";
import Board from "./Pages/Board";
import Post from "./Pages/Post";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Route exact path="/" component={Club} />
      <Route path="/signup" component={Signup} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/club/:clubId" component={ClubIntro} exact />
      <Route path="/createClub/:clubId" component={CreateClubIntro} exact />
      <Route path="/showResume/:clubId" component={ShowResume} exact />
      <Route path="/club/:clubId/board/:boardId" component={Board} exact />
      <Route path="/club/:clubId/board/:boardId/post/:postId" component={Post} exact />
    </ThemeProvider>
  );
}

export default App;
