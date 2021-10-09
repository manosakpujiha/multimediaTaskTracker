
import Task from "./Task"
 


const Tasks = (props) => {
    
    return (
        <div>
             {props.tasks.map((task) => <Task key = {task.id} task= {task} del = {props.del} toggle = {props.toggle} />)}
        </div>
    )
}

export default Tasks
