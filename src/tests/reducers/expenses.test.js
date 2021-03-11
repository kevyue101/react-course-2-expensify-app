import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( [expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( expenses);
});

test('should add expense', () => {
    const expense = {
        description: 'Apples',
        note: '',
        amount: 123,
        createdAt: moment().startOf('month').add(5, 'days')
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit expense by id', () => {
    const amount = 999
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {amount}
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe( amount );
});

test('should not edit expense by id', () => {
    const amount = 1000
    const action = {
        type: 'EDIT_EXPENSE',
        id: -2,
        updates: {amount}
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( expenses );
});

test('should set expenses', () => {
    const expense = [expenses[1]]
    const action = {
        type: 'SET_EXPENSES',
        expenses: expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( expense );
});