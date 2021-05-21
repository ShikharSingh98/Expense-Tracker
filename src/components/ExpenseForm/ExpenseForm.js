import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
  const [expenseData, setExpenseData] = useState({
    expenseName: '',
    expenseDate: '',
    expenseAmount: '',
  });

  function inputChangeHandler(event) {
    setExpenseData(function (prevState) {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    props.onSaveExpenseData(expenseData);
    setExpenseData({
      expenseName: '',
      expenseDate: '',
      expenseAmount: '',
    });
  }

  const { expenseName, expenseAmount, expenseDate } = expenseData;

  return (
    <form className="expense-form" onSubmit={formSubmitHandler}>
      <div className="expense-form-control">
        <label>Expense Name</label>
        <input
          type="text"
          name="expenseName"
          value={expenseName}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="expense-form-control">
        <label>Expense Amount</label>
        <input
          type="number"
          name="expenseAmount"
          value={expenseAmount}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="expense-form-control">
        <label>Date of Expense</label>
        <input
          type="date"
          name="expenseDate"
          value={expenseDate}
          onChange={inputChangeHandler}
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
