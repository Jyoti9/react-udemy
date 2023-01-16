import './Card.css';
import react from "react"
const Card = (prop) => {
    const classes = 'card ' + prop.className;
    return <div className={classes}>{prop.children}</div>
}

export default Card