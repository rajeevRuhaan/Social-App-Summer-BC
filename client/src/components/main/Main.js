import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../../pages/Register";

const Main = () => {
  return (
    <div className="main">
      <div>
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
