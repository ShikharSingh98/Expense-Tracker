import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  function nameChangeHandler(event) {
    setExpenseName(event.target.value);
  }

  function amountChangeHandler(event) {
    setExpenseAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setExpenseDate(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    const expeseData = {
      name: expenseName,
      amount: Number(expenseAmount),
      date: new Date(expenseDate),
    };
    props.onSaveExpenseData(expeseData);
    setExpenseName('');
    setExpenseAmount('');
    setExpenseDate('');
  }

  return (
    <form className="expense-form" onSubmit={formSubmitHandler}>
      <div className="expense-form-control">
        <label>Expense Name</label>
        <input
          type="text"
          name="expenseName"
          value={expenseName}
          onChange={nameChangeHandler}
        />
      </div>
      <div className="expense-form-control">
        <label>Expense Amount</label>
        <input
          type="number"
          name="expenseAmount"
          value={expenseAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="expense-form-control">
        <label>Date of Expense</label>
        <input
          type="date"
          name="expenseDate"
          value={expenseDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="expense-form-control">
        <button type="submit" className=" expense-form-button">
          Add Expense
        </button>
      </div>
    </form>
  );
}
export default ExpenseForm;
