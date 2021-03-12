import React from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ExpenseDashboardPage from '../components/Dashboard';
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute.js';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div >
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={CreateExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;