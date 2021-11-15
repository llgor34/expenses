import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const { amount, date, title, onDelete: deleteHandler, id } = props;

  const clickHandler = () => {
    deleteHandler(id);
  };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{`$${amount}`}</div>
          <button type='button' onClick={clickHandler}>
            Delete
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
