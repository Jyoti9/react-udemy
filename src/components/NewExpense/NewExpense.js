import react from "react";
import './../NewExpense/NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) =>{
    const SaveExpenseDatahandler = (enteredExpenseData)=>{
        const expenseData= {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm OnSaveExpenseData={SaveExpenseDatahandler}/>
        </div>
    )
}
export default NewExpense;