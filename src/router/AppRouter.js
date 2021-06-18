import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "../component/mainpage/MainPage";
import MyPage from "../component/MyPage";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MainPage} exact={true} />
      <Route path="/mypage" component={MyPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
