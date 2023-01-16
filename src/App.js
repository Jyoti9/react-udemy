import react from "react"
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [{
    name: 'Wifi',
    date: new Date(2021, 4, 24),
    amount: '1500'
  },
    {
      name: 'Food',
      date: new Date(2022, 11, 2),
      amount: '2000'
    },
    {
      name: 'Clothes',
      date: new Date(2020, 9, 14),
      amount: '5000'
    },
    {
      name: 'Shoes',
      date: new Date(2024, 6, 23),
      amount: '1200'
    }];
  const addExpenseHandler = (expense) =>{
console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenseData={expenses}></Expenses>
    </div>
  );
}

export default App;
