import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense({ onAddExpense }) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    handleClick();
  };

  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='new-expense'>
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          handleClick={handleClick}
        />
      )}
      {!showForm && <button onClick={handleClick}>Add new Expense</button>}
    </div>
  );
}

export default NewExpense;
