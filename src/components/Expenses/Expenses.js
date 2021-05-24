import React, { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseChart from '../ExpenseChart/ExpenseChart';
import './Expenses.css';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2021');

  function filterYearHandler(year) {
    setFilterYear(year);
  }

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  let expenseContent = (
    <p className="expenses-error-message">No Expenses Found</p>
  );

  if (filteredExpenses.length > 0) {
    expenseContent = (
      <>
        <ExpenseChart filteredExpenses={filteredExpenses} />
        <ExpenseList filteredExpenses={filteredExpenses} />
      </>
    );
  }

  return (
    <div className="expenses">
      <ExpenseFilter selected={filterYear} onFilterYear={filterYearHandler} />
      {expenseContent}
    </div>
  );
}

export default Expenses;
