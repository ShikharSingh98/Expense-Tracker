import React from 'react';

import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <form className="expense-form">
      <div className="expense-form-control">
        <label>Expense Name</label>
        <input type="text" />
      </div>
      <div className="expense-form-control">
        <label>Expense Amount</label>
        <input type="number" />
      </div>
      <div className="expense-form-control">
        <label>Date of Expense</label>
        <input type="date" />
      </div>
      <div className="expense-form-control">
        <button className=" expense-form-button">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
