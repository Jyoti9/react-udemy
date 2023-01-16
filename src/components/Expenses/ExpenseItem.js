import react, {useState} from "react"
import Card from "./../UI/Card"
import ExpenseDate from "./ExpenseDate"
import './ExpenseItem.css'
const ExpenseItem = (props) =>{
    const [title,setTitle] = useState(props.name);
    const clickHandler = ()=>{
        setTitle('updated !!!!')
    }
    return(
        <Card className="expense-item"> 
          <ExpenseDate dateData={props.date}></ExpenseDate>
          <div className="expense-item__description">
            <h2>{title}</h2>
          <div className="expense-item__price">{props.amt}</div>
          <button onClick={clickHandler}>Click me</button>
          </div>
           </Card>
    )
}

export default ExpenseItem