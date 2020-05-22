import React from "react"
import { Switch, Link } from "react-router-dom"
import { Route } from "react-router"
import Reviel from "pages/Reviel"
import Create from "pages/Create"
interface Props {}

const AppRoutes = (props: Props) => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Create}></Route>
        <Route path="/reveal" exact component={Reviel}></Route>
        <Route path="/" component={PageNotFound} />
      </Switch>
    </>
  )
}

function PageNotFound() {
  return (
    <div>
      <p className="not-found-page">
        Upps... Page Not Found. <Link to="/">Go back Home</Link>
      </p>
    </div>
  )
}

export default AppRoutes
