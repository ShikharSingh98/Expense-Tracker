import React, { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import './Expenses.css';
import ExpenseList from '../ExpenseList/ExpenseList';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2021');

  function filterYearHandler(year) {
    setFilterYear(year);
  }

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <div className="expenses">
      <ExpenseFilter onFilterYear={filterYearHandler} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </div>
  );
}

export default Expenses;
