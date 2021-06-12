import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./pages/layout/Layout";
import Main from "./pages/main/Main";
import NewBadge from "./pages/NewBadge/NewBadge";
import login from "./pages/login/login"
import signUp from "./pages/signup/signup"
import notFound from "./pages/notFound/notFound"
import Badges from "./pages/Badges/Badges"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/log" component={login}></Route>
          <Route exact path="/sign" component={signUp}></Route>
          <Route component={notFound}></Route>
          <Route exact path="/badges" component="Badges"></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;