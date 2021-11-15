import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function NewExpenseItem(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState('2020');

  const onExpensesFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onExpensesFilter={onExpensesFilter}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} onDelete={props.onDelete} />
    </Card>
  );
}

export default NewExpenseItem;
