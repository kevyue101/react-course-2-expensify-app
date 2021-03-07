import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/Dashboard';
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={CreateExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;