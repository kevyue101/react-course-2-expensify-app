export default (expenses) => {
    const amounts = expenses.map((expense) => expense.amount);
    const reducer = (total, i) => total + i;
    return amounts.reduce(reducer, 0);
};