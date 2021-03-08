import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(props.expensesTotal/100).format('$0,0.00');
    return (
    <div>
        <h3>Total of Expenses</h3>
        {
            props.expensesCount === 0 ? 
            (
                <div>No expenses to add up</div>
            ) : 
            (
                <div>
                    <p>
                        Viewing {props.expensesCount} {expenseWord} totalling {formattedExpensesTotal}
                    </p>
                </div>
            )   
        }      
    </div>
)};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
