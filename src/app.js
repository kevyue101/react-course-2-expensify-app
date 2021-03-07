import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import moment from 'moment';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();



const waterBill = store.dispatch(addExpense({
    description: 'Water bill',
    amount: 10000,
    createdAt: moment().toString()
    })
);

const gasBill = store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 1800,
    createdAt: moment().toString()
    })
);

const rent = store.dispatch(addExpense({
    description: 'Rent',
    amount: 5000000,
    createdAt: moment().toString()
    })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));