import Button from "./Button"

const Task = (props) => {
    
    return (
        <div className ={ `Task ${props.task.reminder ? 'reminder': ''} `} onDoubleClick = { () =>  props.toggle(props.task.id)}>
            <div className = 'text'>
                <h3> {props.task.text} </h3>
                <p> {props.task.day} </p>
            </div>
            
            <Button text = {'Delete'} color = {'red'} func = {() => props.del(props.task.id)}/>
        </div>
    )
}

export default Task
