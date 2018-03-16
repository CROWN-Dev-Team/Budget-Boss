//client/routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import App1 from '../src/App1';
export const Routes = () => (
    <Switch>
      <Route exact path='/App' component={App} />,
      <Route exact path='/' component={App1} />
    </Switch>
);
export default Routes;
