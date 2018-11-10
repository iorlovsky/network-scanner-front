import React from "react";
import {Route, Switch, Router} from 'react-router-dom';
import Main from "../components/Main";
import history from './history';
import Signin from "../pages/Signin";
import Error404 from "../pages/Error404";


const AppRouter = props => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Signin}/>
        <Route exact path='/signin' component={Signin}/>
        <Main>
          <Switch>
            <Route component={Error404}/>
          </Switch>
        </Main>
      </Switch>
    </Router>
  )
};

export default AppRouter;