import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Register1 from "../../pages/Register1";
import FormikApp from "../../pages/Register2";
import Register3 from "../../pages/Register3";

const Main = () => {
  return (
    <div className="main">
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/register1" component={Register1} />
          <Route path="/register2" component={FormikApp} />
          <Route path="/register3" component={Register3} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
