import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SET_TEXT_FILTER', text: 'cheese'};
    const state = filterReducer(currentState, action);
    expect(state.text).toBe('cheese');
});

test('should set start date', () => {
    const startDate = moment().startOf('month').add(5, 'days');
    const currentState = {
        text: '',
        startDate: moment().startOf('month'),
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { 
        type: 'SET_START_DATE', 
        startDate
    };
    const state = filterReducer(currentState, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set end date', () => {
    const endDate = moment().endOf('month').subtract(5, 'days');
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: moment().endOf('month'),
        sortBy: 'amount'
    };
    const action = { 
        type: 'SET_END_DATE', 
        endDate
    }
    const state = filterReducer(currentState, action);
    expect(state.endDate).toEqual(endDate);
});