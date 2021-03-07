import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters, alt_filters} from '../../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter} 
            sortByDate={sortByDate} 
            sortByAmount={sortByAmount} 
            setStartDate={setStartDate}
            setEndDate={setEndDate} />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters correctly with alt data', () => {
    wrapper.setProps({
        filters: alt_filters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const filterText = alt_filters.text;
    wrapper.find('input').simulate('change', 
                                   {target: {value: filterText }});

    expect(setTextFilter).toHaveBeenLastCalledWith(filterText);
});

test('should sort by date', () => {
    const filterBy = filters.sortBy;
    wrapper.find('select').simulate('change', 
                                   {target: {value: filterBy}});

    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const filterBy = alt_filters.sortBy;
    wrapper.find('select').simulate('change', 
                                   {target: {value: filterBy}});

    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = alt_filters.startDate;
    const endDate = alt_filters.endDate;
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});