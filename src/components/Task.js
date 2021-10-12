import { FaTrashAlt} from 'react-icons/fa'
// import Button from "./Button"


const Task = (props) => {
    
    return (
        <div className = {`Task ${props.task.reminder ? 'reminder': ''}`} onDoubleClick = { () =>  props.toggle(props.task.id)}>
            <div className = 'text'>
                <h3> {props.task.text.toUpperCase()} </h3>
                <p> {props.task.day} </p>
            </div>
            <div className = 'icon'>
                < FaTrashAlt style= {{color:'red', cursor: 'pointer'}} onClick = {() => props.del(props.task.id)}/>
                {/* <Button text = {'Delete'} color = {'red'} func = {() => props.del(props.task.id)}/> */}
            </div>
        </div>
    )
}

export default Task
