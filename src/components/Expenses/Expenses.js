import react, {useState} from "react"
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from './../UI/Card';
import ExpenseFilter from './../Expenses/ExpensesFilter'
const Expenses = (props) => {
    const expenses = props.expenseData;
    const [currentYear, SetYear] = useState('2020');
    const yearChangeHandler = (year)=>{
        SetYear(year);
    }
    return(
            <Card className="expenses">
            <ExpenseFilter onYearChange={yearChangeHandler} yearVal={currentYear}/>
                <ExpenseItem name={expenses[0].name} date={expenses[0].date} amt={expenses[0].amount}></ExpenseItem>
                <ExpenseItem name={expenses[1].name} date={expenses[1].date} amt={expenses[1].amount}></ExpenseItem>
                <ExpenseItem name={expenses[2].name} date={expenses[2].date} amt={expenses[2].amount}></ExpenseItem>
                <ExpenseItem name={expenses[3].name} date={expenses[3].date} amt={expenses[3].amount}></ExpenseItem>
            </Card>
    )
}
export default Expenses