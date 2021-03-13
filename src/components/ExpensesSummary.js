import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(props.expensesTotal/100).format('$0,0.00');
    return (
    <div>
        <div className="page-header">
            <div className="content-container">
                {
                    props.expensesCount === 0 ? 
                    (
                        <h1>No expenses to add up</h1>
                    ) : 
                    (
                        <h1 className="page-header__title">
                        Viewing <span>{props.expensesCount}</span> <span>{expenseWord}</span> totalling <span>{formattedExpensesTotal}</span>
                        </h1>
                    )
                }
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
        {
  
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
