import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent = (
    <h2 className="expenses-list__fallback">Found no expenses!</h2>
  );

  if (props.items.length > 0) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
