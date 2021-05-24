import React, { useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import './Expenses.css';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2021');

  function filterYearHandler(year) {
    setFilterYear(year);
  }

  function filterExpenses() {
    return props.expenses.filter(
      (expense) => expense.date.getFullYear().toString() === filterYear
    );
  }

  return (
    <div className="expenses">
      <ExpenseFilter onFilterYear={filterYearHandler} />
      {filterExpenses().map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
