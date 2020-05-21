import React from "react";
import { Switch, Link } from "react-router-dom";
import { Route } from "react-router";
import Home from "pages/Home";
import Create from "pages/Bugs";
interface Props {}

const AppRoutes = (props: Props) => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Create}></Route>
        <Route path="/reveal" exact component={Home}></Route>
        <Route path="/" component={PageNotFound} />
      </Switch>
    </>
  );
};

function PageNotFound() {
  return (
    <div>
      <p className="not-found-page">
        Upps... Page Not Found. <Link to="/">Go back Home</Link>
      </p>
    </div>
  );
}

export default AppRoutes;
