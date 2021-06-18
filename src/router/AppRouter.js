import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "../components/mainpage/MainPage";
import MyPage from "../components/MyPage/MyPage";
import Wrapper from "../components/wrapper/Wrapper";

const AppRouter = () => (
  <BrowserRouter>
    <Wrapper>
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/mypage" component={MyPage} />
      </Switch>
    </Wrapper>
  </BrowserRouter>
);

export default AppRouter;
