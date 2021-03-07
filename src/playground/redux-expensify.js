import { createStore, combineReducers } from 'redux';




const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ 
    description: 'Rent',
    amount: 10000,
    createdAt: 1
}));

const expenseTwo = store.dispatch(addExpense({ 
    description: 'Coffee',
    amount: 99,
    createdAt: 100
}));

const expenseThree = store.dispatch(addExpense({ 
    description: 'Coffee',
    amount: 399,
    createdAt: -100
}));

// store.dispatch(removeExpense({ 
//     id: expenseOne.expense.id
// }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(1000));
// store.dispatch(setEndDate(1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'hsdhlfs',
        description: 'Rent for Feb',
        note: 'Final payment',
        amount: 64000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
