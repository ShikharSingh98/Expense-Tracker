import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

function ExpenseList(props) {
  return (
    <div>
      {props.filteredExpenses.map((filteredExpense) => {
        return (
          <ExpenseItem
            key={filteredExpense.id}
            name={filteredExpense.name}
            amount={filteredExpense.amount}
            date={filteredExpense.date}
          />
        );
      })}
    </div>
  );
}
export default ExpenseList;
