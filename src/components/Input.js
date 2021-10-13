import { useState } from "react";
import Button from "./Button";
import typingSound from '../static/typing4.wav';
let audioObj = new Audio(typingSound);

const Input = (props) => {
  const [text, setText] = useState('');
  const [day, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const submit = () => {
        if (!text) {
            alert('please add a task')
        } else {
            props.add({text, day, reminder})
        }
        setText('')
        setDate('')
        setReminder (false)
  }

    return (
        <div className = 'Input'>

            <label>Task</label>
            <input type="text" placeholder = {`Task`} value = {text} onChange = {(e) => { 
                audioObj.play();
                setText(e.target.value)}}/>

            <label>Date</label>
            <input type="text" placeholder = {`Date and time`} value = {day} onChange = {
                (e) => {
                    audioObj.play();
                    setDate(e.target.value)
                }}
            />
            
            <label>Reminder</label>
            <input 
                type="checkbox"
                value = {reminder} 
                onChange = {
                        (e) => {
                        audioObj.play();
                        setReminder(e.currentTarget.checked);
                    }
                }
            />
            <Button margin = {'2rem'} text = {'ADD TASK'} color = {'rgb(0, 255, 85)'} func = {submit}/>

        </div>
    )
}

export default Input
