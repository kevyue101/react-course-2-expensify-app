import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../../fixtures/expenses';

test('should return 0 when no expenses', () => {

    const result = getExpensesTotal([]);
    expect(result).toEqual(0); 
});

test('should return correct total with one expense', () => {
    const result = getExpensesTotal([ expenses[2] ]);
    expect(result).toEqual(12000); 
});

test('should return correct total with multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toEqual(110123); 
});