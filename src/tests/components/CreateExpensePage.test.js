import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpensePage } from '../../components/CreateExpensePage';
import expenses from '../../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn()
    history = { push: jest.fn() };
    wrapper = shallow(<CreateExpensePage startAddExpense={startAddExpense} history={history} />);
})

test('should render create expense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should add Expense on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});