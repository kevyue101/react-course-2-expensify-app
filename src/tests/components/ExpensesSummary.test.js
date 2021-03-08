import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test("should not show anything if there are no expenses", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should not show anything when given one expense", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={123.123}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should show total of expenses when given multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={10} expensesTotal={123123}/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.pr)
});